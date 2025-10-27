import {quranClient} from '../clients/quranClient.js'

export async function listSurahs(){
    const surahs = await quranClient?.chapters?.findAll()
    return surahs
}

export async function listTranslations() {
    const translations = await quranClient?.resources?.findAllTranslations();
    return translations;
}

export async function listTafseers() {
    const tafseers = await quranClient?.resources?.findAllTafsirs()
    return tafseers
}

export async function listReciters() {
    const reciters = await quranClient?.resources?.findAllRecitations()
    return reciters
}