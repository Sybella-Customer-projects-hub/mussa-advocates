import { ArrowRight } from 'lucide-react';
import { type Page } from '../../data/siteContent';

export default function IntroSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <section className="home-intro">
      <h2>
        Legal work should begin
        <br className="desktop-only" /> with understanding.
      </h2>
      <p>
        We help individuals, businesses and organisations navigate important legal matters with
        clear advice, careful attention and practical direction.
      </p>
      <button className="text-link" onClick={() => onNavigate('about')}>
        About Moussa Advocates <ArrowRight size={12} />
      </button>
    </section>
  );
}
