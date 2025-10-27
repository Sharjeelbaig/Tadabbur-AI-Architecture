# 2) Clients

Create two clients in `clients/`.

## LLM client: `ollamaClient.js`

Purpose
- Connect to Ollama cloud (GPT‑OSS 120b) via LangChain ChatOllama
- Read `OLLAMA_API_KEY` from `.env`

Code
```js
// clients/ollamaClient.js
import { ChatOllama } from '@langchain/ollama';
import dotenv from 'dotenv';

dotenv.config();

const ollamaClient = new ChatOllama({
  baseUrl: 'https://ollama.com',
  model: 'gpt-oss:120b-cloud',
  headers: {
    Authorization: `Bearer ${process.env.OLLAMA_API_KEY}`,
  },
});

export default ollamaClient;
```

## Quran client: `quranClient.js`

Purpose
- Access chapters, verses, translations, tafsirs, and recitations via QuranJS API
- Read credentials from `.env`

Code
```js
// clients/quranClient.js
import { QuranClient } from '@quranjs/api';
import dotenv from 'dotenv';

dotenv.config();

const quranClient = new QuranClient({
  clientId: process.env.QURAN_API_CLIENT_ID,
  clientSecret: process.env.QURAN_API_CLIENT_SECRET,
});

export default quranClient;
```
