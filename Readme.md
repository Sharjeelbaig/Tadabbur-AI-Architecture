# Tadabbur AI

Tadabbur AI combines Quranic knowledge APIs with a Large Language Model (LLM) to produce clear, modern explanations of Quranic verses. This repository focuses on a clean, modular backend architecture that fetches authentic data, processes it with AI, and returns structured results.

## Overview

- Fetch Quranic data (surahs, verses, translations, tafsirs, recitations)
- List available resources (translations, tafsir editions, reciters)
- Retrieve verses with translations and per‑word audio
- Generate formal, accessible AI explanations with key terms in JSON

## Architecture

Layers
- Data listing: discover available resources
- Data retrieval: fetch verses, tafsir, and audio
- AI processing: transform tafsir into structured, modern explanations

Structure
```
practical/
├── index.js
├── package.json
├── clients/
│   ├── ollamaClient.js   # LLM (Ollama GPT‑OSS 120b cloud via LangChain)
│   └── quranClient.js    # QuranJS API client
└── functions/
    ├── data_listing.js   # List resources
    ├── data_retrieve.js  # Fetch data
    └── ai.js             # AI explanations
```

## Setup

Prerequisites
- Node.js 18+
- Accounts/keys for: Ollama cloud (GPT‑OSS) and Quran Foundation API

Environment
Create a .env file with:
```
OLLAMA_API_KEY=...
QURAN_API_CLIENT_ID=...
QURAN_API_CLIENT_SECRET=...
```

Install and run
- Install dependencies in practical/
- Provide the environment variables
- Run your scripts via node as needed (see index.js)

## Key Modules

Clients
- `practical/clients/ollamaClient.js`: LangChain ChatOllama to GPT‑OSS 120b cloud (auth via OLLAMA_API_KEY)
- `practical/clients/quranClient.js`: QuranJS API client (auth via client ID/secret)

Functions
- `listSurahs()` → Surah[]
- `listTranslations()` → Translation[]
- `listTafseers()` → Tafsir[]
- `listReciters()` → Reciter[]
- `retrieveSurah(surahId, translationId)` → { verse, translation, words, word_audios, key }[]
- `retrieveTafseer(surahId, tafsirId)` → tafsirObject
- `retrieveRecitation(chapterId, reciterId)` → { verseKey, audioUrl }[]
- `generateExplanation(tafseerText)` → { explanation, keyTerms: { term, definition }[] }

## Typical Flow

1) List resources → user selects chapter, translation, tafsir, reciter
2) Retrieve verses, tafsir, and audio URLs
3) Generate modern, formal explanation as JSON (explanation + key terms)

## Tech, Tools, Model & Libraries

- Node.js, LangChain (ChatOllama), QuranJS API
- GPT‑OSS 120b via Ollama cloud
- extract-json-from-string
- dotenv

## Notes

- Uses official Quran.com data sources and preserves original text
- Designed for clarity, modularity, and ease of extension

