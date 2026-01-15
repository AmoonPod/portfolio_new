export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  locationCity?: string; // Città dove è stato realizzato il progetto (per matching con local pages)
  date: string;
  headerImage: string;
  videoUrl?: string;
  websiteUrl?: string;
  technologies: string[];
  results?: CaseStudyResult[];
  content: string; // Markdown content
  seo: CaseStudySEO;
  featured?: boolean;
  order?: number;
}

export interface CaseStudyResult {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface CaseStudySEO {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  keywords?: string[];
}
