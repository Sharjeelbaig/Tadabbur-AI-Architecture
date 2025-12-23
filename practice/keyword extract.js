import natural from "natural";

const tfidf = new natural.TfIdf();
tfidf.addDocument("Blessed is the One in Whose Hands rests all authority. And He is Most Capable of everything");

console.log(tfidf.listTerms(0))