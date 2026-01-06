'use server';

import fs from 'fs/promises';
import path from 'path';
import { LocalPageData } from '@/data/local-pages/types';

export async function saveDatasetToDisk(dataset: LocalPageData[]) {
  try {
    // Percorso del file dataset
    const filePath = path.join(
      process.cwd(),
      'src/data/local-pages/siti-web-dataset.ts'
    );

    // Ricostruiamo il contenuto del file.
    // Nota: JSON.stringify converte tutto in stringhe statiche.
    const fileContent = `import { LocalPageData } from './types';

const BASE_URL = 'https://manueldeceglie.it';

export const sitiWebDataset: LocalPageData[] = ${JSON.stringify(
      dataset,
      null,
      2
    )};

export const getLocalPageBySlug = (slug: string): LocalPageData | undefined => {
  return sitiWebDataset.find((page) => page.slug === slug);
};

export const getAllSlugs = (): string[] => {
  return sitiWebDataset.map((page) => page.slug);
};

export const getPagesByProvince = (province: string): LocalPageData[] => {
  return sitiWebDataset.filter((page) => page.province === province);
};
`;

    await fs.writeFile(filePath, fileContent, 'utf-8');
    return { success: true, message: 'Dataset salvato correttamente!' };
  } catch (error) {
    console.error('Errore salvataggio dataset:', error);
    return {
      success: false,
      message: 'Errore durante il salvataggio su disco.',
    };
  }
}
