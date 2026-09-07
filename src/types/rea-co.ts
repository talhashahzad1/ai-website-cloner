export interface NavLink {
  label: string;
  href: string;
}

export interface SoftwareCard {
  name: string;
  subtitle: string;
  imageSrc: string;
  href: string;
}

export interface ServiceItem {
  label: string;
}

export interface TechTool {
  category: string;
  name: string;
  description: string;
}

export interface TechFeature {
  title: string;
  description: string;
}

export interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
}

export interface TeamRole {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface IndustryLink {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  title: string;
  imageSrc: string;
  bio?: string;
  quote?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterNavSection {
  title: string;
  links: NavLink[];
}

export interface StatItem {
  value: string;
  label: string;
}
