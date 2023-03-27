function revealWords(words, text) {

    let arrayOfWords = words.split(', ');

    for (let i = 0; i < arrayOfWords.length; i++) {
        let currentWord = arrayOfWords[i];

        let stars = '*'.repeat(currentWord.length);
        
        if (text.includes(stars)) {
            text = text.replace(stars, currentWord);
        }
    }

    return text;
}

console.log(revealWords('great',
'softuni is ***** place for learning new programming languages'));

console.log(revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'));