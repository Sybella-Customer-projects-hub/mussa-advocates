import { Menu } from 'lucide-react';
import { navItems, type Page } from '../../data/siteContent';
import Logo from '../shared/Logo';

interface TopNavProps {
  page: Page;
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
  light?: boolean;
}

export default function TopNav({ page, onNavigate, onOpenMenu, light = false }: TopNavProps) {
  return (
    <header className={`top-nav ${light ? 'nav-light' : 'nav-dark'}`}>
      <button
        className="brand-button"
        onClick={() => onNavigate('home')}
        aria-label="Moussa Advocates home"
      >
        <Logo light={light} />
      </button>
      <nav className="desktop-nav">
        {navItems.map((item) => (
          <button
            className={page === item.page ? 'active' : ''}
            key={item.page}
            onClick={() => onNavigate(item.page)}
          >
            {item.label}
          </button>
        ))}
        <button className="nav-cta" onClick={() => onNavigate('help')}>
          Get in touch
        </button>
      </nav>
      <button className="menu-button" onClick={onOpenMenu} aria-label="Open menu">
        <Menu size={18} />
      </button>
    </header>
  );
}
