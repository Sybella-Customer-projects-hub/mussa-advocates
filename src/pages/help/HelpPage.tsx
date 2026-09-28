import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Check, FileText, ShieldCheck, Trash2 } from 'lucide-react';
import { type Page } from '../../data/siteContent';
import Footer from '../../components/layout/Footer';
import PageHero from '../../components/layout/PageHero';

const steps = ['Your details', 'Your matter', 'Important dates', 'Conflict check', 'Review'];

const practiceAreas = [
  'Corporate & Commercial',
  'Commercial Litigation & Disputes',
  'Banking & Financial Law',
  'Property & Real Estate',
  'Family & Succession',
  'Employment & Labour',
  'Other Legal Matter',
  'Not sure',
];

const maxFileSize = 10 * 1024 * 1024;
const acceptedFileTypes = '.pdf,.doc,.docx,.jpg,.jpeg,.png';

interface Inquiry {
  name: string;
  email: string;
  phone: string;
  practiceArea: string;
  subject: string;
  summary: string;
  hasUrgentDate: boolean;
  urgentDateType: string;
  urgentDate: string;
  otherDates: string;
  opposingParty: string;
  conflictAcknowledged: boolean;
}

const emptyInquiry: Inquiry = {
  name: '',
  email: '',
  phone: '',
  practiceArea: '',
  subject: '',
  summary: '',
  hasUrgentDate: false,
  urgentDateType: '',
  urgentDate: '',
  otherDates: '',
  opposingParty: '',
  conflictAcknowledged: false,
};

function FormField({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="inquiry-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {hint && <small>{hint}</small>}
    </div>
  );
}

