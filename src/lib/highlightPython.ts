export type TokenType =
  'comment' | 'string' | 'keyword' | 'builtin' | 'number' | 'function' | 'plain';

export interface Token {
  type: TokenType;
  value: string;
}

const KEYWORDS = new Set([
  'False',
  'None',
  'True',
  'and',
  'as',
  'assert',
  'async',
  'await',
  'break',
  'class',
  'continue',
  'def',
  'del',
  'elif',
  'else',
  'except',
  'finally',
  'for',
  'from',
  'global',
  'if',
  'import',
  'in',
  'is',
  'lambda',
  'nonlocal',
  'not',
  'or',
  'pass',
  'raise',
  'return',
  'try',
  'while',
  'with',
  'yield',
]);

const BUILTINS = new Set([
  'print',
  'input',
  'len',
  'range',
  'type',
  'int',
  'float',
  'str',
  'bool',
  'list',
  'dict',
  'set',
  'tuple',
  'open',
  'any',
  'all',
  'sum',
  'min',
  'max',
  'sorted',
  'enumerate',
  'zip',
  'abs',
  'round',
  'isinstance',
  'self',
]);

// סדר החלופות קובע עדיפות: הערות לפני מחרוזות, מחרוזות לפני מילים
const TOKEN_PATTERN = new RegExp(
  [
    '(#[^\\n]*)', // הערה
    '([fF]?"(?:[^"\\\\\\n]|\\\\.)*"|[fF]?\'(?:[^\'\\\\\\n]|\\\\.)*\')', // מחרוזת
    '\\b(\\d+(?:\\.\\d+)?)\\b', // מספר
    '([A-Za-z_][A-Za-z0-9_]*)', // מזהה
  ].join('|'),
  'g',
);

/**
 * ממיר קטע קוד פייתון לרשימת אסימונים צבועים.
 * מימוש קטן וייעודי — חוסך תלות בספריית הדגשה כבדה.
 */
export function tokenizePython(code: string): Token[] {
  const tokens: Token[] = [];
  let lastIndex = 0;

  for (const match of code.matchAll(TOKEN_PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      tokens.push({ type: 'plain', value: code.slice(lastIndex, index) });
    }

    const [full, comment, string, number, identifier] = match;
    if (comment !== undefined) {
      tokens.push({ type: 'comment', value: full });
    } else if (string !== undefined) {
      tokens.push({ type: 'string', value: full });
    } else if (number !== undefined) {
      tokens.push({ type: 'number', value: full });
    } else if (identifier !== undefined) {
      if (KEYWORDS.has(identifier)) {
        tokens.push({ type: 'keyword', value: full });
      } else if (BUILTINS.has(identifier)) {
        tokens.push({ type: 'builtin', value: full });
      } else if (code[index + full.length] === '(') {
        tokens.push({ type: 'function', value: full });
      } else {
        tokens.push({ type: 'plain', value: full });
      }
    }
    lastIndex = index + full.length;
  }

  if (lastIndex < code.length) {
    tokens.push({ type: 'plain', value: code.slice(lastIndex) });
  }
  return tokens;
}
