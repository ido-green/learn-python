import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';
import { Logo } from './Logo';

const NAV_ITEMS = [
  { to: '/', label: 'דף הבית' },
  { to: '/lessons', label: 'שיעורים' },
  { to: '/about', label: 'אודות' },
  { to: '/contact', label: 'יצירת קשר' },
];

function navLinkClasses(isActive: boolean): string {
  return cn(
    'rounded-md px-3 py-2 text-sm font-semibold transition-colors',
    isActive ? 'bg-brand-50 text-brand-800' : 'text-ink-muted hover:text-ink',
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // סגירת התפריט הנייד בכל מעבר עמוד
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // מקש Escape סוגר את התפריט ומחזיר את הפוקוס לכפתור
  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="ניווט ראשי" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => navLinkClasses(isActive)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="rounded-md p-2 text-ink-muted hover:bg-surface-muted hover:text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'סגירת התפריט' : 'פתיחת התפריט'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="ניווט ראשי לנייד"
          className="border-t border-line bg-surface md:hidden"
        >
          <Container className="py-3">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn('block', navLinkClasses(isActive), 'px-3 py-2.5 text-base')
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
