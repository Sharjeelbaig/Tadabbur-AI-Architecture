# 1) Environment setup

Goal
- Prepare your project root to run the Quran + LLM pipeline.

Requirements
- Node.js 18+
- An Ollama cloud API key (GPT‑OSS 120b) and QuranJS API credentials

Dependencies
- @langchain/ollama, @quranjs/api, dotenv, extract-json-from-string

Environment file
```
# .env at project root
OLLAMA_API_KEY=YOUR_OLLAMA_KEY
QURAN_API_CLIENT_ID=YOUR_CLIENT_ID
QURAN_API_CLIENT_SECRET=YOUR_CLIENT_SECRET
```

Folder structure
```
.
  clients/
  functions/
  index.js
  package.json
  .env
```

Notes
- Keep `.env` out of version control.
- Ensure `type: "module"` in `package.json` to use ES modules.
