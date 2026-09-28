import { ArrowRight } from 'lucide-react';
import {
  aboutSubsections,
  images,
  type AboutDetailPage as AboutDetailPageType,
  type Page,
} from '../../data/siteContent';
import Footer from '../../components/layout/Footer';
import PageHero from '../../components/layout/PageHero';

const professionalSources = [
  {
    label: 'Rwanda Bar Association · Senior Advocates list',
    href: 'http://www.rwandabar.org.rw/attached_pdf/Senior%20Advocates-1623739067.pdf',
  },
  {
    label: 'Africa CEO · Leadership profile',
    href: 'https://africase.co/leadership/moussa-rwabukumba/',
  },
  {
    label: 'Instagram · Moussa Rwabukumba',
    href: 'https://www.instagram.com/rwabukumbamoussa/',
  },
];

const practiceAreas = [
  {
    title: 'Corporate & commercial law',
    description:
      'Legal support for the structures and agreements that underpin business activity. This can include company and governance matters, commercial contracts, business arrangements and the legal considerations involved in day-to-day and strategic decisions.',
  },
  {
    title: 'Commercial litigation & dispute resolution',
    description:
      'Counsel for commercial disagreements where a clear assessment of the facts, legal position and available options is essential. Work can involve preparing a matter for litigation, representing a client through court proceedings and considering practical routes to resolution.',
  },
  {
    title: 'Banking & financial law',
    description:
      'Advice on legal issues connected with banking relationships and finance. Depending on the matter, this may include lending arrangements, financing documentation, obligations between parties and disputes arising from financial transactions.',
  },
  {
    title: 'Property & real estate',
    description:
      'Legal guidance on property transactions, ownership and related agreements, with attention to the documents, responsibilities and risks that should be understood before a property decision is made.',
  },
  {
    title: 'Family & succession',
    description:
      'Support with sensitive family and succession matters, approached with care for the people involved and a clear explanation of the legal steps, choices and information needed.',
  },
  {
    title: 'Employment & labour',
    description:
      'Advice on workplace rights and obligations, employment agreements and labour-related concerns for employers and individuals seeking to understand their position.',
  },
  {
    title: 'Other legal matters',
    description:
      'If your question falls outside these areas, share a brief outline. The first step is to understand the issue and determine whether the practice is suited to assist or whether another route is more appropriate.',
  },
];

const pageContent: Record<
  AboutDetailPageType,
  {
    title: string;
    subtitle: string;
    introduction: string;
    sections: { heading: string; body: string }[];
  }
