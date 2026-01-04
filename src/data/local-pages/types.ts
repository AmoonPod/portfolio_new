export type Block =
  | {
      kind: 'callout';
      title: string;
      body: string;
      variant?: 'info' | 'warning' | 'success';
    }
  | { kind: 'checklist'; title: string; items: string[]; icon?: boolean }
  | {
      kind: 'case';
      title: string;
      before: string;
      after: string;
      metrics?: Array<{ label: string; value: string; trend?: 'up' | 'down' }>;
    }
  | {
      kind: 'table';
      title: string;
      rows: Array<{ a: string; b: string }>;
      highlightIndex?: number;
    }
  | {
      kind: 'comparison'; // AGGIORNATO: Ora supporta items con "has: boolean"
      title: string;
      items: Array<{ 
        label: string; 
        has: boolean; 
        description?: string;
        standardPercent?: number; // Percentuale per la barra "Standard" (0-100)
        standardLabel?: string; // Testo personalizzato al posto di "Limitato"
      }>;
    }
  | {
      kind: 'process';
      title: string;
      steps: Array<{ step: number; title: string; description: string }>;
    }
  | {
      kind: 'testimonial';
      text: string;
      author: string;
      role: string;
      location: string;
    }
  | {
      kind: 'stats';
      title: string;
      items: Array<{ label: string; value: string; description: string }>;
    };

export interface LocalPageData {
  slug: string;
  cityName: string;
  province: string;
  region: string;
  population?: number;

  seo: {
    title: string;
    description: string;
    canonical: string;
    keywords?: string[];
    h1: string;
  };

  hero: {
    h1: string;
    sub: string;
    ctaText: string;
    ctaHref: string;
    trustSignal?: string;
  };

  pain: {
    title: string;
    bullets: string[];
  };

  solution: {
    title: string;
    highlights?: string[];
  };

  uniqueBlocks: Block[];

  faq: Array<{ q: string; a: string }>;

  links: Array<{ label: string; href: string }>;

  serviceSlug: string;
  serviceName: string;
  offer?: {
    title: string;
    description: string;
    price: string;
    badge?: string;
  };
}

export interface LocalCityLink {
  slug: string;
  cityName: string;
  province: string;
}
