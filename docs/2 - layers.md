# Architecture layers

This codebase is organized into three small, focused layers.

## 1) Data listing
Purpose
- Discover available resources (surahs, translations, tafsir editions, reciters)
Location
- `practical/functions/data_listing.js`
Output
- Arrays of resource objects from the QuranJS API

## 2) Data retrieval
Purpose
- Retrieve concrete content: verses with words/translations/audio, tafsir text, and recitations
Location
- `practical/functions/data_retrieve.js`
Output
- Normalized arrays/objects ready for UI or AI processing

## 3) AI processing
Purpose
- Transform classical tafsir into concise, modern explanations with key terms
Location
- `practical/functions/ai.js`
Output
- JSON: `{ explanation, keyTerms: { term, definition }[] }`

## Data flow
1) List resources → user selects chapter/translation/tafsir/reciter
2) Retrieve verses, tafsir, and audio URLs
3) Generate modern, formal explanation (JSON)

## Contracts (summary)
- Listing: no input → arrays (surahs, translations, tafsirs, reciters)
- Retrieval: IDs in → structured data out
- AI: `tafseerText: string` → `{ explanation: string, keyTerms: { term, definition }[] }`
