import { LEVEL_LABELS, type Level } from '@/data/types';
import { cn } from '@/lib/cn';

const LEVEL_CLASSES: Record<Level, string> = {
  beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
  advanced: 'bg-violet-50 text-violet-700 border-violet-200',
};

export function LevelBadge({ level }: { level: Level }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
        LEVEL_CLASSES[level],
      )}
    >
      {LEVEL_LABELS[level]}
    </span>
  );
}

export function TopicBadge({ topic }: { topic: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-ink-muted">
      {topic}
    </span>
  );
}
