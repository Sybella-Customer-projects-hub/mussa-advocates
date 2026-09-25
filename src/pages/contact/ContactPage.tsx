import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { type Page } from '../../data/siteContent';
import Footer from '../../components/layout/Footer';
import PageHero from '../../components/layout/PageHero';

export default function ContactPage({
  onNavigate,
  onOpenMenu,
}: {
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}) {
  return (
    <main className="detail-page">
      <PageHero
        page="contact"
        title="Contact Us"
        subtitle="Let's talk."
        onNavigate={onNavigate}
        onOpenMenu={onOpenMenu}
      />
      <section className="contact-page-section">
        <div>
          <p className="kicker">Contact</p>
          <h2>Let's talk about what comes next.</h2>
          <p>Kigali, Rwanda</p>
        </div>
        <div className="contact-actions">
          <a href="tel:+250788123456">
            <Phone size={14} /> +250 788 123 456
          </a>
          <a href="mailto:info@moussaadvocates.rw">
            <Mail size={14} /> info@moussaadvocates.rw
          </a>
          <a href="https://maps.google.com/?q=Kigali,Rwanda" target="_blank" rel="noreferrer">
            <MapPin size={14} /> Get directions
          </a>
          <button className="text-link" onClick={() => onNavigate('help')}>
            Send an enquiry <ArrowRight size={12} />
          </button>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </main>
  );
}
