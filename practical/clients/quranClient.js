import {QuranClient} from '@quranjs/api'
import dotenv from 'dotenv'
dotenv.config()
const quranClient = new QuranClient({
    clientId: process.env.QURAN_API_CLIENT_ID,
    clientSecret: process.env.QURAN_API_CLIENT_SECRET,
})
export default quranClient