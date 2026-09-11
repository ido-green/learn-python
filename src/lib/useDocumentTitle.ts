import { useEffect } from 'react';

const SITE_NAME = 'לומדים פייתון';

/** מעדכן את כותרת הדפדפן לכל עמוד, לטובת SEO ונגישות */
export function useDocumentTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
    return () => {
      document.title = SITE_NAME;
    };
  }, [pageTitle]);
}