> = {
  'about-profile': {
    title: 'Professional Profile',
    subtitle: 'Moussa Rwabukumba · Senior Commercial Litigator · Registered Advocate',
    introduction:
      'Moussa Rwabukumba is a senior commercial litigator and registered advocate based in Kigali, Rwanda. His professional focus includes corporate, commercial, banking and financial law.',
    sections: [
      {
        heading: 'Commercial insight, grounded in legal practice.',
        body: 'Commercial matters call for more than a reading of documents in isolation. They require an understanding of the decisions, relationships and obligations surrounding a business. Moussa’s work brings a litigator’s attention to detail to those commercial realities, whether a client is assessing a legal position, planning a transaction or responding to a dispute.',
      },
      {
        heading: 'Connected expertise for business and finance.',
        body: 'Corporate and commercial questions frequently overlap with banking and finance: an agreement can shape future obligations, funding can affect business choices and unresolved issues can become disputes. This connected professional focus helps keep advice centred on the wider circumstances and the practical decision a client needs to make.',
      },
      {
        heading: 'Based in Kigali, Rwanda.',
        body: 'Moussa is based in Kigali and serves clients seeking legal guidance in Rwanda. Each matter is different; an initial conversation can help establish the relevant facts, clarify the questions to be addressed and identify appropriate next steps.',
      },
    ],
  },
  'about-practice': {
    title: 'Practice Areas & Services',
    subtitle: 'Legal support for business decisions, financial matters and disputes.',
    introduction:
      'Moussa Rwabukumba’s stated areas of professional focus include corporate, commercial, banking and financial law. The practice also presents services across related legal matters. The right scope depends on the facts and needs of each client.',
    sections: [
      {
        heading: 'A clear view of the issue and the options.',
        body: 'Good legal support begins by understanding what has happened, what outcome matters to the client and which documents or deadlines may affect the position. Advice should make the issues understandable and help the client compare realistic next steps.',
      },
    ],
  },
  'about-mission': {
    title: 'Our Mission',
    subtitle: 'Make the legal path clearer, more practical and more human.',
    introduction:
      'Our mission is to help clients understand the legal questions in front of them and take informed next steps with confidence.',
    sections: [
      {
        heading: 'Start by listening.',
        body: 'Every matter has its own context: the people involved, the documents already in place, the pressure of time and the outcome a client hopes to achieve. We aim to understand those details before shaping a response.',
      },
      {
        heading: 'Explain the choices.',
        body: 'Legal advice is most useful when clients can see what an issue means in practice. We aim to explain the relevant considerations, outline available routes and be clear about what further information may be needed.',
      },
      {
        heading: 'Keep the work purposeful.',
        body: 'Whether a question concerns a business decision or an active disagreement, the focus is on practical legal work tied to the client’s priorities and circumstances.',
      },
    ],
  },
  'about-vision': {
    title: 'Our Vision',
    subtitle: 'A legal experience built on clarity, confidence and trust.',
    introduction:
      'We want individuals and organisations to feel better equipped to navigate legal decisions, understand their rights and obligations, and know what to expect from the process.',
    sections: [
      {
        heading: 'A more informed starting point.',
        body: 'When people can ask questions early and receive a clear explanation, they are better prepared to weigh decisions and understand the consequences of different options.',
      },
      {
        heading: 'A trusted professional relationship.',
        body: 'Trust grows through careful preparation, honest communication and respect for the importance of each client’s matter. These are standards to bring to every stage of legal work.',
      },
      {
        heading: 'Legal support connected to real life.',
        body: 'The law affects businesses, finances, work and family. We aim to make legal support responsive to the practical realities behind those issues, not only the documents that describe them.',
      },
    ],
  },
  'about-location': {
    title: 'Kigali, Rwanda',
    subtitle: 'A Kigali-based advocate for matters connected with Rwanda.',
    introduction:
      'Moussa Rwabukumba is based in Kigali, Rwanda. Clients can get in touch to discuss their matter and establish an appropriate way to connect.',
    sections: [
      {
        heading: 'Plan your first conversation.',
        body: 'When you contact the practice, a short outline of the issue, the people or organisations involved and any important dates can help make the first discussion more useful. Avoid sending highly sensitive documents until a secure way to share them has been agreed.',
      },
      {
        heading: 'Meeting arrangements.',
        body: 'Contact the practice to discuss whether a meeting should take place in person or remotely and to confirm the arrangements. The appropriate format depends on the subject and the information that needs to be reviewed.',
      },
    ],
  },
  'about-conduct': {
    title: 'Professional Conduct',
    subtitle: 'Careful preparation. Clear communication. Respect for every matter.',
    introduction:
      'Legal matters can carry significant consequences. Our approach is to treat each enquiry thoughtfully, communicate in clear terms and handle client information with appropriate care.',
    sections: [
      {
        heading: 'Clarity from the outset.',
        body: 'Before work proceeds, clients should understand the issue being addressed, what information is needed, what the proposed next steps are and any relevant terms of engagement. Asking questions is part of making an informed decision.',
      },
      {
        heading: 'Careful, candid advice.',
        body: 'A considered legal view depends on the facts and documents available. We aim to explain uncertainties and relevant risks plainly, rather than promise a particular outcome.',
      },
      {
        heading: 'Respect and confidentiality.',
        body: 'We approach client matters with discretion and respect. Please use the practice’s contact channels to discuss how sensitive information should be shared.',
      },
    ],
  },
};

export default function AboutDetailPage({
  page,
  onNavigate,
  onOpenMenu,
}: {
  page: AboutDetailPageType;
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}) {
  const content = pageContent[page];
  const subsection = aboutSubsections.find((item) => item.page === page);

  return (
    <main className="detail-page">
      <PageHero
        page={page}
        title={content.title}
        subtitle={content.subtitle}
        image={images.court}
        onNavigate={onNavigate}
        onOpenMenu={onOpenMenu}
      />
      <section className="about-detail-content">
        <button className="back-link" onClick={() => onNavigate('about')}>
          ← About Moussa Advocates
        </button>
        <p className="kicker">{subsection?.label}</p>
        <h2>{content.introduction}</h2>

        {page === 'about-practice' ? (
          <div className="practice-area-list">
            {practiceAreas.map((area, index) => (
              <article className="practice-area" key={area.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="about-detail-sections">
            {content.sections.map((section, index) => (
              <article key={section.heading}>
                <p className="kicker">0{index + 1}</p>
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        )}

        {page === 'about-profile' && (
          <aside className="profile-sources">
            <p className="kicker">Professional references</p>
            <h3>Further information</h3>
            <ul>
              {professionalSources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer">
                    {source.label} <ArrowRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {page === 'about-location' && (
          <a
            className="about-detail-link"
            href="https://maps.google.com/?q=Kigali,Rwanda"
            target="_blank"
            rel="noreferrer"
          >
            View Kigali on a map <ArrowRight size={13} />
          </a>
        )}
      </section>
      <section className="about-detail-cta">
        <p className="kicker">The next step is a conversation</p>
        <h2>Share the question you need help answering.</h2>
        <div>
          <button className="text-link" onClick={() => onNavigate('contact')}>
            Contact the practice <ArrowRight size={12} />
          </button>
          {page !== 'about-practice' && (
            <button className="text-link" onClick={() => onNavigate('about-practice')}>
              View practice areas <ArrowRight size={12} />
            </button>
          )}
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </main>
  );
}
