function stringSubstring(word, text) {
    let wordLowerCase = word.toLowerCase();
    let textLowerCase = text.split(' ');

    for (const element of textLowerCase) {
        if (element.toLowerCase() === wordLowerCase) {
            return word;
        }
    }

    return `${word} not found!`;
}


console.log(stringSubstring('javascript',
'JavaScript is the best programming language'));
console.log(stringSubstring('python',
'JavaScript is the best programming language'));