# Clients initialization

This project uses two clients:
- LLM client for AI explanations
- Quran API client for authentic data

## LLM: `practical/clients/ollamaClient.js`

Purpose
- Connects to Ollama cloud (GPT‑OSS 120b) via LangChain ChatOllama
- Authenticated with OLLAMA_API_KEY from environment
- Exports a preconfigured client used by the AI layer

Environment
- OLLAMA_API_KEY

Notes
- Base URL: https://ollama.com
- Model: gpt-oss:120b-cloud

Minimal usage
```js
import ollamaClient from "../clients/ollamaClient.js";

const res = await ollamaClient.invoke([
	{ role: "user", content: "Explain the concept of mercy briefly." },
]);
console.log(res.content);
```

## Quran API: `practical/clients/quranClient.js`

Purpose
- Provides access to chapters, verses (with words/translations), tafsir resources, and recitations
- Authenticated with QuranJS API credentials

Environment
- QURAN_API_CLIENT_ID
- QURAN_API_CLIENT_SECRET

Minimal usage
```js
import quranClient from "../clients/quranClient.js";

const surahs = await quranClient.chapters.findAll();
console.log(surahs.length);
```

## Environment file

Create a .env file at repo root or under `practical/` depending on your setup:
```
OLLAMA_API_KEY=...
QURAN_API_CLIENT_ID=...
QURAN_API_CLIENT_SECRET=...
```
