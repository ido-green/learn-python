import { useState, type FormEvent } from 'react';
import { Mail, MessageSquareText, Send } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useDocumentTitle } from '@/lib/useDocumentTitle';
import { cn } from '@/lib/cn';

const CONTACT_EMAIL = 'hello@lomdim-python.dev';

const SUBJECT_OPTIONS = [
  { value: 'question', label: 'שאלה על אחד השיעורים' },
  { value: 'mistake', label: 'דיווח על טעות בתוכן' },
  { value: 'idea', label: 'הצעה לשיעור חדש' },
  { value: 'other', label: 'משהו אחר' },
];

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMPTY_FORM: FormValues = {
  name: '',
  email: '',
  subject: SUBJECT_OPTIONS[0].value,
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) {
    errors.name = 'נא להזין שם';
  }
  if (!values.email.trim()) {
    errors.email = 'נא להזין כתובת אימייל';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'נא להזין כתובת אימייל תקינה';
  }
  if (values.message.trim().length < 10) {
    errors.message = 'נא לכתוב הודעה של 10 תווים לפחות';
  }
  return errors;
}

const INPUT_CLASSES =
  'w-full rounded-lg border bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-brand-400';

export function ContactPage() {
  useDocumentTitle('יצירת קשר');
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function setField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    // ניקוי שגיאה ברגע שהמשתמש מתקן את השדה
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // אין לאתר שרת — השליחה נעשית דרך תוכנת הדוא"ל של המשתמש
    const subjectLabel =
      SUBJECT_OPTIONS.find((option) => option.value === values.subject)?.label ??
      'פנייה מהאתר';
    const body = `שם: ${values.name}\nאימייל: ${values.email}\n\n${values.message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `לומדים פייתון: ${subjectLabel}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  function fieldError(field: keyof FormValues) {
    const message = errors[field];
    if (!message) return null;
    return (
      <p id={`${field}-error`} role="alert" className="mt-1.5 text-sm text-error-600">
        {message}
      </p>
    );
  }

  return (
    <>
      <section className="border-b border-line bg-surface-muted">
        <Container className="max-w-4xl py-12 lg:py-16">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">יצירת קשר</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            מצאתם טעות? יש לכם שאלה או רעיון לשיעור חדש? נשמח לשמוע. כל פנייה נקראת ועוזרת
            לשפר את הקורס.
          </p>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container className="grid max-w-4xl gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-ink">דרכים נוספות</h2>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                  <Mail className="size-5 text-brand-700" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-ink">אימייל ישיר</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="ltr-code inline-block text-sm text-brand-700 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                  <MessageSquareText
                    className="size-5 text-brand-700"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-semibold text-ink">דיווח על באג באתר</p>
                  <a
                    href="https://github.com/ido-green/learn-python/issues"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-brand-700 hover:underline"
                  >
                    פתיחת Issue ב-GitHub
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div
                role="status"
                className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center"
              >
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-emerald-100">
                  <Send className="size-6 text-success-600" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-ink">ההודעה מוכנה לשליחה</h2>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
                  פתחנו את תוכנת הדוא"ל שלכם עם ההודעה מוכנה — נשאר רק ללחוץ על "שליחה".
                  אם החלון לא נפתח, אפשר לכתוב לנו ישירות לכתובת שלמעלה.
                </p>
                <Button
                  variant="secondary"
                  className="mt-6"
                  onClick={() => {
                    setValues(EMPTY_FORM);
                    setSubmitted(false);
                  }}
                >
                  כתיבת הודעה נוספת
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <p className="rounded-lg bg-surface-muted px-4 py-3 text-sm text-ink-muted">
                  שליחת הטופס תפתח את תוכנת הדוא"ל שלכם עם ההודעה מוכנה למשלוח.
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-ink"
                    >
                      שם מלא
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={(event) => setField('name', event.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={cn(
                        INPUT_CLASSES,
                        errors.name ? 'border-error-600' : 'border-line',
                      )}
                      placeholder="איך קוראים לך?"
                    />
                    {fieldError('name')}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-ink"
                    >
                      אימייל
                    </label>
                    <input
                      id="email"
                      type="email"
                      dir="ltr"
                      autoComplete="email"
                      value={values.email}
                      onChange={(event) => setField('email', event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={cn(
                        INPUT_CLASSES,
                        'text-left placeholder:text-right',
                        errors.email ? 'border-error-600' : 'border-line',
                      )}
                      placeholder="לכתובת הזו נשיב"
                    />
                    {fieldError('email')}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    נושא הפנייה
                  </label>
                  <select
                    id="subject"
                    value={values.subject}
                    onChange={(event) => setField('subject', event.target.value)}
                    className={cn(INPUT_CLASSES, 'border-line')}
                  >
                    {SUBJECT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    ההודעה
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={values.message}
                    onChange={(event) => setField('message', event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={cn(
                      INPUT_CLASSES,
                      'resize-y',
                      errors.message ? 'border-error-600' : 'border-line',
                    )}
                    placeholder="ספרו לנו במה נוכל לעזור…"
                  />
                  {fieldError('message')}
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="size-4" aria-hidden="true" />
                  הכנת ההודעה לשליחה
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
