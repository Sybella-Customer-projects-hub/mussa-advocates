import { Mail, MapPin, Phone } from "lucide-react";
import { type Page } from "../../data/siteContent";
import Logo from "../shared/Logo";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer>
      <div className="footer-brand"><button onClick={() => onNavigate("home")} aria-label="Moussa Advocates home"><Logo light /></button><span>Kigali, Rwanda</span></div>
      <div className="footer-links">
        <button onClick={() => onNavigate("services")}>Services</button><button onClick={() => onNavigate("about")}>About</button><button onClick={() => onNavigate("legal-process")}>Legal Process</button><button onClick={() => onNavigate("insights")}>Insights</button><button onClick={() => onNavigate("help")}>Legal Help</button><button onClick={() => onNavigate("contact")}>Contact</button>
      </div>
      <div className="footer-contact"><a href="tel:+250788123456"><Phone size={13} /> Call</a><a href="mailto:info@moussaadvocates.rw"><Mail size={13} /> Email</a><a href="https://maps.google.com/?q=Kigali,Rwanda" target="_blank" rel="noreferrer"><MapPin size={13} /> Directions</a></div>
      <small className="footer-bottom"><span className="legal-disclaimer">Legal disclaimer: Website content is general information, not legal advice, and does not create an advocate-client relationship. Seek advice on your specific circumstances.</span><span>© 2026 Moussa Advocates · Built by <a href="https://sybellasystems.com" target="_blank" rel="noreferrer">Sybella Systems</a></span></small>
    </footer>
  );
}
