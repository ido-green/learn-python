import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * רשת ביטחון לשגיאות לא צפויות — מציג הודעה ידידותית בעברית
 * במקום מסך לבן, ומדווח את הפרטים הטכניים לקונסול.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('שגיאה לא צפויה באפליקציה:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
          <h1 className="text-2xl font-extrabold text-ink">משהו השתבש</h1>
          <p className="mt-3 max-w-md text-base text-ink-muted">
            קרתה שגיאה לא צפויה. רעננו את העמוד — ואם הבעיה חוזרת, נשמח שתדווחו לנו דרך
            עמוד יצירת הקשר.
          </p>
          <a
            href={import.meta.env.BASE_URL}
            className="mt-6 rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
          >
            חזרה לדף הבית
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
