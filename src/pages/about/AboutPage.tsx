import { ArrowRight } from 'lucide-react';
import { aboutSubsections, images, type Page } from '../../data/siteContent';
import Footer from '../../components/layout/Footer';
import TopNav from '../../components/navigation/TopNav';

export default function AboutPage({
  onNavigate,
  onOpenMenu,
}: {
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}) {
  return (
    <main className="about-page">
      <section
        className="about-intro"
        style={{
          backgroundImage: [
            'linear-gradient(90deg, rgba(1, 16, 18, 0.92), rgba(1, 16, 18, 0.35))',
            `url(${images.hero})`,
          ].join(', '),
        }}
      >
        <TopNav page="about" onNavigate={onNavigate} onOpenMenu={onOpenMenu} light />
        <div className="about-intro-copy">
          <p className="kicker">Moussa Advocates · Kigali, Rwanda</p>
          <h1>
            Experienced counsel.
            <br />
            <em>Clear direction.</em>
          </h1>
          <p>
            A focused legal practice led by senior commercial litigator and registered advocate
            Moussa Rwabukumba.
          </p>
          <button className="about-scroll" onClick={() => onNavigate('about-profile')}>
            Explore the professional profile <ArrowRight size={14} />
          </button>
        </div>
      </section>

      <section className="about-overview">
        <div>
          <p className="kicker">A practice grounded in Kigali</p>
          <h2>Legal perspective for important decisions and disputes.</h2>
        </div>
        <div className="about-overview-copy">
          <p>
            Moussa Rwabukumba is a senior commercial litigator and registered advocate based in
            Kigali, Rwanda. His professional focus spans corporate and commercial law, banking and
            financial law.
          </p>
          <p>
            These areas often meet at the moments that matter most: when organisations make
            commitments, arrange financing, manage risk or need to resolve a commercial dispute. The
            practice is centred on understanding those circumstances and giving clients a considered
            legal path forward.
          </p>
          <button className="text-link" onClick={() => onNavigate('about-practice')}>
            Explore practice areas and services <ArrowRight size={12} />
          </button>
        </div>
      </section>

      <section className="about-subsections">
        <div className="about-section-heading">
          <div>
            <p className="kicker">Learn about the practice</p>
            <h2>Explore each part of our story.</h2>
          </div>
          <p>
            Choose a topic for a closer look at the professional profile, areas of work and
            principles behind the practice.
          </p>
        </div>
        <div className="about-subsection-grid">
          {aboutSubsections.map(({ label, page, description }, index) => (
            <button className="about-subsection-card" key={page} onClick={() => onNavigate(page)}>
              <span>0{index + 1}</span>
              <strong>{label}</strong>
              <small>{description}</small>
              <ArrowRight size={15} />
            </button>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <p className="kicker">Start with a conversation</p>
        <h2>Tell us what you need to move forward.</h2>
        <button className="light-button" onClick={() => onNavigate('contact')}>
          Get in touch <ArrowRight size={14} />
        </button>
      </section>
      <Footer onNavigate={onNavigate} />
    </main>
  );
}
