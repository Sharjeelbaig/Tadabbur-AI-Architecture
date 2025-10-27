# Data listing layer

Location
- `practical/functions/data_listing.js`

Purpose
- Enumerate available resources from the QuranJS API

Exports
- `listSurahs(): Promise<Surah[]>`
- `listTranslations(): Promise<Translation[]>`
- `listTafseers(): Promise<Tafsir[]>`
- `listReciters(): Promise<Reciter[]>`

Behavior
- Thin wrappers around `quranClient` resource endpoints
- Returns raw arrays from the API client for easy selection

Minimal usage
```js
import {
	listSurahs,
	listTranslations,
	listTafseers,
	listReciters,
} from "../functions/data_listing.js";

const [surahs, translations, tafseers, reciters] = await Promise.all([
	listSurahs(),
	listTranslations(),
	listTafseers(),
	listReciters(),
]);

console.log({ surahs: surahs.length, translations: translations.length });
```
