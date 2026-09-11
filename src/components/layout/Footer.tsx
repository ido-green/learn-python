import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { lessons } from '@/data/lessons';
import { Logo } from './Logo';

const QUICK_LINKS = [
  { to: '/lessons', label: 'כל השיעורים' },
  { to: '/about', label: 'אודות הקורס' },
  { to: '/contact', label: 'יצירת קשר' },
];

export function Footer() {
  const featuredLessons = lessons.slice(0, 4);

  return (
    <footer className="border-t border-line bg-surface-muted">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              קורס פייתון חינמי בעברית — שיעורים מסודרים, דוגמאות קוד מעשיות ותרגילים,
              מהצעד הראשון ועד כתיבת פרויקטים אמיתיים.
            </p>
          </div>

          <nav aria-label="קישורים מהירים">
            <h2 className="text-sm font-bold text-ink">ניווט מהיר</h2>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-muted transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="שיעורים ראשונים">
            <h2 className="text-sm font-bold text-ink">מתחילים כאן</h2>
            <ul className="mt-4 space-y-2.5">
              {featuredLessons.map((lesson) => (
                <li key={lesson.slug}>
                  <Link
                    to={`/lessons/${lesson.slug}`}
                    className="text-sm text-ink-muted transition-colors hover:text-brand-700"
                  >
                    {lesson.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-sm text-ink-faint">
            © {new Date().getFullYear()} לומדים פייתון. התוכן חופשי לשימוש אישי ולימודי.
          </p>
          <a
            href="https://github.com/ido-green/learn-python"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-ink-faint transition-colors hover:text-ink"
          >
            <Github className="size-4" aria-hidden="true" />
            קוד המקור ב-GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
}
