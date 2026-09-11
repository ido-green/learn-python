import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { lessons } from '@/data/lessons';
import { LEVEL_LABELS, LEVEL_ORDER } from '@/data/types';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const PRINCIPLES = [
  'מושג אחד בכל פעם — בלי להציף במידע.',
  'כל דוגמת קוד מלווה בפלט שלה, כדי שתדעו למה לצפות.',
  'עברית טבעית, עם מונחים טכניים באנגלית כשזה נכון מקצועית.',
  'תרגול בסוף כל שיעור — כי תכנות לומדים מעשייה.',
  'סדר לימוד מוקפד: כל שיעור נשען רק על מה שכבר נלמד.',
];

const FAQ = [
  {
    question: 'צריך רקע קודם בתכנות?',
    answer:
      'ממש לא. הקורס נבנה למי שמעולם לא כתבו שורת קוד. השיעור הראשון מתחיל מהתקנת פייתון על המחשב.',
  },
  {
    question: 'כמה זמן לוקח לסיים את הקורס?',
    answer:
      'זמן הקריאה הכולל הוא כחמש שעות, אבל למידה אמיתית כוללת גם הרצת דוגמאות ופתרון תרגילים. קצב נוח הוא שיעור אחד או שניים בשבוע.',
  },
  {
    question: 'האם הקורס באמת חינמי?',
    answer:
      'כן. אין תשלום, אין הרשמה ואין תוכן נעול. הקורס נכתב מתוך אמונה שחומרי לימוד איכותיים בעברית צריכים להיות נגישים לכולם.',
  },
  {
    question: 'מה עושים אחרי שמסיימים?',
    answer:
      'הצעד הטבעי הבא הוא פרויקט אישי קטן: סקריפט שחוסך לכם עבודה, משחק פשוט או כלי לניתוח נתונים. אין דרך טובה יותר לבסס את הידע.',
  },
];

export function AboutPage() {
  useDocumentTitle('אודות');
  const levelCounts = LEVEL_ORDER.map((level) => ({
    level,
    count: lessons.filter((lesson) => lesson.level === level).length,
  }));

  return (
    <>
      <section className="border-b border-line bg-surface-muted">
        <Container className="max-w-4xl py-12 lg:py-16">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">אודות הקורס</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            "לומדים פייתון" נולד מתסכול פשוט: חומרי הלימוד הטובים באמת קיימים כמעט רק
            באנגלית, ומי שמתחילים ללמוד תכנות נאלצים להתמודד עם שפה זרה ומושגים חדשים בבת
            אחת. כאן לומדים את המושגים — בעברית.
          </p>
        </Container>
      </section>

      <section className="py-14 lg:py-16">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="הגישה שלנו" title="עקרונות שמאחורי כל שיעור" />
          <ul className="mt-8 space-y-4">
            {PRINCIPLES.map((principle) => (
              <li key={principle} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-success-600"
                  aria-hidden="true"
                />
                <span className="leading-relaxed text-ink-muted">{principle}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-4 rounded-2xl border border-line bg-surface-muted p-6 sm:grid-cols-3 sm:p-8">
            {levelCounts.map(({ level, count }) => (
              <div key={level} className="text-center">
                <p className="text-3xl font-extrabold text-brand-800">{count}</p>
                <p className="mt-1 text-sm font-medium text-ink-muted">
                  שיעורים ברמת {LEVEL_LABELS[level]}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface-muted py-14 lg:py-16">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="שאלות נפוצות" title="לפני שמתחילים" />
          <dl className="mt-8 space-y-4">
            {FAQ.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-line bg-surface p-6 shadow-card"
              >
                <dt className="text-base font-bold text-ink">{item.question}</dt>
                <dd className="mt-2 leading-relaxed text-ink-muted">{item.answer}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 text-center">
            <ButtonLink to="/lessons/getting-started" size="lg">
              מתחילים את השיעור הראשון
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
