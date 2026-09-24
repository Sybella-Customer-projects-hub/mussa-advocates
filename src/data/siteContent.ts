export type Page = "home" | "about" | "services" | "insights" | "contact" | "help" | "service-detail" | "article";

export interface Article {
  title: string;
  image: string;
  date: string;
  body: string;
}

export const images = {
  hero: "https://images.pexels.com/photos/6077797/pexels-photo-6077797.jpeg?auto=compress&cs=tinysrgb&w=1800",
  office: "https://images.pexels.com/photos/33719779/pexels-photo-33719779.jpeg?auto=compress&cs=tinysrgb&w=1200",
  court: "https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=1200",
  writing: "https://images.pexels.com/photos/8112113/pexels-photo-8112113.jpeg?auto=compress&cs=tinysrgb&w=1200",
} as const;

export const navItems: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Services", page: "services" },
  { label: "Insights", page: "insights" },
  { label: "Contact", page: "contact" },
];

export const services = [
  "Corporate & Commercial",
  "Dispute Resolution",
  "Property & Real Estate",
  "Family & Succession",
  "Employment & Labour",
  "Other Legal Matters",
];

export const articles: Article[] = [
  { title: "Understanding Rwanda's New Business Registration Process", image: images.court, date: "September 2026", body: "A clear introduction to the steps, documents and decisions involved when registering a business in Rwanda." },
  { title: "Key Changes in Labour Law Affecting Employers", image: images.hero, date: "September 2026", body: "What employers should review when managing contracts, workplace expectations and employment decisions." },
  { title: "Tips for Protecting Your Intellectual Property in Rwanda", image: images.writing, date: "August 2026", body: "Practical considerations for protecting ideas, brands and creative work as your organisation grows." },
];
