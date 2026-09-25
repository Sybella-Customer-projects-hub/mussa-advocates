import { ArrowRight } from 'lucide-react';
import { type Page } from '../../data/siteContent';

export default function PreparationSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <section className="home-preparation">
      <div>
        <h2>A useful first conversation does not need perfect paperwork.</h2>
      </div>
      <div className="preparation-content">
        <p>
          Bring the facts you know, the questions you are asking and any deadline that matters. We
          can help you understand what is important and what can wait.
        </p>
        <button className="text-link" onClick={() => onNavigate('help')}>
          Tell us what you are dealing with <ArrowRight size={12} />
        </button>
      </div>
    </section>
  );
}
