# 3) Data listing

Create `functions/data_listing.js` to expose discovery functions.

Purpose
- Enumerate available resources for user selection

Code
```js
// functions/data_listing.js
import quranClient from '../clients/quranClient.js';

export async function listSurahs() {
  return quranClient?.chapters?.findAll();
}

export async function listTranslations() {
  return quranClient?.resources?.findAllTranslations();
}

export async function listTafseers() {
  return quranClient?.resources?.findAllTafsirs();
}

export async function listReciters() {
  return quranClient?.resources?.findAllRecitations();
}
```

Minimal usage
```js
import { listSurahs, listTranslations } from './functions/data_listing.js';

const [surahs, translations] = await Promise.all([
  listSurahs(),
  listTranslations(),
]);
console.log(surahs.length, translations.length);
```
