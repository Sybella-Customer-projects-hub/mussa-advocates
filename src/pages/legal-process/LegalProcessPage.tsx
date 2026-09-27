import { ArrowRight } from "lucide-react";
import { type Page } from "../../data/siteContent";
import Footer from "../../components/layout/Footer";
import PageHero from "../../components/layout/PageHero";

export default function LegalProcessPage({ onNavigate, onOpenMenu }: { onNavigate: (page: Page) => void; onOpenMenu: () => void }) {
  return (
    <main className="detail-page">
      <PageHero page="legal-process" title="The Legal Process" subtitle="Choose the way you would like to meet." onNavigate={onNavigate} onOpenMenu={onOpenMenu} />
      <section className="process-options">
        <article id="virtual">
          <p className="kicker">Option 01 · Virtual</p>
          <h2>Meet from wherever you are.</h2>
          <p>Start with a phone or video conversation. Share the key details of your matter, discuss your questions with an advocate and agree on practical next steps.</p>
          <button className="text-link" onClick={() => onNavigate("contact")}>Arrange a virtual meeting <ArrowRight size={12} /></button>
        </article>
        <article id="in-person">
          <p className="kicker">Option 02 · In person</p>
          <h2>A conversation in Kigali.</h2>
          <p>Meet with our team in person in Kigali, Rwanda. Contact us to discuss your matter and confirm a suitable time and meeting details.</p>
          <button className="text-link" onClick={() => onNavigate("contact")}>Arrange an in-person meeting <ArrowRight size={12} /></button>
        </article>
      </section>
      <Footer onNavigate={onNavigate} />
    </main>
  );
}
