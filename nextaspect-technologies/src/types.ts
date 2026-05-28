export interface Service {
  id: string;
  name: string;
  shortDesc: string;
  detailedDesc: string;
  benefits: string[];
  features: string[];
  techUsed: string[];
  industries: string[];
  iconName: string;
  faqs: { question: string; answer: string }[];
}

export interface Technology {
  id: string;
  name: string;
  category: "frontend" | "backend" | "erp" | "database" | "cloud";
  overview: string;
  whyChoose: string;
  benefits: string[];
  useCases: string[];
  integrationCapabilities: string;
  relatedServices: string[];
  iconName: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  shortDesc: string;
  detailedDesc: string;
  features: string[];
  benefits: string[];
  techStack: string[];
  mockupType: "dashboard" | "spreadsheet" | "kanban" | "flowchart" | "portal";
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  industry: string;
  client: string;
  technologies: string[];
  problem: string;
  solution: string;
  businessImpact: string[];
  metric: string;
  metricLabel: string;
  mockupType: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}
