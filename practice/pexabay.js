const pixabay = require('pixabay-api');

pixabay.searchImages('53125201-05f02842e481fc38595bea4c6', {q: 'landscape OR nature OR architecture -woman -girl -female -lady -bride'})
    .then(results => {
        console.log(results);
    })
    .catch(err => {
        console.log(err);
    });