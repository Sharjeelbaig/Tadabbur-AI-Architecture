import ollamaClient from "../clients/ollamaClient.js";
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

const exampleTafseer = `This Surah, Al-Fatiha, is the opening chapter of the Quran and holds great significance in Islamic worship and daily life. It is often referred to as "The Opening" because it serves as the prelude to the entire Quranic text. The Surah consists of seven verses that encapsulate the essence of Islamic faith and practice.

The Surah begins with praise for Allah, acknowledging His mercy and sovereignty. It emphasizes the importance of seeking guidance from Allah alone, highlighting the concept of monotheism that is central to Islam. The Surah also underscores the Day of Judgment, reminding believers of accountability for their actions.

In daily prayers, Al-Fatiha is recited multiple times, serving as a reminder of the believer's relationship with Allah and their dependence on His guidance. The Surah's themes of mercy, guidance, and accountability resonate deeply with Muslims, making it a foundational element of Islamic spirituality and worship.`;

const json = await generateExplanation(exampleTafseer)
console.log("Generated Explanation:", json);