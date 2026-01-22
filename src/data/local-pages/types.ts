export interface LocalPageData {
  slug: string;
  cityName: string;
  province: string;
  region: string;
  population?: number;
  active: boolean; // If false, page won't be indexed by robots and won't be accessible
  geo?: {
    lat: number;
    lng: number;
  };

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

  diagnostica?: {
    badge: string;
    title: string | React.ReactNode;
    problems: string[];
    solutions: Array<string | { text: string; value?: string }>;
  };

  goodInvestment?: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    cards: Array<{
      icon: 'star' | 'shield' | 'zap';
      title: string;
      description: string;
      description2: string;
      footerType: 'premium' | 'ownership' | 'roi';
    }>;
  };

  faq: Array<{ q: string; a: string }>;

  serviceSlug: string;
  serviceName: string;
  offers?: Array<{
    id: string; // Unique identifier for the offer
    title: string;
    description: string;
    price: string; // e.g., "490", "1.490"
    badge?: string;
    active: boolean; // Whether this offer is currently active
    type: 'landing' | 'website'; // Type of offer
    features: string[]; // List of features (first 3 shown in popup)
  }>;
}

export interface NichePageData extends LocalPageData {
  nicheSlug: string;
  nicheName: string;
  nicheContent?: {
    painPoints: Array<{
      icon: string;
      title: string;
      description: string;
      keyword: string;
    }>;
    features: Array<{
      icon: string;
      title: string;
      description: string;
      benefit: string;
    }>;
    stats: Array<{
      value: string;
      label: string;
      source: string;
    }>;
    testimonials: Array<{
      quote: string;
      author: string;
      business: string;
      location: string;
      rating?: number;
    }>;
  };
  relatedCities?: Array<{
    slug: string;
    cityName: string;
  }>;
}

export interface LocalCityLink {
  slug: string;
  cityName: string;
  province: string;
}
