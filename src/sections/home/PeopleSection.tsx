import { ArrowRight } from 'lucide-react';
import { images, type Page } from '../../data/siteContent';

export default function PeopleSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <section className="home-people">
      <h2>People who pay attention.</h2>
      <div className="people-feature">
        <img src={images.office} alt="Moussa Advocates office" />
        <div>
          <p>Meet the advocates behind Moussa Advocates.</p>
          <button className="text-link" onClick={() => onNavigate('about')}>
            Meet the team <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}
