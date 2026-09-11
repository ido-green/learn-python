import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';
import { LessonCard } from '@/components/LessonCard';
import { lessons } from '@/data/lessons';
import { LEVEL_LABELS, LEVEL_ORDER, type Level } from '@/data/types';
import { useDocumentTitle } from '@/lib/useDocumentTitle';
import { cn } from '@/lib/cn';

type LevelFilter = Level | 'all';

const FILTERS: Array<{ value: LevelFilter; label: string }> = [
  { value: 'all', label: 'כל הרמות' },
  ...LEVEL_ORDER.map((level) => ({
    value: level as LevelFilter,
    label: LEVEL_LABELS[level],
  })),
];

function matchesQuery(query: string, ...fields: string[]): boolean {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;
  return fields.some((field) => field.toLowerCase().includes(normalized));
}

export function LessonsPage() {
  useDocumentTitle('שיעורים');
  const [query, setQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<LevelFilter>('all');

  const filteredLessons = useMemo(
    () =>
      lessons.filter(
        (lesson) =>
          (levelFilter === 'all' || lesson.level === levelFilter) &&
          matchesQuery(query, lesson.title, lesson.summary, ...lesson.topics),
      ),
    [query, levelFilter],
  );

  function clearFilters() {
    setQuery('');
    setLevelFilter('all');
  }

  return (
    <>
      <section className="border-b border-line bg-surface-muted">
        <Container className="py-12 lg:py-16">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">שיעורים</h1>
          <p className="mt-3 max-w-2xl text-base text-ink-muted">
            {lessons.length} שיעורים בסדר הלימוד המומלץ. חדשים בפייתון? התחילו מהשיעור
            הראשון והתקדמו לפי הסדר — כל שיעור נשען על קודמיו.
          </p>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative max-w-md flex-1">
              <Search
                className="pointer-events-none absolute inset-y-0 start-3 my-auto size-4.5 text-ink-faint"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="חיפוש לפי נושא, למשל: לולאות"
                aria-label="חיפוש שיעורים"
                className="w-full rounded-lg border border-line bg-surface py-2.5 pe-10 ps-10 text-sm text-ink placeholder:text-ink-faint focus:border-brand-400"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="ניקוי החיפוש"
                  className="absolute inset-y-0 end-2 my-auto flex size-7 items-center justify-center rounded-md text-ink-faint hover:bg-surface-muted hover:text-ink"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              )}
            </div>

            <div
              role="group"
              aria-label="סינון לפי רמת קושי"
              className="flex flex-wrap gap-2"
            >
              {FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setLevelFilter(filter.value)}
                  aria-pressed={levelFilter === filter.value}
                  className={cn(
                    'rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors',
                    levelFilter === filter.value
                      ? 'border-brand-700 bg-brand-700 text-white'
                      : 'border-line bg-surface text-ink-muted hover:border-brand-300 hover:text-ink',
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <p className="mb-6 text-sm text-ink-faint" aria-live="polite">
            {filteredLessons.length === lessons.length
              ? `מציג את כל ${lessons.length} השיעורים`
              : `נמצאו ${filteredLessons.length} שיעורים מתוך ${lessons.length}`}
          </p>

          {filteredLessons.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredLessons.map((lesson) => (
                <LessonCard key={lesson.slug} lesson={lesson} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="לא נמצאו שיעורים מתאימים"
              description="נסו מונח חיפוש אחר או הסירו את הסינון לפי רמה."
              action={
                <Button variant="secondary" onClick={clearFilters}>
                  ניקוי החיפוש והסינון
                </Button>
              }
            />
          )}
        </Container>
      </section>
    </>
  );
}
