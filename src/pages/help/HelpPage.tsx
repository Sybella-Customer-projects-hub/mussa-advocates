import { ArrowLeft, ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import { type Page } from '../../data/siteContent';
import Footer from '../../components/layout/Footer';
import PageHero from '../../components/layout/PageHero';

export default function HelpPage({
  onNavigate,
  onOpenMenu,
}: {
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}) {
  const [selectedMatter, setSelectedMatter] = useState<string | null>(null);
  const matters = ['Business', 'Property', 'Dispute', 'Family', 'Employment', 'Other'];
  const message = selectedMatter
    ? `Hello Moussa Advocates, I would like help with a ${selectedMatter.toLowerCase()} matter.`
    : '';
  const whatsappUrl = `https://wa.me/250788123456?text=${encodeURIComponent(message)}`;
  const emailUrl = [
    'mailto:info@moussaadvocates.rw?subject=',
    encodeURIComponent(`${selectedMatter} legal enquiry`),
    '&body=',
    encodeURIComponent(message),
  ].join('');

  return (
    <main className="detail-page">
      <PageHero
        page="help"
        title="Get Legal Help"
        subtitle="Tell us what you need help with."
        onNavigate={onNavigate}
        onOpenMenu={onOpenMenu}
      />
      <section className="help-page-section">
        {selectedMatter ? (
          <div className="help-response">
            <button className="back-link" onClick={() => setSelectedMatter(null)}>
              <ArrowLeft size={13} /> Choose a different matter
            </button>
            <p className="kicker">Your enquiry</p>
            <h2>{selectedMatter} legal help.</h2>
            <p>
              Choose the channel that works best for you. You can explain the matter in your own
              words and an advocate can guide the next step.
            </p>
            <div className="help-contact-actions">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={17} />
                <span>
                  <strong>WhatsApp</strong>
                  <small>Message our team</small>
                </span>
                <ArrowRight size={14} />
              </a>
              <a href={emailUrl}>
                <Mail size={17} />
                <span>
                  <strong>Email</strong>
                  <small>Send an enquiry</small>
                </span>
                <ArrowRight size={14} />
              </a>
              <a href="tel:+250788123456">
                <Phone size={17} />
                <span>
                  <strong>Call</strong>
                  <small>+250 788 123 456</small>
                </span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ) : (
          <>
            <h2>What do you need help with?</h2>
            <div className="help-options">
              {matters.map((option) => (
                <button key={option} onClick={() => setSelectedMatter(option)}>
                  {option}
                  <ArrowRight size={14} />
                </button>
              ))}
            </div>
          </>
        )}
      </section>
      <Footer onNavigate={onNavigate} />
    </main>
  );
}
