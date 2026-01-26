// Interfacce per i Playbook - struttura semplificata e dinamica

export interface PlaybookFAQ {
  question: string;
  answer: string;
}

export interface PlaybookLink {
  anchor: string;
  url: string;
}

export interface PlaybookCTA {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface PlaybookHero {
  title: string;
  subtitle: string;
  lastUpdated: string;
  readTime: string;
}

export interface PlaybookTldr {
  short: string;
  bullets: string[];
}

export interface PlaybookContent {
  slug: string;
  niche: string;
  nicheName: string;
  hero: PlaybookHero;
  tldr: PlaybookTldr;
  quickQuestions: string[];
  cta: PlaybookCTA;
  content: string;
  faqs: PlaybookFAQ[];
  relatedLinks: PlaybookLink[];
  tocSections: string[];
}
