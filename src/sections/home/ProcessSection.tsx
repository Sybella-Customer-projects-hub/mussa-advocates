import { ArrowRight } from "lucide-react";
import { type Page } from "../../data/siteContent";

const steps = [
  ["Start with the matter", "Tell us what has happened, what is at stake and what outcome you need."],
  ["Understand the options", "We identify the relevant questions, risks and practical paths forward."],
  ["Choose the next step", "You leave with a clearer direction, whether that means advice, action or time to decide."],
];

export default function ProcessSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <section className="home-process">
      <div className="section-heading"><h2>Good legal guidance<br />starts with listening.</h2></div>
      <div className="process-list">
        {steps.map(([title, description], index) => (
          <div className="process-row" key={title}>
            <span>{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div>
          </div>
        ))}
      </div>
      <button className="text-link" onClick={() => onNavigate("help")}>Start with your matter <ArrowRight size={12} /></button>
    </section>
  );
}
