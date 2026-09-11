import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Clock,
  Lightbulb,
  ListChecks,
  PencilRuler,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LevelBadge, TopicBadge } from '@/components/ui/Badge';
import { CodeBlock } from '@/components/CodeBlock';
import { getAdjacentLessons, getLessonBySlug, lessons } from '@/data/lessons';
import type { Lesson } from '@/data/types';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

function LessonBreadcrumbs({ lesson }: { lesson: Lesson }) {
  return (
    <nav aria-label="מיקום באתר" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-ink-faint">
        <li>
          <Link to="/" className="transition-colors hover:text-brand-700">
            דף הבית
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronLeft className="size-3.5" />
        </li>
        <li>
          <Link to="/lessons" className="transition-colors hover:text-brand-700">
            שיעורים
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronLeft className="size-3.5" />
        </li>
        <li aria-current="page" className="font-medium text-ink">
          {lesson.title}
        </li>
      </ol>
    </nav>
  );
}

function LessonPager({ slug }: { slug: string }) {
  const { previous, next } = getAdjacentLessons(slug);

  return (
    <nav aria-label="ניווט בין שיעורים" className="mt-14 border-t border-line pt-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {previous ? (
          <Link
            to={`/lessons/${previous.slug}`}
            className="group flex items-center gap-3 rounded-xl border border-line bg-surface p-4 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <ArrowRight
              className="size-5 shrink-0 text-ink-faint transition-colors group-hover:text-brand-700"
              aria-hidden="true"
            />
            <span className="min-w-0">
              <span className="block text-xs text-ink-faint">השיעור הקודם</span>
              <span className="block truncate font-semibold text-ink group-hover:text-brand-800">
                {previous.title}
              </span>
            </span>
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}

        {next && (
          <Link
            to={`/lessons/${next.slug}`}
            className="group flex items-center justify-end gap-3 rounded-xl border border-line bg-surface p-4 text-end shadow-card transition-shadow hover:shadow-card-hover sm:col-start-2"
          >
            <span className="min-w-0">
              <span className="block text-xs text-ink-faint">השיעור הבא</span>
              <span className="block truncate font-semibold text-ink group-hover:text-brand-800">
                {next.title}
              </span>
            </span>
            <ArrowLeft
              className="size-5 shrink-0 text-ink-faint transition-colors group-hover:text-brand-700"
              aria-hidden="true"
            />
          </Link>
        )}
      </div>
    </nav>
  );
}

export function LessonPage() {
  const { slug } = useParams<{ slug: string }>();
  const lesson = slug ? getLessonBySlug(slug) : undefined;
  useDocumentTitle(lesson?.title);

  if (!lesson) {
    return <Navigate to="/404" replace />;
  }

  return (
    <article>
      <header className="border-b border-line bg-surface-muted">
        <Container className="max-w-4xl py-10 lg:py-14">
          <LessonBreadcrumbs lesson={lesson} />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <LevelBadge level={lesson.level} />
            <span className="flex items-center gap-1.5 text-sm text-ink-faint">
              <Clock className="size-4" aria-hidden="true" />
              {lesson.durationMinutes} דקות
            </span>
            <span className="flex items-center gap-1.5 text-sm text-ink-faint">
              <ListChecks className="size-4" aria-hidden="true" />
              שיעור {lesson.order} מתוך {lessons.length}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
            {lesson.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {lesson.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {lesson.topics.map((topic) => (
              <TopicBadge key={topic} topic={topic} />
            ))}
          </div>
        </Container>
      </header>

      <Container className="max-w-4xl py-10 lg:py-14">
        <div className="space-y-12">
          {lesson.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-ink sm:text-2xl">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-ink-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.code && (
                <div className="mt-6">
                  <CodeBlock
                    code={section.code.code}
                    caption={section.code.caption}
                    output={section.code.output}
                  />
                </div>
              )}
              {section.tip && (
                <aside className="mt-6 flex gap-3 rounded-xl border border-accent-400/40 bg-accent-400/10 p-4">
                  <Lightbulb
                    className="mt-0.5 size-5 shrink-0 text-accent-600"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-ink">
                    <strong className="font-bold">טיפ: </strong>
                    {section.tip}
                  </p>
                </aside>
              )}
            </section>
          ))}

          {lesson.exercise && (
            <section className="rounded-2xl border border-brand-200 bg-brand-50/60 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-brand-700">
                  <PencilRuler className="size-5 text-white" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-ink">{lesson.exercise.title}</h2>
              </div>
              <p className="mt-4 leading-relaxed text-ink-muted">
                {lesson.exercise.description}
              </p>
              {lesson.exercise.starterCode && (
                <div className="mt-5">
                  <CodeBlock code={lesson.exercise.starterCode} caption="נקודת התחלה" />
                </div>
              )}
            </section>
          )}
        </div>

        <LessonPager slug={lesson.slug} />
      </Container>
    </article>
  );
}
