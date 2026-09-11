import { BookOpen, Code2, GraduationCap, MessageCircleHeart } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CodeBlock } from '@/components/CodeBlock';
import { LessonCard } from '@/components/LessonCard';
import { lessons } from '@/data/lessons';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const FEATURES = [
  {
    icon: BookOpen,
    title: 'הכול בעברית',
    description:
      'הסברים בעברית טבעית וברורה, בלי צורך להילחם באנגלית טכנית תוך כדי לימוד מושגים חדשים.',
  },
  {
    icon: Code2,
    title: 'דוגמאות קוד אמיתיות',
    description:
      'כל מושג מלווה בקוד שאפשר להעתיק, להריץ ולשחק איתו — כולל הפלט הצפוי של כל דוגמה.',
  },
  {
    icon: GraduationCap,
    title: 'מסלול מסודר',
    description:
      'עשרה שיעורים בסדר לימוד הגיוני: כל שיעור נשען על הקודם ומסתיים בתרגיל מעשי.',
  },
  {
    icon: MessageCircleHeart,
    title: 'חינם, באמת',
    description:
      'בלי הרשמה, בלי תשלום ובלי הפתעות. התוכן פתוח לכולם — פשוט נכנסים ומתחילים ללמוד.',
  },
];

const LEARNING_STEPS = [
  {
    title: 'קוראים את ההסבר',
    description: 'כל שיעור מסביר מושג אחד בשפה פשוטה, צעד אחר צעד.',
  },
  {
    title: 'מריצים את הקוד',
    description: 'מעתיקים את הדוגמאות למחשב שלכם ורואים אותן עובדות בעצמכם.',
  },
  {
    title: 'פותרים את התרגיל',
    description: 'תרגיל מסכם בכל שיעור מוודא שהחומר באמת יושב לפני שממשיכים.',
  },
];

const HERO_CODE = `def greet(student):
    return f"שלום {student}, בואו נתחיל!"

for name in ["דנה", "יואב", "נועה"]:
    print(greet(name))`;

const HERO_OUTPUT = `שלום דנה, בואו נתחיל!
שלום יואב, בואו נתחיל!
שלום נועה, בואו נתחיל!`;

export function HomePage() {
  useDocumentTitle();
  const previewLessons = lessons.slice(0, 3);
  const totalMinutes = lessons.reduce((sum, lesson) => sum + lesson.durationMinutes, 0);

  return (
    <>
      {/* פתיח */}
      <section className="border-b border-line bg-gradient-to-b from-brand-50/70 to-surface">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="min-w-0 animate-fade-up">
            <p className="mb-4 inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-800">
              קורס חינמי · ללא צורך ברקע קודם
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              לומדים פייתון
              <span className="block text-brand-700">בעברית, מאפס</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
              מסלול לימוד מסודר של {lessons.length} שיעורים — מהתקנת פייתון ועד מחלקות
              וחבילות. הסברים ברורים, דוגמאות קוד מעשיות ותרגיל בסוף כל שיעור.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/lessons/getting-started" size="lg">
                מתחילים ללמוד
              </ButtonLink>
              <ButtonLink to="/lessons" variant="secondary" size="lg">
                לכל השיעורים
              </ButtonLink>
            </div>
            <dl className="mt-10 flex gap-8 border-t border-line pt-6">
              <div>
                <dt className="text-sm text-ink-faint">שיעורים</dt>
                <dd className="text-2xl font-extrabold text-ink">{lessons.length}</dd>
              </div>
              <div>
                <dt className="text-sm text-ink-faint">שעות לימוד</dt>
                <dd className="text-2xl font-extrabold text-ink">
                  כ-{Math.round(totalMinutes / 60)}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink-faint">עלות</dt>
                <dd className="text-2xl font-extrabold text-ink">0 ₪</dd>
              </div>
            </dl>
          </div>

          <div
            className="min-w-0 animate-fade-up lg:ps-6"
            style={{ animationDelay: '120ms' }}
          >
            <CodeBlock code={HERO_CODE} caption="first_steps.py" output={HERO_OUTPUT} />
          </div>
        </Container>
      </section>

      {/* למה ללמוד כאן */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="למה כאן?"
            title="קורס שנבנה בשביל לומדים דוברי עברית"
            description="רוב חומרי הלימוד הטובים קיימים רק באנגלית. כאן תלמדו את אותם עקרונות בדיוק — בשפה שלכם."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-line bg-surface p-6 shadow-card"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-brand-50">
                  <feature.icon className="size-5 text-brand-700" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* איך לומדים */}
      <section className="border-y border-line bg-surface-muted py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="שיטת הלימוד"
            title="שלושה צעדים בכל שיעור"
            description="למידה אקטיבית: לא רק קוראים — מריצים קוד ופותרים תרגילים."
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {LEARNING_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-xl border border-line bg-surface p-6 shadow-card"
              >
                <span
                  className="absolute -top-4 start-6 flex size-8 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <h3 className="mt-2 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* טעימה מהשיעורים */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="תוכנית הלימודים"
              title="מתחילים מהשיעור הראשון"
              description="שלושת השיעורים הראשונים במסלול — בלי שום ידע מוקדם."
            />
            <ButtonLink to="/lessons" variant="ghost">
              לכל {lessons.length} השיעורים
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {previewLessons.map((lesson) => (
              <LessonCard key={lesson.slug} lesson={lesson} />
            ))}
          </div>
        </Container>
      </section>

      {/* קריאה לפעולה */}
      <section className="pb-16 lg:pb-24">
        <Container>
          <div className="rounded-2xl bg-brand-900 px-6 py-12 text-center sm:px-12 lg:py-16">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              השיעור הראשון מחכה לכם
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-brand-200">
              עשרים דקות מהיום — וכבר תריצו את התוכנית הראשונה שלכם בפייתון.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink
                to="/lessons/getting-started"
                size="lg"
                className="!bg-accent-400 !text-brand-950 hover:!bg-accent-300"
              >
                מתחילים עכשיו — בחינם
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
