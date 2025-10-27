# Data retrieval layer

Location
- `practical/functions/data_retrieve.js`

Purpose
- Fetch normalized data for verses, tafsir, and recitations

## Exports and contracts

`retrieveSurah(surahId: number, translationId: number): Promise<{
	verse: string,
	translation: string,
	words: string[],
	word_audios: string[],
	key: string,
}[]>`
- Returns all verses in a chapter, including per‑word text and audio URLs (`https://audio.qurancdn.com/...`).

`retrieveTafseer(surahId: number, tafsirId: number): Promise<any>`
- Fetches tafsir JSON for the chapter from Quran.com’s v4 tafsir endpoint.

`retrieveRecitation(chapterId: number, reciterId: number): Promise<{
	verseKey: string,
	audioUrl: string,
}[]>`
- Returns verse‑key to audio‑URL mappings for the selected reciter.

## Minimal usage
```js
import {
	retrieveSurah,
	retrieveTafseer,
	retrieveRecitation,
} from "../functions/data_retrieve.js";

const verses = await retrieveSurah(1, /* translationId */ 131);
const tafsir = await retrieveTafseer(1, /* tafsirId */ 169);
const audio = await retrieveRecitation(1, /* reciterId */ 7);

console.log(verses[0]);
```

## Notes
- Assumes valid IDs; wrap calls in try/catch for production use.
- Audio URLs are absolute and can be streamed directly.