function formatDate(date: string) {
  if (!date) return 'Not provided';
  return new Date(`${date}T00:00:00`).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function HelpPage({
  onNavigate,
  onOpenMenu,
}: {
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}) {
  const [step, setStep] = useState(0);
  const [inquiry, setInquiry] = useState<Inquiry>(emptyInquiry);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState('');

  const updateInquiry = <K extends keyof Inquiry>(key: K, value: Inquiry[K]) => {
    setInquiry((current) => ({ ...current, [key]: value }));
  };

  const chooseFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);
    const invalidFile = selectedFiles.find(
      (file) => file.size > maxFileSize || !/\.(pdf|doc|docx|jpg|jpeg|png)$/i.test(file.name),
    );
    if (invalidFile) {
      setFiles([]);
      setFileError(
        `${invalidFile.name} is too large or is not a supported file type. Choose a PDF, DOC, DOCX, JPG or PNG file under 10 MB.`,
      );
      event.target.value = '';
      return;
    }
    setFiles(selectedFiles);
    setFileError('');
  };

  const removeFile = (fileName: string) => {
    setFiles((current) => current.filter((file) => file.name !== fileName));
    setFileError('');
  };

  const goNext = () => {
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const handleStepSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const textChecks =
      step === 0
        ? [{ id: 'inquiry-name', valid: inquiry.name.trim().length > 0 }]
        : step === 1
          ? [{ id: 'inquiry-summary', valid: inquiry.summary.trim().length >= 20 }]
          : step === 3
            ? [
                {
                  id: 'inquiry-opposing-party',
                  valid: inquiry.opposingParty.trim().length > 0,
                },
              ]
            : [];
    for (const check of textChecks) {
      const field = event.currentTarget.querySelector<HTMLInputElement | HTMLTextAreaElement>(
        `#${check.id}`,
      );
      field?.setCustomValidity(
        check.valid
          ? ''
          : step === 1
            ? 'Please enter at least 20 non-space characters.'
            : step === 3
              ? 'Enter a name, or write “None known” or “Not sure”.'
              : 'Please enter a name or company.',
      );
    }
    const invalidField = textChecks
      .map((check) =>
        event.currentTarget.querySelector<HTMLInputElement | HTMLTextAreaElement>(`#${check.id}`),
      )
      .find((field) => field && !field.checkValidity());
    if (invalidField) {
      invalidField.reportValidity();
      invalidField.focus();
      return;
    }
    if (step === 3 && fileError) return;
    goNext();
  };

  const emailBody = [
    'LEGAL ENQUIRY',
    '',
    `Name / company: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone}`,
    '',
    `Practice area: ${inquiry.practiceArea}`,
    `Subject: ${inquiry.subject || 'Not provided'}`,
    'Summary:',
    inquiry.summary,
    '',
    `Urgent date: ${inquiry.hasUrgentDate ? `${inquiry.urgentDateType} — ${formatDate(inquiry.urgentDate)}` : 'None known / not provided'}`,
    `Other important dates: ${inquiry.otherDates || 'None provided'}`,
    `Opposing party / related person or organisation: ${inquiry.opposingParty}`,
    '',
    files.length > 0
      ? `Documents selected in this form: ${files.map((file) => file.name).join(', ')}. Please attach them to this email yourself; this website does not upload or attach files.`
      : 'No documents selected.',
    '',
    'I understand this is an initial enquiry only and does not create an advocate-client relationship. The practice must complete its own conflict check and confirm whether it can assist.',
  ].join('\n');
  const emailUrl = `mailto:info@moussaadvocates.rw?subject=${encodeURIComponent(
    `Legal enquiry — ${inquiry.practiceArea}`,
  )}&body=${encodeURIComponent(emailBody)}`;

  return (
    <main className="detail-page">
      <PageHero
        page="help"
        title="Make an Enquiry"
        subtitle="A guided first step to help us understand your legal matter."
        onNavigate={onNavigate}
        onOpenMenu={onOpenMenu}
      />
      <section className="inquiry-section">
        <div className="inquiry-shell">
          <div className="inquiry-intro">
            <p className="kicker">Initial legal enquiry</p>
            <h2>Share what matters. One step at a time.</h2>
            <p>
              This form helps organise your enquiry for an initial review. It is not a secure client
              portal, and sending an enquiry does not mean the practice has accepted your matter.
            </p>
          </div>

          <div className="inquiry-progress" aria-label={`Step ${step + 1} of ${steps.length}`}>
            {steps.map((label, index) => (
              <div
                className={`inquiry-progress-step ${index === step ? 'current' : ''} ${index < step ? 'complete' : ''}`}
                key={label}
                aria-current={index === step ? 'step' : undefined}
              >
                <span>{index < step ? <Check size={13} /> : `0${index + 1}`}</span>
                <small>{label}</small>
              </div>
            ))}
          </div>

          <form className="inquiry-panel" onSubmit={handleStepSubmit}>
            <div className="inquiry-step-heading">
              <div>
                <p className="kicker">
                  Step 0{step + 1} of 0{steps.length}
                </p>
                <h3>{steps[step]}</h3>
              </div>
              {step < 4 && (
                <span className="inquiry-step-count">
                  {step + 1} / {steps.length}
                </span>
              )}
            </div>

            {step === 0 && (
              <div className="inquiry-fields">
                <FormField
                  label="Full name or company name"
                  htmlFor="inquiry-name"
                  hint="Tell us who is making this enquiry."
                >
                  <input
                    id="inquiry-name"
                    name="name"
                    autoComplete="name"
                    required
                    value={inquiry.name}
                    onChange={(event) => {
                      event.currentTarget.setCustomValidity('');
                      updateInquiry('name', event.target.value);
                    }}
                    placeholder="Your name or organisation"
                  />
                </FormField>
                <FormField label="Email address" htmlFor="inquiry-email">
                  <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={inquiry.email}
                    onChange={(event) => updateInquiry('email', event.target.value)}
                    placeholder="name@example.com"
                  />
                </FormField>
                <FormField label="Phone number" htmlFor="inquiry-phone">
                  <input
                    id="inquiry-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={inquiry.phone}
                    onChange={(event) => updateInquiry('phone', event.target.value)}
                    placeholder="+250 ..."
                  />
                </FormField>
              </div>
            )}

            {step === 1 && (
              <div className="inquiry-fields">
                <FormField label="Practice area" htmlFor="inquiry-practice">
                  <select
                    id="inquiry-practice"
                    required
                    value={inquiry.practiceArea}
                    onChange={(event) => updateInquiry('practiceArea', event.target.value)}
                  >
                    <option value="">Choose the closest match</option>
                    {practiceAreas.map((area) => (
                      <option key={area}>{area}</option>
                    ))}
                  </select>
                </FormField>
                <FormField
                  label="Subject"
                  htmlFor="inquiry-subject"
                  hint="A few words to help us identify the issue."
                >
                  <input
                    id="inquiry-subject"
                    maxLength={120}
                    value={inquiry.subject}
                    onChange={(event) => updateInquiry('subject', event.target.value)}
                    placeholder="e.g. Review of a commercial agreement"
                  />
                </FormField>
                <FormField
                  label="Short summary"
                  htmlFor="inquiry-summary"
                  hint="Briefly describe the problem, question or goal. Please avoid sending highly sensitive details at this stage."
                >
                  <textarea
                    id="inquiry-summary"
                    required
                    minLength={20}
                    maxLength={2000}
                    rows={6}
                    value={inquiry.summary}
                    onChange={(event) => {
                      event.currentTarget.setCustomValidity('');
                      updateInquiry('summary', event.target.value);
                    }}
                    placeholder="What happened, what would you like help with, and what would a useful next step look like?"
                  />
                  <span className="inquiry-character-count">{inquiry.summary.length} / 2000</span>
                </FormField>
              </div>
            )}

            {step === 2 && (
              <div className="inquiry-fields">
                <label className="inquiry-check urgency-toggle">
                  <input
                    type="checkbox"
                    checked={inquiry.hasUrgentDate}
                    onChange={(event) => {
                      updateInquiry('hasUrgentDate', event.target.checked);
                      if (!event.target.checked) {
                        updateInquiry('urgentDate', '');
                        updateInquiry('urgentDateType', '');
                      }
                    }}
                  />
                  <span>
                    <strong>There is an urgent or fixed date</strong>
                    <small>
                      For example, a court hearing, filing deadline, response date or transaction
                      deadline.
                    </small>
                  </span>
                </label>
                {inquiry.hasUrgentDate && (
                  <div className="inquiry-fields inquiry-date-fields">
                    <FormField label="What is the date for?" htmlFor="inquiry-date-type">
                      <select
                        id="inquiry-date-type"
                        required
                        value={inquiry.urgentDateType}
                        onChange={(event) => updateInquiry('urgentDateType', event.target.value)}
                      >
                        <option value="">Choose a date type</option>
                        <option>Court hearing</option>
                        <option>Filing or response deadline</option>
                        <option>Contract or transaction deadline</option>
                        <option>Other fixed date</option>
                      </select>
                    </FormField>
                    <FormField
                      label="Date"
                      htmlFor="inquiry-urgent-date"
                      hint="If the date is approximate, explain in the notes below."
                    >
                      <input
                        id="inquiry-urgent-date"
                        type="date"
                        required
                        value={inquiry.urgentDate}
                        onChange={(event) => updateInquiry('urgentDate', event.target.value)}
                      />
                    </FormField>
                  </div>
                )}
                <FormField
                  label="Other important dates or timing"
                  htmlFor="inquiry-other-dates"
                  hint="Include any other dates, notice periods or timing concerns you know about."
                >
                  <textarea
                    id="inquiry-other-dates"
                    rows={4}
                    maxLength={1000}
                    value={inquiry.otherDates}
                    onChange={(event) => updateInquiry('otherDates', event.target.value)}
                    placeholder="Add details, or leave blank if there are no other known dates."
                  />
                </FormField>
                {inquiry.hasUrgentDate && (
                  <p className="inquiry-urgent-note">
                    If a deadline is imminent, contact the practice directly as well. This enquiry
                    form is not monitored as an emergency service and does not pause any deadline.
                  </p>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="inquiry-fields">
                <div className="inquiry-conflict-note">
                  <ShieldCheck size={20} />
                  <p>
                    Names help the practice perform a preliminary conflict check. Do not assume
                    there is no conflict based on this form; the practice must confirm before
                    discussing confidential details or accepting instructions.
                  </p>
                </div>
                <FormField
                  label="Opposing party or related person / organisation"
                  htmlFor="inquiry-opposing-party"
                  hint="List the other side and any key related people or organisations you know. If not applicable, enter “None known”; if unsure, enter “Not sure”."
                >
                  <textarea
                    id="inquiry-opposing-party"
                    required
                    rows={4}
                    maxLength={1000}
                    value={inquiry.opposingParty}
                    onChange={(event) => {
                      event.currentTarget.setCustomValidity('');
                      updateInquiry('opposingParty', event.target.value);
                    }}
                    placeholder="Names of people or organisations on the other side"
                  />
                </FormField>
                <label className="inquiry-check">
                  <input
                    type="checkbox"
                    required
                    checked={inquiry.conflictAcknowledged}
                    onChange={(event) =>
                      updateInquiry('conflictAcknowledged', event.target.checked)
                    }
                  />
                  <span>
                    I have provided the opposing-party details I currently know and understand this
                    is only an initial conflict-screening request, not confirmation that the firm
                    can act.
                  </span>
                </label>
                <div className="inquiry-upload">
                  <label htmlFor="inquiry-files">Optional supporting documents</label>
                  <p>
                    You may select notices, contracts or other relevant documents (PDF, DOC, DOCX,
                    JPG or PNG; up to 10 MB each).
                  </p>
                  <input
                    id="inquiry-files"
                    type="file"
                    accept={acceptedFileTypes}
                    multiple
                    onChange={chooseFiles}
                    aria-describedby="inquiry-file-notice"
                  />
                  {fileError && (
                    <p className="inquiry-error" role="alert">
                      {fileError}
                    </p>
                  )}
                  {files.length > 0 && (
                    <ul className="inquiry-file-list">
                      {files.map((file) => (
                        <li key={`${file.name}-${file.lastModified}`}>
                          <FileText size={15} />
                          <span>{file.name}</span>
                          <button
                            type="button"
                            aria-label={`Remove ${file.name}`}
                            onClick={() => removeFile(file.name)}
                          >
                            <Trash2 size={14} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="inquiry-privacy-note" id="inquiry-file-notice">
                    Files remain on this device; this website does not upload them. They will not be
                    attached automatically to your email draft. For your privacy, avoid selecting
                    sensitive documents until the practice confirms an appropriate way to share
                    them. If you proceed, attach them yourself in your email app.
                  </p>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="inquiry-review">
                <p>
                  Check the details below. Choosing “Prepare email” opens your email app with an
                  enquiry draft for you to review and send.
                </p>
                <div className="inquiry-review-group">
                  <div className="inquiry-review-heading">
                    <h4>Your contact details</h4>
                    <button type="button" onClick={() => setStep(0)}>
                      Edit
                    </button>
                  </div>
                  <dl>
                    <dt>Name / company</dt>
                    <dd>{inquiry.name}</dd>
                    <dt>Email</dt>
                    <dd>{inquiry.email}</dd>
                    <dt>Phone</dt>
                    <dd>{inquiry.phone}</dd>
                  </dl>
                </div>
                <div className="inquiry-review-group">
                  <div className="inquiry-review-heading">
                    <h4>Your matter</h4>
                    <button type="button" onClick={() => setStep(1)}>
                      Edit
                    </button>
                  </div>
                  <dl>
                    <dt>Practice area</dt>
                    <dd>{inquiry.practiceArea}</dd>
                    <dt>Subject</dt>
                    <dd>{inquiry.subject || 'Not provided'}</dd>
                    <dt>Summary</dt>
                    <dd>{inquiry.summary}</dd>
                  </dl>
                </div>
                <div className="inquiry-review-group">
                  <div className="inquiry-review-heading">
                    <h4>Dates & conflict check</h4>
                    <button type="button" onClick={() => setStep(2)}>
                      Edit dates
                    </button>
                  </div>
                  <dl>
                    <dt>Urgent date</dt>
                    <dd>
                      {inquiry.hasUrgentDate
                        ? `${inquiry.urgentDateType} — ${formatDate(inquiry.urgentDate)}`
                        : 'None known / not provided'}
                    </dd>
                    <dt>Other dates</dt>
                    <dd>{inquiry.otherDates || 'None provided'}</dd>
                    <dt>Opposing party</dt>
                    <dd>{inquiry.opposingParty}</dd>
                    <dt>Documents selected</dt>
                    <dd>{files.length > 0 ? files.map((file) => file.name).join(', ') : 'None'}</dd>
                  </dl>
                  <button className="inquiry-edit-link" type="button" onClick={() => setStep(3)}>
                    Edit conflict and documents
                  </button>
                </div>
                <div className="inquiry-final-notice">
                  This is an initial enquiry, not legal advice or confirmation that the practice
                  represents you. Do not rely on this form to meet a deadline. Your email app must
                  be available to prepare the draft; your enquiry is not sent until you review and
                  send it.
                </div>
              </div>
            )}

            <div className="inquiry-controls">
              {step > 0 ? (
                <button
                  className="inquiry-previous"
                  type="button"
                  onClick={() => setStep((current) => current - 1)}
                >
                  <ArrowLeft size={14} /> Back
                </button>
              ) : (
                <span />
              )}
              {step < steps.length - 1 ? (
                <button className="inquiry-next" type="submit">
                  {step === 3 ? 'Review enquiry' : 'Continue'} <ArrowRight size={14} />
                </button>
              ) : (
                <a className="inquiry-next" href={emailUrl}>
                  Prepare email <ArrowRight size={14} />
                </a>
              )}
            </div>
          </form>
          <p className="inquiry-assurance">
            <ShieldCheck size={14} /> Your details stay in this form until you choose to prepare an
            email. Nothing is submitted to or stored by this website.
          </p>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </main>
  );
}
