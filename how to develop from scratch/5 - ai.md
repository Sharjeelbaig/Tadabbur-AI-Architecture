# 5) AI layer

Create `functions/ai.js` to generate modern explanations.

Purpose
- Rephrase classical tafsir into concise, formal English and extract key terms

Code
```js
// functions/ai.js
import ollamaClient from '../clients/ollamaClient.js';
import extract from 'extract-json-from-string';

export async function generateExplanation(tafseerText) {
  const schema = {
    explanation: 'string',
    keyTerms: '{term: string, definition: string}[]',
  };

  const query = `Rephrase the following tafseer in formal and modern language suitable for a general audience: ${tafseerText}\nAvoid slang. Summarize key points and define Islamic and English key terms. Respond strictly as JSON:\n{\n  explanation: string,\n  keyTerms: {term: string, definition: string}[],\n}`;

  const response = await ollamaClient.invoke([
    {
      role: 'system',
      content: `You are a teacher who explains Quranic tafsir in simple formal language. Always respond in JSON matching: ${JSON.stringify(
        schema
      )}`,
    },
    { role: 'user', content: query },
  ]);

  return extract(response?.content)[0];
}
```

Contract
```ts
(given) tafseerText: string
(returns) { explanation: string, keyTerms: { term: string, definition: string }[] }
```

Minimal usage
```js
import { generateExplanation } from './functions/ai.js';

const result = await generateExplanation('Classical tafsir text ...');
console.log(result.explanation);
```
