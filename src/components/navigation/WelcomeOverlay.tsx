import { useState } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  CircleUserRound,
  FileText,
  Mail,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { articles, navItems, services, type Page } from '../../data/siteContent';
import Logo from '../shared/Logo';

interface WelcomeOverlayProps {
  onClose: () => void;
  onNavigate: (page: Page, section?: string) => void;
}

const choices: {
  label: string;
  detail: string;
  keywords: string;
  page: Page;
  section?: string;
  icon: LucideIcon;
}[] = [
  {
    label: 'Our Services',
    detail: 'Explore legal services',
    keywords: services.join(' '),
    page: 'services',
    icon: BriefcaseBusiness,
  },
  {
    label: 'About Us',
    detail: 'Learn more about us',
    keywords: 'Moussa Advocates Rwanda approach people',
    page: 'about',
    icon: CircleUserRound,
  },
  ...navItems.flatMap(
    (item) =>
      item.children?.map((child) => ({
        label: child.label,
        detail:
          item.label === 'About'
            ? `About Moussa Advocates · ${child.label}`
            : `Legal process · ${child.label}`,
        keywords: `${item.label} ${child.label} ${child.section ?? ''}`,
        page: child.page,
        section: child.section,
        icon: item.label === 'About' ? CircleUserRound : FileText,
      })) ?? [],
  ),
  {
    label: 'Legal Process',
    detail: 'Virtual or in-person meetings',
    keywords: 'legal process virtual in person consultation',
    page: 'legal-process',
    icon: FileText,
  },
  {
    label: 'Legal Insights',
    detail: 'Read latest updates',
    keywords: articles.map((article) => article.title).join(' '),
    page: 'insights',
    icon: FileText,
  },
  {
    label: 'Get Legal Help',
    detail: 'Start your case',
    keywords: 'consultation advice legal matter',
    page: 'help',
    icon: ShieldCheck,
  },
  {
    label: 'Contact Us',
    detail: 'Get in touch',
    keywords: 'Kigali phone email office',
    page: 'contact',
    icon: Mail,
  },
];

export default function WelcomeOverlay({ onClose, onNavigate }: WelcomeOverlayProps) {
  const [query, setQuery] = useState('');
  const results = choices.filter((choice) =>
    `${choice.label} ${choice.detail} ${choice.keywords}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div className="welcome-overlay" role="dialog" aria-label="Moussa Advocates navigation">
      <div className="overlay-top">
        <div>
          <Logo light />
          <small className="overlay-registration">Firm Registration No. SYBELLA-0001-000-PERFECT</small>
        </div>
        <button onClick={onClose} aria-label="Close menu">
          <X size={21} />
        </button>
      </div>
      <div className="overlay-inner">
        <p className="kicker">Welcome.</p>
        <h2>What would you like to explore?</h2>
        <label className="overlay-search">
          <Search size={16} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ask a question or search the site"
            aria-label="Search the site"
          />
          <button type="button" aria-label="Clear search" onClick={() => setQuery('')}>
            <X size={14} />
          </button>
        </label>
        <div className="overlay-option-grid">
          {results.map(({ label, detail, page, section, icon: Icon }) => (
            <button
              className="overlay-option"
              key={label}
              onClick={() => onNavigate(page, section)}
            >
              <Icon size={17} />
              <strong>{label}</strong>
              <small>{detail}</small>
              <ArrowRight size={12} />
            </button>
          ))}
          {results.length === 0 && (
            <p className="empty-result">No matching destination. Try a different search.</p>
          )}
        </div>
      </div>
      <p className="overlay-foot">Moussa Advocates · Kigali, Rwanda</p>
    </div>
  );
}
