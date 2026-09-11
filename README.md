# לומדים פייתון 🐍

אתר קורס פייתון חינמי בעברית — מסלול של 10 שיעורים מסודרים, מהתקנת פייתון ועד
מחלקות וחבילות, עם דוגמאות קוד, פלט צפוי ותרגיל מסכם בכל שיעור.

האתר בנוי RTL מהיסוד: ניווט, כרטיסים, טפסים, חצים וכיווני אנימציה — הכול מותאם
לעברית, בעוד שדוגמאות הקוד מוצגות תמיד LTR עם הדגשת תחביר.

## טכנולוגיות

- **React 18 + TypeScript** — קומפוננטות מוקלדות במלואן, ללא `any`
- **Vite** — פיתוח ובנייה מהירים
- **Tailwind CSS 4** — מערכת עיצוב מבוססת טוקנים (`src/index.css`)
- **React Router** — ניתוב מלא עם עמוד 404 ושחזור גלילה
- **lucide-react** — ספריית אייקונים אחידה
- מדגיש תחביר פייתון ייעודי וקל משקל (`src/lib/highlightPython.ts`) — בלי תלות חיצונית

## הרצה מקומית

```bash
npm install
npm run dev        # שרת פיתוח
npm run build      # בדיקת טיפוסים + בניית production
npm run preview    # תצוגה מקדימה של תוצר הבנייה
npm run lint       # ESLint
```

## פריסה (Deployment)

האתר נפרס אוטומטית ל-GitHub Pages בכל push ל-`main`
(ראו `.github/workflows/deploy.yml`), וזמין בכתובת:
<https://ido-green.github.io/learn-python/>

הפריסה כוללת `404.html` שהוא עותק של `index.html`, כך שקישורים עמוקים
(למשל `/lessons/loops`) עובדים גם ברענון. אם עוברים לדומיין משלכם,
עדכנו את `base` ב-`vite.config.ts`.

## מבנה הפרויקט

```
src/
├── components/
│   ├── layout/        # Header, Footer, Layout, Logo
│   ├── ui/            # Button, Badge, Container, EmptyState, SectionHeading
│   ├── CodeBlock.tsx  # בלוק קוד עם הדגשת תחביר, העתקה ופלט
│   ├── LessonCard.tsx
│   └── ErrorBoundary.tsx
├── data/
│   ├── types.ts       # טיפוסי הדומיין (Lesson, Level, ...)
│   └── lessons.ts     # תוכן הקורס — כל השיעורים
├── lib/               # כלי עזר: cn, highlightPython, useDocumentTitle
├── pages/             # עמודי האתר
├── App.tsx            # הגדרת הנתיבים
└── index.css          # מערכת העיצוב (Tailwind theme)
```

## הוספת שיעור חדש

מוסיפים אובייקט `Lesson` למערך ב-`src/data/lessons.ts` — הקטלוג, החיפוש,
הסינון, ניווט "הבא/הקודם" והפוטר מתעדכנים אוטומטית.
