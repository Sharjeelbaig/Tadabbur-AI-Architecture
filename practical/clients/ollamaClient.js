import {ChatOllama} from '@langchain/ollama'
import dotenv from 'dotenv'
dotenv.config()
const ollamaClient = new ChatOllama({
    baseUrl: 'https://ollama.com',
    model: 'gpt-oss:120b-cloud',
    headers: {
        'Authorization': `Bearer ${process.env.OLLAMA_API_KEY}`,
    },
})


export default ollamaClient