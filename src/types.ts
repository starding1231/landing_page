import { ReactNode } from 'react';

export type PointColor = string;

export interface SectionContent {
  id: string;
  isEnabled: boolean;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  badge?: string;
}

export interface HeroSection extends SectionContent {
  hookLine: string;
  buttons?: CTAButton[];
}

export interface ProblemSection extends SectionContent {
  painPoints: string[];
}

export interface SolutionSection extends SectionContent {
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface CTAButton {
  label: string;
  url: string;
  type: 'kyobo' | 'yes24' | 'aladdin' | 'primary' | 'secondary';
}

export interface LandingPageContent {
  hero: HeroSection;
  problem: ProblemSection;
  solution: SolutionSection;
  assistants: SectionContent & { items: string[] };
  feature?: SectionContent & { benefits: string[] };
  proof: SectionContent & { testimonials: { name: string; text: string; role: string }[] };
  cta: {
    headline?: string;
    buttons: CTAButton[];
    footerText: string;
  };
}

export interface SiteTheme {
  pointColor: string;
  backgroundColor: string;
  fontFamily: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  ogImage: string;
  keywords: string;
}

export interface AppState {
  content: LandingPageContent;
  theme: SiteTheme;
  seo: SEOConfig;
}

export interface ContentContextType {
  state: AppState;
  updateContent: (path: string, value: any) => void;
  updateTheme: (path: keyof SiteTheme, value: string) => void;
  updateSEO: (path: keyof SEOConfig, value: string) => void;
  updateSectionVisibility: (sectionId: string, isEnabled: boolean) => void;
}
