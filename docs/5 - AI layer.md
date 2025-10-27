# AI layer

Location
- `practical/functions/ai.js`

Purpose
- Convert classical tafsir text into a concise, modern explanation with defined key terms

## Export and contract

`generateExplanation(tafseerText: string): Promise<{
	explanation: string,
	keyTerms: { term: string, definition: string }[],
}>`
- Sends a system/user prompt to GPT‑OSS 120b (Ollama cloud) via LangChain
- Extracts the JSON payload from the LLM response using `extract-json-from-string`

Schema (expected)
```json
{
	"explanation": "...",
	"keyTerms": [
		{ "term": "...", "definition": "..." }
	]
}
```

## Minimal usage
```js
import { generateExplanation } from "../functions/ai.js";

const tafsirText = "Classical tafsir text for a selected chapter or verse.";
const result = await generateExplanation(tafsirText);
console.log(result.explanation);
```

## Notes
- Requires `OLLAMA_API_KEY` to be set.
- Keep inputs concise; very large tafsir blocks may increase latency.
