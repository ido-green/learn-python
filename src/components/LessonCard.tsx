import { Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import type { Lesson } from '@/data/types';
import { LevelBadge, TopicBadge } from '@/components/ui/Badge';

interface LessonCardProps {
  lesson: Lesson;
}

/** כרטיס שיעור בקטלוג — כולו לחיץ, עם רמה, משך ונושאים */
export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-line bg-surface p-5 shadow-card transition-shadow hover:shadow-card-hover">
      <div className="flex items-center justify-between gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-800">
          {lesson.order}
        </span>
        <LevelBadge level={lesson.level} />
      </div>

      <h3 className="mt-4 text-lg font-bold text-ink">
        <Link
          to={`/lessons/${lesson.slug}`}
          className="after:absolute after:inset-0 after:content-[''] group-hover:text-brand-800"
        >
          {lesson.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {lesson.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {lesson.topics.map((topic) => (
          <TopicBadge key={topic} topic={topic} />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
        <span className="flex items-center gap-1.5 text-xs font-medium text-ink-faint">
          <Clock className="size-3.5" aria-hidden="true" />
          {lesson.durationMinutes} דקות
        </span>
        <span className="flex items-center gap-1 text-sm font-semibold text-brand-700 transition-transform group-hover:-translate-x-0.5">
          לשיעור
          <ArrowLeft className="size-4" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
