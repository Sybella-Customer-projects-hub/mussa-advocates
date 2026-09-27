import { Menu } from "lucide-react";
import { navItems, type Page } from "../../data/siteContent";
import Logo from "../shared/Logo";

interface TopNavProps {
  page: Page;
  onNavigate: (page: Page, section?: string) => void;
  onOpenMenu: () => void;
  light?: boolean;
}

export default function TopNav({ page, onNavigate, onOpenMenu, light = false }: TopNavProps) {
  return (
    <div className={`nav-stack ${light ? "nav-light" : "nav-dark"}`}>
      <div className="registration-strip">Firm Registration No. SYBELLA-0001-000-PERFECT</div>
      <header className="top-nav">
        <button className="brand-button" onClick={() => onNavigate("home")} aria-label="Moussa Advocates home"><Logo light={light} /></button>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <div className="nav-group" key={item.page}>
              <button className={page === item.page ? "active" : ""} onClick={() => onNavigate(item.page)} aria-haspopup={item.children ? "true" : undefined}>
                {item.label}
              </button>
              {item.children && <div className="nav-dropdown" role="group" aria-label={`${item.label} links`}>
                {item.children.map((child) => <button key={child.label} onClick={() => onNavigate(child.page, child.section)}>{child.label}</button>)}
              </div>}
            </div>
          ))}
          <button className="nav-cta" onClick={() => onNavigate("help")}>Get in touch</button>
        </nav>
        <button className="menu-button" onClick={onOpenMenu} aria-label="Open menu"><Menu size={18} /></button>
      </header>
    </div>
  );
}
