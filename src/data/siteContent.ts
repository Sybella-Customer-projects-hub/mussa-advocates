export type Page =
  | 'home'
  | 'about'
  | 'about-profile'
  | 'about-practice'
  | 'about-mission'
  | 'about-vision'
  | 'about-location'
  | 'about-conduct'
  | 'services'
  | 'legal-process'
  | 'insights'
  | 'contact'
  | 'help'
  | 'service-detail'
  | 'article';

export interface NavItem {
  label: string;
  page: Page;
  section?: string;
  children?: NavItem[];
}

export interface Article {
  title: string;
  image: string;
  date: string;
  body: string;
}

export type AboutDetailPage = Extract<Page, `about-${string}`>;

export const aboutSubsections: {
  label: string;
  page: AboutDetailPage;
  description: string;
}[] = [
  {
    label: 'Professional Profile',
    page: 'about-profile',
    description: 'Meet Moussa Rwabukumba and learn about his professional focus.',
  },
  {
    label: 'Practice Areas & Services',
    page: 'about-practice',
    description: 'Explore corporate, commercial, banking and other legal services.',
  },
  {
    label: 'Our Mission',
    page: 'about-mission',
    description: 'The purpose that guides our work with clients.',
  },
  {
    label: 'Our Vision',
    page: 'about-vision',
    description: 'The kind of legal support we want to make possible.',
  },
  {
    label: 'Location',
    page: 'about-location',
    description: 'Learn about our Kigali base and how to connect.',
  },
  {
    label: 'Professional Conduct',
    page: 'about-conduct',
    description: 'Our commitment to careful, clear and respectful legal work.',
  },
];

export const images = {
  hero:
    'https://images.pexels.com/photos/6077797/pexels-photo-6077797.jpeg?' +
    'auto=compress&cs=tinysrgb&w=1800',
  office:
    'https://images.pexels.com/photos/33719779/pexels-photo-33719779.jpeg?' +
    'auto=compress&cs=tinysrgb&w=1200',
  court:
    'https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?' +
    'auto=compress&cs=tinysrgb&w=1200',
  writing:
    'https://images.pexels.com/photos/8112113/pexels-photo-8112113.jpeg?' +
    'auto=compress&cs=tinysrgb&w=1200',
} as const;

export const navItems: NavItem[] = [
  { label: 'Home', page: 'home' },
  {
    label: 'About',
    page: 'about',
    children: aboutSubsections.map(({ label, page }) => ({ label, page })),
  },
  {
    label: 'Legal Process',
    page: 'legal-process',
    children: [
      { label: 'Virtual', page: 'legal-process', section: 'virtual' },
      { label: 'In person', page: 'legal-process', section: 'in-person' },
    ],
  },
  { label: 'Services', page: 'services' },
  { label: 'Insights', page: 'insights' },
  { label: 'Contact', page: 'contact' },
];

export const services = [
  'Corporate & Commercial',
  'Dispute Resolution',
  'Property & Real Estate',
  'Family & Succession',
  'Employment & Labour',
  'Other Legal Matters',
];

export const articles: Article[] = [
  {
    title: "Understanding Rwanda's New Business Registration Process",
    image: images.court,
    date: 'September 2026',
    body:
      'A clear introduction to the steps, documents and decisions involved when registering a ' +
      'business in Rwanda.',
  },
  {
    title: 'Key Changes in Labour Law Affecting Employers',
    image: images.hero,
    date: 'September 2026',
    body:
      'What employers should review when managing contracts, workplace expectations and ' +
      'employment decisions.',
  },
  {
    title: 'Tips for Protecting Your Intellectual Property in Rwanda',
    image: images.writing,
    date: 'August 2026',
    body:
      'Practical considerations for protecting ideas, brands and creative work as your ' +
      'organisation grows.',
  },
];
