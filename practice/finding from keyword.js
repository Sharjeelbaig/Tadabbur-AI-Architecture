import natural from "natural";
import pixabay from 'pixabay-api'

const tfidf = new natural.TfIdf();
tfidf.addDocument("Blessed is the One in Whose Hands rests all authority. And He is Most Capable of everything");

const keywords = tfidf.listTerms(0).map(item => item.term)?.slice(0,3)

const searchQuery = keywords?.join(' OR ')


pixabay.searchImages('53125201-05f02842e481fc38595bea4c6', {q: `${searchQuery} -woman -girl -female -lady -bride -jesus -mary -christianity`})
    .then(results => {
        console.log(results);
    })
    .catch(err => {
        console.log(err);
    });