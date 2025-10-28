import ollamaClient from "../clients/ollamaClient";
import extract from 'extract-json-from-string';

export async function generateExplanation(tafseerText) {
    const schema = {
        explanation: "string",
        keyTerms: "{term: string, definition: string}[]",
    };
    const query = `Rephrase the following tafseer in formal and modern language that is suitable for a general audience:${tafseerText}
    Avoid using slang or colloquial expressions. In your explanation,
    you should fetch important points and summarize them clearly. You should also define the key terms of english and Islamic used in the response.
    you have to follow this schema strictly:
    {
        explanation: string,
        keyTerms: {term: string, definition: string}[],
    }
    `;
    
    const response = await ollamaClient.invoke([
        {
            role: "system",
            content: `You are a teacher who explains Quranic tafseer in simple formal language, not too friendly nor too technical. You always respond in JSON format according to the given schema: ${JSON.stringify(schema)}`,
        },
        {
            role: "user",
            content: query,
        },
    ]);

    return extract(response?.content)[0]
}