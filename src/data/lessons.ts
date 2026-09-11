import type { Lesson } from './types';

/**
 * תוכן הקורס. כל שיעור בנוי מסעיפים עם הסברים, דוגמאות קוד ותרגיל מסכם.
 * הסדר כאן קובע את סדר הלימוד המומלץ ואת ניווט "השיעור הבא/הקודם".
 */
export const lessons: Lesson[] = [
  {
    slug: 'getting-started',
    order: 1,
    title: 'צעדים ראשונים בפייתון',
    summary:
      'מה זה פייתון, למה כדאי ללמוד דווקא אותה, איך מתקינים אותה על המחשב — וכותבים את התוכנית הראשונה שלכם.',
    level: 'beginner',
    durationMinutes: 20,
    topics: ['התקנה', 'print', 'הרצת קוד'],
    sections: [
      {
        title: 'למה פייתון?',
        paragraphs: [
          'פייתון היא אחת משפות התכנות הפופולריות בעולם, ולא במקרה: התחביר שלה קריא ופשוט, הקהילה סביבה ענקית, והיא משמשת כמעט בכל תחום — פיתוח אתרים, מדע הנתונים, בינה מלאכותית, אוטומציה ועוד.',
          'בזכות הפשטות שלה, פייתון היא בחירה מצוינת כשפה ראשונה. אפשר להתחיל לכתוב קוד שעובד כבר בשיעור הראשון, בלי להסתבך עם פרטים טכניים.',
        ],
      },
      {
        title: 'התקנת פייתון',
        paragraphs: [
          'נכנסים לאתר הרשמי python.org, מורידים את הגרסה העדכנית למערכת ההפעלה שלכם ומריצים את ההתקנה. בווינדוס חשוב לסמן את התיבה "Add Python to PATH" לפני שלוחצים על התקנה.',
          'כדי לוודא שההתקנה הצליחה, פותחים חלון טרמינל (או CMD בווינדוס) ומקלידים:',
        ],
        code: {
          caption: 'בדיקת גרסה בטרמינל',
          code: 'python --version',
          output: 'Python 3.12.4',
        },
        tip: 'אם הפקודה python לא מזוהה, נסו python3 — כך היא נקראת ברוב מערכות מק ולינוקס.',
      },
      {
        title: 'התוכנית הראשונה שלכם',
        paragraphs: [
          'המסורת מחייבת: התוכנית הראשונה בכל שפה מדפיסה למסך "שלום עולם". יוצרים קובץ חדש בשם hello.py, כותבים בו שורה אחת ומריצים.',
          'הפונקציה print מדפיסה למסך כל מה שמעבירים לה בין הסוגריים. זה הכלי הבסיסי ביותר לראות מה הקוד שלנו עושה.',
        ],
        code: {
          caption: 'hello.py',
          code: 'print("שלום עולם!")\nprint("אני לומדת פייתון")',
          output: 'שלום עולם!\nאני לומדת פייתון',
        },
      },
    ],
    exercise: {
      title: 'תרגיל: היכרות',
      description:
        'כתבו תוכנית שמדפיסה שלוש שורות: השם שלכם, העיר שבה אתם גרים, ומשפט אחד על למה החלטתם ללמוד פייתון.',
      starterCode: '# כתבו כאן את הקוד שלכם\nprint("...")',
    },
  },
  {
    slug: 'variables-and-types',
    order: 2,
    title: 'משתנים וטיפוסי נתונים',
    summary:
      'איך שומרים מידע בזיכרון: משתנים, מספרים, מחרוזות וערכים בוליאניים — ואיך פייתון מזהה את הטיפוס לבד.',
    level: 'beginner',
    durationMinutes: 25,
    topics: ['משתנים', 'int', 'float', 'str', 'bool'],
    sections: [
      {
        title: 'מה זה משתנה?',
        paragraphs: [
          'משתנה הוא שם שאנחנו נותנים לערך כדי שנוכל להשתמש בו שוב מאוחר יותר. בפייתון יוצרים משתנה פשוט על ידי השמה עם הסימן =, בלי להצהיר על טיפוס מראש.',
        ],
        code: {
          caption: 'יצירת משתנים',
          code: 'name = "דנה"\nage = 28\nheight = 1.68\nis_student = True\n\nprint(name, age)',
          output: 'דנה 28',
        },
        tip: 'שמות משתנים בפייתון נכתבים באנגלית באותיות קטנות, עם קו תחתון בין מילים: first_name, total_price.',
      },
      {
        title: 'הטיפוסים הבסיסיים',
        paragraphs: [
          'לכל ערך בפייתון יש טיפוס: מספרים שלמים (int), מספרים עשרוניים (float), מחרוזות טקסט (str) וערכי אמת (bool) שיכולים להיות True או False.',
          'הפונקציה type מגלה לנו מה הטיפוס של כל ערך:',
        ],
        code: {
          caption: 'בדיקת טיפוסים',
          code: 'print(type(42))\nprint(type(3.14))\nprint(type("שלום"))\nprint(type(True))',
          output: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>",
        },
      },
      {
        title: 'המרות בין טיפוסים',
        paragraphs: [
          'לפעמים צריך להמיר ערך מטיפוס אחד לאחר — למשל, קלט מהמשתמש מגיע תמיד כמחרוזת, וכדי לחשב איתו צריך להמיר אותו למספר.',
        ],
        code: {
          caption: 'המרת קלט למספר',
          code: 'birth_year = input("באיזו שנה נולדת? ")\nage = 2026 - int(birth_year)\nprint("הגיל שלך בערך:", age)',
          output: 'באיזו שנה נולדת? 1998\nהגיל שלך בערך: 28',
        },
        tip: 'ניסיון להמיר מחרוזת שאינה מספר, כמו int("abc"), יגרום לשגיאה. בהמשך נלמד איך מתמודדים עם זה.',
      },
    ],
    exercise: {
      title: 'תרגיל: מחשבון גיל',
      description:
        'כתבו תוכנית שמבקשת מהמשתמש את שנת הלידה שלו, מחשבת את גילו ומדפיסה משפט ידידותי עם התוצאה.',
      starterCode: 'birth_year = input("באיזו שנה נולדת? ")\n# המשיכו מכאן',
    },
  },
  {
    slug: 'strings',
    order: 3,
    title: 'עבודה עם מחרוזות',
    summary:
      'טקסט הוא לב של כמעט כל תוכנית: חיבור מחרוזות, f-strings, מתודות שימושיות וחיתוך.',
    level: 'beginner',
    durationMinutes: 25,
    topics: ['f-string', 'מתודות מחרוזת', 'חיתוך'],
    sections: [
      {
        title: 'שרשור ותבניות',
        paragraphs: [
          'אפשר לחבר מחרוזות עם הסימן +, אבל הדרך המודרנית והנוחה היא f-string: כותבים f לפני המירכאות, ומשבצים משתנים בתוך סוגריים מסולסלים.',
        ],
        code: {
          caption: 'f-string בפעולה',
          code: 'name = "יואב"\nscore = 95\nprint(f"{name} קיבל {score} במבחן")',
          output: 'יואב קיבל 95 במבחן',
        },
      },
      {
        title: 'מתודות שימושיות',
        paragraphs: [
          'למחרוזות יש עשרות מתודות מובנות. הנה כמה שתשתמשו בהן שוב ושוב: upper ו-lower לשינוי גודל אותיות, strip להסרת רווחים מיותרים, replace להחלפה ו-split לפיצול.',
        ],
        code: {
          caption: 'מתודות נפוצות',
          code: 'email = "  Dana@Example.COM  "\nclean = email.strip().lower()\nprint(clean)\nprint(clean.split("@"))',
          output: "dana@example.com\n['dana', 'example.com']",
        },
        tip: 'מתודות של מחרוזת לא משנות את המחרוזת המקורית — הן מחזירות מחרוזת חדשה. מחרוזות בפייתון אינן ניתנות לשינוי.',
      },
      {
        title: 'אינדקסים וחיתוך',
        paragraphs: [
          'כל תו במחרוזת יושב במקום ממוספר, החל מאפס. אפשר לגשת לתו בודד עם סוגריים מרובעים, ולחתוך טווח עם תחביר של נקודתיים.',
        ],
        code: {
          caption: 'גישה וחיתוך',
          code: 'word = "Python"\nprint(word[0])\nprint(word[-1])\nprint(word[0:3])\nprint(len(word))',
          output: 'P\nn\nPyt\n6',
        },
      },
    ],
    exercise: {
      title: 'תרגיל: מנקה כתובות מייל',
      description:
        'קבלו מהמשתמש כתובת מייל, נקו רווחים מיותרים, המירו לאותיות קטנות והדפיסו רק את שם הדומיין (החלק שאחרי @).',
    },
  },
  {
    slug: 'conditions',
    order: 4,
    title: 'תנאים וקבלת החלטות',
    summary:
      'איך תוכנית מקבלת החלטות: משפטי if, elif ו-else, אופרטורים להשוואה ותנאים מורכבים.',
    level: 'beginner',
    durationMinutes: 30,
    topics: ['if', 'elif', 'else', 'אופרטורים לוגיים'],
    sections: [
      {
        title: 'משפט if בסיסי',
        paragraphs: [
          'משפט if מריץ קטע קוד רק אם תנאי מסוים מתקיים. שימו לב להזחה (רווחים בתחילת שורה) — בפייתון היא לא עניין של סגנון אלא חלק מהתחביר: כל מה שמוזח שייך לתנאי.',
        ],
        code: {
          caption: 'תנאי פשוט',
          code: 'temperature = 32\n\nif temperature > 30:\n    print("חם היום!")\n    print("כדאי לשתות הרבה מים")',
          output: 'חם היום!\nכדאי לשתות הרבה מים',
        },
      },
      {
        title: 'elif ו-else',
        paragraphs: [
          'כשיש כמה מקרים אפשריים, משרשרים תנאים עם elif (קיצור של else if), ומסיימים ב-else שתופס את כל מה שנשאר.',
        ],
        code: {
          caption: 'כמה מסלולים',
          code: 'grade = 78\n\nif grade >= 90:\n    print("מצוין!")\nelif grade >= 70:\n    print("יפה מאוד")\nelif grade >= 55:\n    print("עברת")\nelse:\n    print("כדאי לתרגל עוד")',
          output: 'יפה מאוד',
        },
        tip: 'פייתון בודקת את התנאים לפי הסדר ועוצרת בראשון שמתקיים — לכן חשוב לסדר אותם מהמחמיר למקל.',
      },
      {
        title: 'תנאים מורכבים',
        paragraphs: [
          'אפשר לשלב כמה תנאים עם המילים and, or ו-not. הן קריאות כמעט כמו משפט באנגלית, וזה בדיוק הרעיון.',
        ],
        code: {
          caption: 'and, or, not',
          code: 'age = 25\nhas_license = True\n\nif age >= 17 and has_license:\n    print("מותר לנהוג")\n\nday = "שבת"\nif day == "שישי" or day == "שבת":\n    print("סוף שבוע!")',
          output: 'מותר לנהוג\nסוף שבוע!',
        },
      },
    ],
    exercise: {
      title: 'תרגיל: בודק כניסה',
      description:
        'כתבו תוכנית שמקבלת גיל, ומדפיסה אם מותר להיכנס למופע: מתחת ל-16 — רק בליווי מבוגר, בין 16 ל-18 — כניסה מותרת עד חצות, מעל 18 — כניסה חופשית.',
    },
  },
  {
    slug: 'loops',
    order: 5,
    title: 'לולאות: חזרה על פעולות',
    summary: 'לולאות for ו-while, הפונקציה range, ושליטה בזרימה עם break ו-continue.',
    level: 'beginner',
    durationMinutes: 30,
    topics: ['for', 'while', 'range', 'break'],
    sections: [
      {
        title: 'לולאת for',
        paragraphs: [
          'לולאת for עוברת על כל איבר ברצף — תווים במחרוזת, איברים ברשימה, או מספרים שמייצרת הפונקציה range.',
        ],
        code: {
          caption: 'לולאה על טווח מספרים',
          code: 'for i in range(1, 6):\n    print(f"{i} כפול 7 = {i * 7}")',
          output:
            '1 כפול 7 = 7\n2 כפול 7 = 14\n3 כפול 7 = 21\n4 כפול 7 = 28\n5 כפול 7 = 35',
        },
        tip: 'range(1, 6) מייצר את המספרים 1 עד 5 — הגבול העליון תמיד לא נכלל.',
      },
      {
        title: 'לולאת while',
        paragraphs: [
          'לולאת while ממשיכה לרוץ כל עוד תנאי מתקיים. משתמשים בה כשלא יודעים מראש כמה פעמים נצטרך לחזור — למשל, עד שהמשתמש מזין קלט תקין.',
        ],
        code: {
          caption: 'ספירה לאחור',
          code: 'count = 5\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint("שיגור!")',
          output: '5\n4\n3\n2\n1\nשיגור!',
        },
        tip: 'ודאו שהתנאי של while ישתנה בסופו של דבר — אחרת תיווצר לולאה אין-סופית והתוכנית תיתקע.',
      },
      {
        title: 'break ו-continue',
        paragraphs: [
          'המילה break עוצרת את הלולאה מיד, ו-continue מדלגת לסיבוב הבא. שתיהן שימושיות לטיפול במקרים מיוחדים בתוך הלולאה.',
        ],
        code: {
          caption: 'עצירה מוקדמת',
          code: 'numbers = [4, 9, 15, 2, 8]\n\nfor n in numbers:\n    if n > 10:\n        print("נמצא מספר גדול מ-10, עוצרים")\n        break\n    print(n)',
          output: '4\n9\nנמצא מספר גדול מ-10, עוצרים',
        },
      },
    ],
    exercise: {
      title: 'תרגיל: משחק ניחושים',
      description:
        'בחרו מספר סודי בין 1 ל-20, ובעזרת לולאת while בקשו מהמשתמש לנחש עד שיצליח. אחרי כל ניחוש הדפיסו אם המספר הסודי גדול או קטן יותר.',
      starterCode: 'secret = 13\nguess = 0\n# המשיכו מכאן',
    },
  },
  {
    slug: 'lists-and-dicts',
    order: 6,
    title: 'רשימות ומילונים',
    summary:
      'מבני הנתונים החשובים ביותר בפייתון: רשימות לאוספים סדורים, ומילונים לצמדי מפתח–ערך.',
    level: 'intermediate',
    durationMinutes: 35,
    topics: ['list', 'dict', 'append', 'in'],
    sections: [
      {
        title: 'רשימות',
        paragraphs: [
          'רשימה מחזיקה אוסף ערכים לפי סדר. אפשר להוסיף עם append, להסיר עם remove, למיין עם sort ולבדוק כמה איברים יש עם len.',
        ],
        code: {
          caption: 'פעולות על רשימה',
          code: 'tasks = ["לקנות חלב", "לשלוח מייל"]\ntasks.append("להתקשר לרופאה")\ntasks.remove("לשלוח מייל")\n\nprint(tasks)\nprint(f"נשארו {len(tasks)} משימות")',
          output: "['לקנות חלב', 'להתקשר לרופאה']\nנשארו 2 משימות",
        },
      },
      {
        title: 'מילונים',
        paragraphs: [
          'מילון (dict) שומר צמדים של מפתח וערך, כמו מילון אמיתי שממפה מילה לפירוש שלה. הגישה לערך נעשית לפי המפתח, במקום לפי מיקום.',
        ],
        code: {
          caption: 'מילון של פרטי איש קשר',
          code: 'contact = {\n    "name": "נועה לוי",\n    "phone": "050-1234567",\n    "city": "חיפה",\n}\n\nprint(contact["name"])\ncontact["email"] = "noa@example.com"\nprint(len(contact))',
          output: 'נועה לוי\n4',
        },
        tip: 'גישה למפתח שלא קיים זורקת שגיאה. המתודה get מחזירה None (או ערך ברירת מחדל) במקום: contact.get("fax", "אין").',
      },
      {
        title: 'לולאות על אוספים',
        paragraphs: [
          'לולאת for עובדת נהדר עם רשימות ומילונים. במילון, המתודה items מחזירה את המפתח והערך יחד בכל סיבוב.',
        ],
        code: {
          caption: 'מעבר על מילון',
          code: 'prices = {"קפה": 12, "מאפה": 15, "מיץ": 10}\n\ntotal = 0\nfor item, price in prices.items():\n    print(f"{item}: {price} ש\\"ח")\n    total += price\n\nprint(f"סך הכול: {total} ש\\"ח")',
          output: 'קפה: 12 ש"ח\nמאפה: 15 ש"ח\nמיץ: 10 ש"ח\nסך הכול: 37 ש"ח',
        },
      },
    ],
    exercise: {
      title: 'תרגיל: ניהול מלאי',
      description:
        'צרו מילון של מוצרים וכמויות במלאי. כתבו קוד שמדפיס את כל המוצרים שהכמות שלהם קטנה מ-5, ובסוף את מספר המוצרים הכולל.',
    },
  },
  {
    slug: 'functions',
    order: 7,
    title: 'פונקציות',
    summary:
      'איך מארגנים קוד לחתיכות קטנות ושימושיות: הגדרת פונקציות, פרמטרים, ערכי החזרה וערכי ברירת מחדל.',
    level: 'intermediate',
    durationMinutes: 35,
    topics: ['def', 'return', 'פרמטרים', 'ברירת מחדל'],
    sections: [
      {
        title: 'הגדרת פונקציה',
        paragraphs: [
          'פונקציה היא קטע קוד עם שם, שאפשר להריץ שוב ושוב. מגדירים אותה עם המילה def, וכל הקוד המוזח תחתיה שייך לה.',
          'פונקציות הן הדרך המרכזית לארגן קוד: במקום לשכפל את אותן שורות, כותבים אותן פעם אחת וקוראים לפונקציה בכל מקום שצריך.',
        ],
        code: {
          caption: 'פונקציה ראשונה',
          code: 'def greet(name):\n    print(f"שלום, {name}!")\n\ngreet("עדי")\ngreet("תומר")',
          output: 'שלום, עדי!\nשלום, תומר!',
        },
      },
      {
        title: 'ערכי החזרה',
        paragraphs: [
          'המילה return מחזירה ערך מהפונקציה אל הקוד שקרא לה. כך פונקציה יכולה לחשב תוצאה שממשיכים לעבוד איתה.',
        ],
        code: {
          caption: 'חישוב והחזרה',
          code: 'def calculate_total(price, quantity, vat=0.17):\n    subtotal = price * quantity\n    return subtotal * (1 + vat)\n\ntotal = calculate_total(50, 3)\nprint(f"לתשלום: {total:.2f} ש\\"ח")',
          output: 'לתשלום: 175.50 ש"ח',
        },
        tip: 'הפרמטר vat קיבל ערך ברירת מחדל (0.17), ולכן אפשר להשמיט אותו בקריאה. פרמטרים עם ברירת מחדל חייבים לבוא אחרי אלה שבלעדיה.',
      },
      {
        title: 'למה לפרק לפונקציות?',
        paragraphs: [
          'כלל אצבע טוב: פונקציה צריכה לעשות דבר אחד, ולעשות אותו טוב. קוד שמפורק לפונקציות קטנות קל יותר לקרוא, לבדוק ולתקן.',
          'שם טוב לפונקציה מתאר מה היא עושה: calculate_total, send_email, is_valid_password. אם קשה למצוא שם ממוקד — כנראה שהפונקציה עושה יותר מדי.',
        ],
        code: {
          caption: 'פירוק לוגיקה לפונקציות',
          code: 'def is_strong_password(password):\n    has_digit = any(c.isdigit() for c in password)\n    return len(password) >= 8 and has_digit\n\nprint(is_strong_password("abc123xy"))\nprint(is_strong_password("short"))',
          output: 'True\nFalse',
        },
      },
    ],
    exercise: {
      title: 'תרגיל: ממיר מטבעות',
      description:
        'כתבו פונקציה שמקבלת סכום בשקלים ושער המרה (ברירת מחדל 3.7), ומחזירה את הסכום בדולרים מעוגל לשתי ספרות. קראו לה עם כמה סכומים והדפיסו את התוצאות.',
    },
  },
  {
    slug: 'files-and-errors',
    order: 8,
    title: 'קבצים וטיפול בשגיאות',
    summary:
      'קריאה וכתיבה של קבצים עם with, והתמודדות נכונה עם שגיאות בעזרת try ו-except.',
    level: 'intermediate',
    durationMinutes: 40,
    topics: ['open', 'with', 'try', 'except'],
    sections: [
      {
        title: 'קריאת קובץ',
        paragraphs: [
          'הדרך הנכונה לפתוח קובץ היא עם משפט with — הוא דואג לסגור את הקובץ אוטומטית, גם אם קרתה שגיאה באמצע.',
        ],
        code: {
          caption: 'קריאת שורות מקובץ',
          code: 'with open("names.txt", encoding="utf-8") as f:\n    for line in f:\n        print(line.strip())',
          output: 'דנה\nיואב\nנועה',
        },
        tip: 'עם טקסט בעברית, ציינו תמיד encoding="utf-8" — כך הקובץ ייקרא נכון בכל מערכת הפעלה.',
      },
      {
        title: 'כתיבה לקובץ',
        paragraphs: [
          'פתיחה במצב "w" יוצרת קובץ חדש (ודורסת קיים), ומצב "a" מוסיף לסוף הקובץ בלי למחוק.',
        ],
        code: {
          caption: 'שמירת רשימה לקובץ',
          code: 'scores = {"דנה": 95, "יואב": 88}\n\nwith open("scores.txt", "w", encoding="utf-8") as f:\n    for name, score in scores.items():\n        f.write(f"{name},{score}\\n")\n\nprint("הקובץ נשמר")',
          output: 'הקובץ נשמר',
        },
      },
      {
        title: 'טיפול בשגיאות',
        paragraphs: [
          'שגיאות הן חלק מהחיים: קובץ שלא קיים, קלט לא תקין, חיבור רשת שנפל. משפט try/except מאפשר לתפוס את השגיאה ולהגיב בצורה מסודרת במקום שהתוכנית תקרוס.',
        ],
        code: {
          caption: 'תפיסת שגיאות ספציפיות',
          code: 'try:\n    with open("missing.txt", encoding="utf-8") as f:\n        data = f.read()\nexcept FileNotFoundError:\n    print("הקובץ לא נמצא — נמשיך בלעדיו")\nexcept PermissionError:\n    print("אין הרשאה לקרוא את הקובץ")',
          output: 'הקובץ לא נמצא — נמשיך בלעדיו',
        },
        tip: 'תפסו תמיד שגיאות ספציפיות ולא except כללי — כך באגים אמיתיים לא יוסתרו בטעות.',
      },
    ],
    exercise: {
      title: 'תרגיל: יומן אישי',
      description:
        'כתבו תוכנית שמבקשת מהמשתמש שורת יומן ומוסיפה אותה לקובץ diary.txt (בלי לדרוס את הקיים). אם הקובץ לא ניתן לכתיבה, הדפיסו הודעת שגיאה ידידותית.',
    },
  },
  {
    slug: 'classes',
    order: 9,
    title: 'מחלקות ותכנות מונחה עצמים',
    summary:
      'איך בונים טיפוסים משלכם: מחלקות, מופעים, המתודה __init__ ומתודות שפועלות על הנתונים.',
    level: 'advanced',
    durationMinutes: 45,
    topics: ['class', '__init__', 'self', 'מתודות'],
    sections: [
      {
        title: 'מה זו מחלקה?',
        paragraphs: [
          'מחלקה היא תבנית ליצירת עצמים: היא מגדירה אילו נתונים כל עצם מחזיק ואילו פעולות אפשר לבצע עליו. למשל, מחלקת BankAccount מגדירה שלכל חשבון יש בעלים ויתרה, ושאפשר להפקיד ולמשוך.',
          'המתודה __init__ רצה אוטומטית בכל יצירת עצם חדש, ומאתחלת את הנתונים שלו. הפרמטר self מייצג את העצם הנוכחי.',
        ],
        code: {
          caption: 'מחלקה בסיסית',
          code: 'class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        self.balance += amount\n\naccount = BankAccount("רות כהן", 500)\naccount.deposit(250)\nprint(f"{account.owner}: {account.balance} ש\\"ח")',
          output: 'רות כהן: 750 ש"ח',
        },
      },
      {
        title: 'מתודות עם לוגיקה',
        paragraphs: [
          'הכוח האמיתי של מחלקות הוא שהלוגיקה יושבת ליד הנתונים. מתודת withdraw, למשל, יכולה לוודא שיש מספיק יתרה לפני משיכה — וכל מי שמשתמש במחלקה מקבל את ההגנה הזו בחינם.',
        ],
        code: {
          caption: 'ולידציה בתוך המחלקה',
          code: 'class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def withdraw(self, amount):\n        if amount > self.balance:\n            raise ValueError("אין מספיק יתרה בחשבון")\n        self.balance -= amount\n\naccount = BankAccount("רות כהן", 100)\ntry:\n    account.withdraw(300)\nexcept ValueError as e:\n    print(f"שגיאה: {e}")',
          output: 'שגיאה: אין מספיק יתרה בחשבון',
        },
      },
      {
        title: 'מתי להשתמש במחלקות?',
        paragraphs: [
          'לא כל קוד צריך מחלקות. הן מצטיינות כשיש לכם "דבר" עם נתונים והתנהגות שהולכים יחד: משתמש, הזמנה, משחק. לסקריפט קצר שמעבד קובץ — פונקציות פשוטות יספיקו, וזה בסדר גמור.',
        ],
        tip: 'כלל אצבע: מתחילים עם פונקציות, ועוברים למחלקה כשמגלים שאתם מעבירים את אותה קבוצת משתנים בין הרבה פונקציות.',
      },
    ],
    exercise: {
      title: 'תרגיל: רשימת משימות',
      description:
        'כתבו מחלקה TodoList עם מתודות add להוספת משימה, complete לסימון משימה כבוצעה, ו-pending שמחזירה את המשימות שטרם בוצעו.',
      starterCode:
        'class TodoList:\n    def __init__(self):\n        self.tasks = []\n\n    # המשיכו מכאן',
    },
  },
  {
    slug: 'modules-and-packages',
    order: 10,
    title: 'מודולים, חבילות ו-pip',
    summary:
      'איך מפצלים פרויקט לקבצים, משתמשים בספרייה הסטנדרטית ומתקינים חבילות חיצוניות מהאינטרנט.',
    level: 'advanced',
    durationMinutes: 40,
    topics: ['import', 'pip', 'venv', 'ספרייה סטנדרטית'],
    sections: [
      {
        title: 'ייבוא מודולים',
        paragraphs: [
          'כל קובץ פייתון הוא מודול שאפשר לייבא. פייתון מגיעה עם ספרייה סטנדרטית עשירה — מתמטיקה, תאריכים, קבצים, רשת ועוד — שכולה במרחק import אחד.',
        ],
        code: {
          caption: 'שימוש בספרייה הסטנדרטית',
          code: 'import math\nfrom datetime import date\n\nprint(math.sqrt(144))\nprint(date.today().year)',
          output: '12.0\n2026',
        },
      },
      {
        title: 'התקנת חבילות עם pip',
        paragraphs: [
          'מעבר לספרייה הסטנדרטית, מאגר PyPI מכיל מאות אלפי חבילות חינמיות. מתקינים אותן עם pip, מנהל החבילות של פייתון.',
          'למשל, requests היא החבילה הפופולרית לבקשות רשת:',
        ],
        code: {
          caption: 'התקנה ושימוש',
          code: '# בטרמינל:\n# pip install requests\n\nimport requests\n\nresponse = requests.get("https://api.github.com")\nprint(response.status_code)',
          output: '200',
        },
      },
      {
        title: 'סביבות וירטואליות',
        paragraphs: [
          'כשעובדים על כמה פרויקטים, כל אחד צריך חבילות שונות — ולפעמים גרסאות שונות של אותה חבילה. סביבה וירטואלית (venv) נותנת לכל פרויקט התקנות משלו, בלי התנגשויות.',
        ],
        code: {
          caption: 'יצירת סביבה והפעלתה',
          code: 'python -m venv .venv\n\n# הפעלה במק/לינוקס:\nsource .venv/bin/activate\n\n# הפעלה בווינדוס:\n.venv\\Scripts\\activate',
        },
        tip: 'הרגל טוב: כל פרויקט חדש מתחיל ביצירת venv ובקובץ requirements.txt שמתעד את החבילות שהותקנו.',
      },
    ],
    exercise: {
      title: 'תרגיל: מטבע יומי',
      description:
        'צרו סביבה וירטואלית חדשה, התקינו בה את חבילת requests, וכתבו סקריפט שמביא נתון כלשהו מ-API ציבורי ומדפיס אותו בצורה קריאה.',
    },
  },
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getAdjacentLessons(slug: string): {
  previous?: Lesson;
  next?: Lesson;
} {
  const index = lessons.findIndex((lesson) => lesson.slug === slug);
  if (index === -1) return {};
  return {
    previous: index > 0 ? lessons[index - 1] : undefined,
    next: index < lessons.length - 1 ? lessons[index + 1] : undefined,
  };
}
