import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main-content"
        className="absolute -top-20 start-4 z-50 rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition-all focus:top-4"
      >
        דילוג לתוכן הראשי
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
