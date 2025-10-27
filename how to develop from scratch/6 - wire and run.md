# 6) Wire and run

Goal
- Create an entry script that chains listing → retrieval → AI

Entry: `index.js` at project root
```js
// index.js
import 'dotenv/config';
import { listSurahs, listTranslations } from './functions/data_listing.js';
import { retrieveSurah, retrieveTafseer, retrieveRecitation } from './functions/data_retrieve.js';
import { generateExplanation } from './functions/ai.js';

async function main() {
  const [surahs, translations] = await Promise.all([
    listSurahs(),
    listTranslations(),
  ]);

  const chapterId = 1; // Al-Fatiha
  const translationId = translations?.[0]?.id ?? 131; // fallback example
  const tafsirId = 169; // example
  const reciterId = 7;  // example

  const verses = await retrieveSurah(chapterId, translationId);
  const tafsir = await retrieveTafseer(chapterId, tafsirId);
  const audio = await retrieveRecitation(chapterId, reciterId);

  // Use any tafsir text available in the response for demo
  const tafsirText = JSON.stringify(tafsir)?.slice(0, 2000);
  const explanation = await generateExplanation(tafsirText);

  console.log('Verse sample:', verses?.[0]);
  console.log('Audio sample:', audio?.[0]);
  console.log('Explanation:', explanation);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

Run (from project root)
- Ensure `.env` is set
- Install deps: @langchain/ollama @quranjs/api dotenv extract-json-from-string
- Execute: `node index.js`

Notes
- Replace example IDs with real values as needed.
- Wrap in try/catch and add retries for production.
