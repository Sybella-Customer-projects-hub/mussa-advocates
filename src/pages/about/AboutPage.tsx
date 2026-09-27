import { useState } from "react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { type Page } from "../../data/siteContent";
import Footer from "../../components/layout/Footer";
import TopNav from "../../components/navigation/TopNav";

const stories = [
  {
    label: "Our mission",
    question: "What could business feel like if everyone understood the legal path ahead?",
    answer: "We make legal processes clear, practical and human, so people and organisations can move forward with confidence.",
  },
  {
    label: "Our impact",
    question: "How much stronger can a community become when justice is easier to reach?",
    answer: "Every matter we handle is an opportunity to protect rights, strengthen good decisions and create lasting trust.",
  },
  {
    label: "Our approach",
    question: "What changes when your advocate listens before they advise?",
    answer: "You get counsel shaped around your real priorities: direct communication, careful preparation and solutions that work beyond the page.",
  },
  {
    label: "Our people",
    question: "Who should stand beside you when the stakes are high?",
    answer: "A thoughtful team that brings rigorous legal thinking, local understanding and a steady presence to every conversation.",
  },
  {
    label: "Our promise",
    question: "What should you expect from a law firm you trust?",
    answer: "Integrity in every recommendation, responsiveness when it matters and the courage to pursue the right result.",
  },
];

const team = [
  { name: "Moussa Advocates", role: "A trusted team in Kigali", image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Built around you", role: "Clear counsel, practical action", image: "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Ready for what matters", role: "Experienced, attentive, prepared", image: "https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=700" },
];

export default function AboutPage({ onNavigate, onOpenMenu }: { onNavigate: (page: Page, section?: string) => void; onOpenMenu: () => void }) {
  const [selected, setSelected] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const chooseStory = (index: number) => {
    setSelected(index);
    setRevealed(false);
  };

  const story = stories[selected];

  return (
    <main className="about-page">
      <section className="about-intro" id="overview">
        <TopNav page="about" onNavigate={onNavigate} onOpenMenu={onOpenMenu} light />
        <div className="about-intro-copy">
          <p className="kicker">Moussa Advocates · Kigali, Rwanda</p>
          <h1>Good counsel starts with a better <em>conversation.</em></h1>
          <p>Meet our team, explore our services and learn about our mission, vision, location and standards of conduct.</p>
          <a className="about-scroll" href="#about-stories">Explore our story <ArrowDown size={14} /></a>
        </div>
      </section>

      <section className="about-stories" id="about-stories">
        <div className="about-section-heading">
          <div><p className="kicker">Take a closer look</p><h2>What would you like to know?</h2></div>
          <p>Explore how we work, what guides our practice and the team behind it.</p>
        </div>
        <div className="story-layout">
          <div className="story-menu" role="tablist" aria-label="About Moussa Advocates">
            {stories.map((item, index) => (
              <button className={selected === index ? "story-tab active" : "story-tab"} key={item.label} onClick={() => chooseStory(index)} role="tab" aria-selected={selected === index}>
                <span>0{index + 1}</span><strong>{item.label}</strong><ArrowRight size={14} />
              </button>
            ))}
          </div>
          <div className={`story-card ${revealed ? "is-revealed" : ""}`} role="tabpanel">
            <p className="story-status">{revealed ? <><Check size={14} /> Our answer</> : "A question for you"}</p>
            {!revealed ? <><h3>{story.question}</h3><button className="story-read-button" onClick={() => setRevealed(true)}>Read {story.label.toLowerCase()} <ArrowRight size={13} /></button></> : <><p className="kicker">{story.label}</p><h3>{story.answer}</h3><button className="text-link" onClick={() => chooseStory(selected)}>Ask again <ArrowRight size={12} /></button></>}
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div><p className="kicker">The difference we make</p><h2>Small details.<br />Meaningful outcomes.</h2></div>
        <div className="stats-grid"><div><strong>15+</strong><span>Years of combined experience</span></div><div><strong>6</strong><span>Areas of legal expertise</span></div><div><strong>1</strong><span>Standard: your best interest</span></div></div>
      </section>

      <section className="about-principles" aria-label="Our mission and vision">
        <article id="mission"><p className="kicker">Our mission</p><h2>Make legal processes clear, practical and human.</h2><p>We help people and organisations understand their options and move forward with confidence.</p></article>
        <article id="vision"><p className="kicker">Our vision</p><h2>A community where everyone can navigate the law with confidence.</h2><p>We work toward a more accessible, trusted and responsive experience of legal support in Rwanda.</p></article>
      </section>

      <section className="about-details" aria-label="Our location and conduct">
        <article id="location"><p className="kicker">Location</p><h2>Kigali, Rwanda.</h2><p>We meet clients in Kigali and can discuss the best way to connect when you get in touch.</p><a href="https://maps.google.com/?q=Kigali,Rwanda" target="_blank" rel="noreferrer">Find us in Kigali <ArrowRight size={13} /></a></article>
        <article id="conduct"><p className="kicker">Conduct</p><h2>Integrity in every interaction.</h2><p>We approach each matter with care, confidentiality, respect and clear communication, and explain the next steps before moving forward.</p></article>
      </section>

      <section className="about-team" id="team">
        <div className="about-section-heading"><div><p className="kicker">Meet the team</p><h2>People behind the practice.</h2></div><p>Quietly capable. Thorough by nature. Always on your side.</p></div>
        <div className="team-grid">{team.map((person) => <article className="team-card" key={person.name}><div className="team-image"><img src={person.image} alt="" /></div><h3>{person.name}</h3><p>{person.role}</p></article>)}</div>
      </section>

      <section className="about-cta"><p className="kicker">Your question matters too</p><h2>Let’s start a conversation.</h2><button className="light-button" onClick={() => onNavigate("contact")}>Get in touch <ArrowRight size={14} /></button></section>
      <Footer onNavigate={onNavigate} />
    </main>
  );
}
