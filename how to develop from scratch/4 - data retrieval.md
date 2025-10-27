# 4) Data retrieval

Create `functions/data_retrieve.js` for normalized verse, tafsir, and audio data.

Purpose
- Fetch concrete content for UI/AI consumption

Code
```js
// functions/data_retrieve.js
import quranClient from '../clients/quranClient.js';

export async function retrieveSurah(surahId, translation_id) {
  const surah = await quranClient?.verses?.findByChapter(surahId, {
    words: true,
    translations: [translation_id],
    wordFields: ['text_uthmani'],
  });

  const verses = surah?.map((data) => {
    const translation = data?.translations?.map((t) => t?.text)[0];
    const words = data?.words?.map((w) => w?.textUthmani);
    const word_audios = data?.words
      ?.map((w) => 'https://audio.qurancdn.com/' + w?.audioUrl)
      ?.slice(0, -1);
    const verse = data?.words?.map((w) => w?.textUthmani)?.join(' ');
    const key = data?.verseKey;

    return { verse, translation, words, word_audios, key };
  });

  return verses;
}

export async function retrieveTafseer(surahId, tafsirId) {
  const res = await fetch(
    `https://api.quran.com/api/v4/tafsirs/${tafsirId}/by_chapter/${surahId}`
  );
  return res.json();
}

export async function retrieveRecitation(chapterId, reciterId) {
  const recitation = await quranClient?.audio?.findVerseRecitationsByChapter(
    chapterId,
    reciterId
  );

  return recitation?.audioFiles?.map((v) => ({
    verseKey: v?.verseKey,
    audioUrl: 'https://audio.qurancdn.com/' + v?.url,
  }));
}
```

Minimal usage
```js
import { retrieveSurah, retrieveTafseer, retrieveRecitation } from './functions/data_retrieve.js';

const verses = await retrieveSurah(1, /* translationId */ 131);
const tafsir = await retrieveTafseer(1, /* tafsirId */ 169);
const audio = await retrieveRecitation(1, /* reciterId */ 7);
console.log(verses[0], !!tafsir, audio.length);
```
