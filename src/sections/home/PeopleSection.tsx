import { ArrowRight } from 'lucide-react';
import { images, type Page } from '../../data/siteContent';

export default function PeopleSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <section className="home-people">
      <h2>People who pay attention.</h2>
      <div className="people-feature">
        <img src={images.office} alt="Moussa Advocates office" />
        <div>
          <p>
            Moussa Rwabukumba is a senior commercial litigator and registered advocate based in
            Kigali, Rwanda.
          </p>
          <button className="text-link" onClick={() => onNavigate('about-profile')}>
            Read his professional profile <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}
