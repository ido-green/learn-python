interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

/** כותרת מדור אחידה: תגית קטנה, כותרת ותיאור */
export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-base text-ink-muted">{description}</p>}
    </div>
  );
}
