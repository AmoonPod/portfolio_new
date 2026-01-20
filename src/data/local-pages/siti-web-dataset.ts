import { LocalPageData } from './types';

const BASE_URL = 'https://manueldeceglie.it';

export const sitiWebDataset: LocalPageData[] = [
  
];

export const getLocalPageBySlug = (slug: string): LocalPageData | undefined => {
  return sitiWebDataset.find((page) => page.slug === slug);
};

export const getAllSlugs = (): string[] => {
  return sitiWebDataset.map((page) => page.slug);
};

export const getPagesByProvince = (province: string): LocalPageData[] => {
  return sitiWebDataset.filter((page) => page.province === province);
};
