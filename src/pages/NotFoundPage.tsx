import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export function NotFoundPage() {
  useDocumentTitle('העמוד לא נמצא');

  return (
    <Container className="flex flex-col items-center py-24 text-center lg:py-32">
      <p className="ltr-code font-mono text-sm text-ink-faint">404: page_not_found</p>
      <h1 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
        העמוד שחיפשתם לא נמצא
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
        אולי הקישור השתנה, ואולי סתם נפלה טעות הקלדה. בכל מקרה — השיעורים עדיין כאן ומחכים
        לכם.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink to="/">לדף הבית</ButtonLink>
        <ButtonLink to="/lessons" variant="secondary">
          לכל השיעורים
        </ButtonLink>
      </div>
    </Container>
  );
}
