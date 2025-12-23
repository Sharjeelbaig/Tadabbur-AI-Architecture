# Feature plan
Feature we are implementing is "Tadabbur Point".
### Objective
To give a slides view of Quranic verses with pexabay images as background to help users reflect on the meanings of the verses. The slides include a verse, its translation, and some points based on what has been explained in the tafseer and how it relates to the verse.
### Layers Used
1 - Keyword Extraction Layer ( Needed to be added )
2 - Data Retrieval Layer ( Needed to be modified )
#### 1. **Keyword Extraction Layer**: Extract keywords from the verse using TF-IDF technique.

This layer will process the verse text and identify the most significant words that represent the core meaning of the verse.
It will be in `./module/functions/keyword_extraction.py`.
The code snippet below demonstrates how to use TF-IDF for keyword extraction:
```javascript
import natural from "natural";

const tfidf = new natural.TfIdf();
tfidf.addDocument("Blessed is the One in Whose Hands rests all authority. And He is Most Capable of everything");

console.log(tfidf.listTerms(0));
```
See we are using `natural` library for TF-IDF, then initializing a TF-IDF object, adding a document (the verse), and listing the terms with their TF-IDF scores. 

*simple functions from natural object:*

`.TfIdf()` - to create a TF-IDF object

*simple functions from tfidf object:*

`.addDocument(text)` - to add a document (verse) to the TF-IDF model

`.listTerms(docIndex)` - to list terms with their TF-IDF scores for a specific document index

The output of `listTerms(0)` will give us an array of objects containing `term`, `tf`, `idf`, and `tfidf` properties.
We just need to extract the top N terms based on their TF-IDF scores to use as keywords for image retrieval.

#### 2. **Data Retrieval Layer**: Fetch images from Pixabay based on extracted keywords.
We have to extend the existing data retrieval layer to include a new function that interacts with the Pixabay, we need to add a function `fetchImagesByKeywords(keywordsArray)` that takes an array of keywords and retrieves relevant images from Pixabay.


### Clients
- `./module/clients/pexabayClient.js`: Client to interact with Pixabay API for image retrieval based on keywords.