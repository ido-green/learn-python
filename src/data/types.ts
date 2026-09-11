export type Level = 'beginner' | 'intermediate' | 'advanced';

export interface CodeExample {
  /** קוד פייתון להצגה, תמיד LTR */
  code: string;
  /** כותרת קצרה מעל בלוק הקוד */
  caption?: string;
  /** פלט ההרצה, אם רלוונטי */
  output?: string;
}

export interface LessonSection {
  title: string;
  paragraphs: string[];
  code?: CodeExample;
  /** טיפ מעשי שמוצג בתיבה מודגשת */
  tip?: string;
}

export interface Exercise {
  title: string;
  description: string;
  starterCode?: string;
}

export interface Lesson {
  slug: string;
  /** מספר סידורי במסלול הלימוד, החל מ-1 */
  order: number;
  title: string;
  summary: string;
  level: Level;
  durationMinutes: number;
  topics: string[];
  sections: LessonSection[];
  exercise?: Exercise;
}

export const LEVEL_LABELS: Record<Level, string> = {
  beginner: 'מתחילים',
  intermediate: 'בינוני',
  advanced: 'מתקדם',
};

export const LEVEL_ORDER: Level[] = ['beginner', 'intermediate', 'advanced'];
