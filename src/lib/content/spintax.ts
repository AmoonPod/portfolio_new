const PRIME_1 = 73856093;
const PRIME_2 = 19349663;

export function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function deterministicPick<T>(items: T[], seed: string | number): T {
  let seedNum: number;
  if (typeof seed === 'string') {
    seedNum = hashString(seed);
  } else {
    seedNum = seed;
  }
  const index = seedNum % items.length;
  return items[Math.abs(index)];
}

export function pickVariant(cityId: string, variants: string[]): string {
  return deterministicPick(variants, cityId);
}

export function pickOne<T>(items: T[], cityId: string): T {
  return deterministicPick(items, cityId);
}

export function pickMultiple<T>(items: T[], cityId: string, count: number): T[] {
  if (count >= items.length) return items;
  
  const seed = hashString(cityId);
  const shuffled = [...items].sort((a, b) => {
    const hashA = (seed * PRIME_1 + items.indexOf(a)) % PRIME_2;
    const hashB = (seed * PRIME_2 + items.indexOf(b)) % PRIME_1;
    return hashA - hashB;
  });
  
  return shuffled.slice(0, count);
}

export function spintaxParse(text: string, cityId: string): string {
  const regex = /\{([^{}]+)\}/g;
  
  return text.replace(regex, (match, content) => {
    const variants = content.split('|').map((v: string) => v.trim());
    return pickVariant(cityId, variants);
  });
}

export function spintaxArray(
  baseTexts: string[],
  variants: Record<string, string[]>,
  cityId: string
): string[] {
  return baseTexts.map(text => spintaxParse(text, cityId));
}

export function shuffleWithSeed<T>(array: T[], seed: string | number): T[] {
  const seedNum = typeof seed === 'string' ? hashString(seed) : seed;
  const shuffled = [...array];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = ((seedNum * (i + 1)) % PRIME_1) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

export function isHighCompetition(province: string): boolean {
  const highCompetitionProvinces = ['Modena', 'Parma', 'Reggio Emilia', 'Bologna'];
  return highCompetitionProvinces.includes(province);
}

export function getPopulationTier(population: number): 'small' | 'medium' | 'large' | 'major' {
  if (population < 10000) return 'small';
  if (population < 50000) return 'medium';
  if (population < 150000) return 'large';
  return 'major';
}

export function getZoneContext(altitude: number, isIndustrial: boolean, isFoodValley: boolean): string {
  if (altitude > 500) return 'montano';
  if (altitude > 300) return 'collinare';
  if (isIndustrial) return 'industriale';
  if (isFoodValley) return 'food';
  return 'pianura';
}
