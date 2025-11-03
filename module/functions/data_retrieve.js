import quranClient from '../clients/quranClient'

export async function retrieveSurah(surahId, translation_id) {
    const surah = await quranClient?.verses?.findByChapter(surahId, {
        words: true,
        translations: [translation_id],
        wordFields: ['text_uthmani'],
        per_page: 300,
        page: 1
    })
    const verses = surah?.map(data => {
    const translation = data?.translations?.map(translation => translation?.text)[0]
    const words = data?.words?.map(words => words?.textUthmani) 
    const word_audios = data?.words?.map(words => 'https://audio.qurancdn.com/'+words?.audioUrl)?.slice(0, -1)
    const verse = data?.words?.map(words => words?.textUthmani)?.join(' ')
    const key = data?.verseKey
    return (
        {
        verse,
        translation,
        words,
        word_audios,
        key
        }
    )
})
    return verses
}

export async function retrieveTafseer(surahId, tafsirId) {
    const tafseer_data = await fetch(`https://api.quran.com/api/v4/tafsirs/${tafsirId}/by_chapter/${surahId}?per_page=300&page=1`)
    const tafseer = await tafseer_data.json()
    return tafseer;
}

export async function retrieveRecitation(chapterId, reciterId) {
    const recitation = await quranClient?.audio?.findVerseRecitationsByChapter(chapterId, reciterId, {
        per_page: 300,
        page: 1
    });
    const audioFiles = recitation?.audioFiles?.map(verse => {
        const verseKey = verse?.verseKey;
        const audioUrl = 'https://audio.qurancdn.com/' + verse?.url;
        return { verseKey, audioUrl };
    })
    return audioFiles;
}

