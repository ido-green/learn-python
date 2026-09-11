import { useEffect, useMemo, useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';
import { tokenizePython, type TokenType } from '@/lib/highlightPython';

const TOKEN_CLASSES: Record<TokenType, string> = {
  comment: 'text-slate-500 italic',
  string: 'text-emerald-300',
  keyword: 'text-sky-300 font-medium',
  builtin: 'text-amber-300',
  number: 'text-orange-300',
  function: 'text-violet-300',
  plain: 'text-slate-100',
};

interface CodeBlockProps {
  code: string;
  caption?: string;
  output?: string;
}

/**
 * בלוק קוד פייתון עם הדגשת תחביר, כפתור העתקה ופלט הרצה.
 * הקוד עצמו מוצג תמיד LTR, גם בתוך העמוד העברי.
 */
export function CodeBlock({ code, caption, output }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const tokens = useMemo(() => tokenizePython(code), [code]);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      // בדפדפנים ישנים או ללא הרשאה — פשוט לא נציג אישור
    }
  }

  return (
    <figure className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-card">
      <figcaption className="flex items-center justify-between gap-3 border-b border-slate-700/70 bg-slate-800/60 px-4 py-2">
        <span className="flex items-center gap-2 text-sm font-medium text-slate-300">
          <Terminal className="size-4 text-slate-400" aria-hidden="true" />
          {caption ?? 'Python'}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
          aria-label={copied ? 'הקוד הועתק' : 'העתקת הקוד'}
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-400" aria-hidden="true" />
              הועתק!
            </>
          ) : (
            <>
              <Copy className="size-3.5" aria-hidden="true" />
              העתקה
            </>
          )}
        </button>
      </figcaption>

      <div className="ltr-code overflow-x-auto">
        <pre className="p-4 text-sm leading-relaxed">
          <code className="font-mono">
            {tokens.map((token, i) => (
              <span key={i} className={TOKEN_CLASSES[token.type]}>
                {token.value}
              </span>
            ))}
          </code>
        </pre>
      </div>

      {output !== undefined && (
        <div className="border-t border-slate-700/70 bg-slate-950/60">
          <p className="px-4 pt-2.5 text-xs font-medium text-slate-500">פלט:</p>
          <div className="ltr-code overflow-x-auto">
            <pre className="bidi-output px-4 pb-3 pt-1 font-mono text-sm leading-relaxed text-slate-400">
              {output}
            </pre>
          </div>
        </div>
      )}
    </figure>
  );
}
