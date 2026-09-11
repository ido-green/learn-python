import { Link } from 'react-router-dom';

/** לוגו האתר — מקשר תמיד לדף הבית */
export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 rounded-md text-lg font-extrabold text-ink"
      aria-label="לומדים פייתון — דף הבית"
    >
      <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" className="size-8" />
      <span>
        לומדים <span className="text-brand-700">פייתון</span>
      </span>
    </Link>
  );
}
