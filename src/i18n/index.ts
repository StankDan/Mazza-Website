// Tekstovi sajta. Sajt je jednojezican (srpski, latinica), ali je sadrzaj i
// dalje odvojen od komponenti - ako nekad zatreba drugi jezik, dodaje se novi
// fajl sa istim oblikom (tip Content) i bira se ovde.

import sr from './sr';
import { pathFor } from '../routes';
import type { PageKey } from '../routes';
import type { Content } from './types';

export const content: Content = sr;

export interface I18nValue {
  /** Sadrzaj sajta. */
  t: Content;
  /** Putanja do stranice. */
  path: (key: PageKey) => string;
}

const value: I18nValue = { t: content, path: pathFor };

export function useI18n(): I18nValue {
  return value;
}

export type { Content } from './types';
