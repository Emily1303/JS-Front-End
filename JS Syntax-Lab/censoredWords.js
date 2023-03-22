function censoredWords(text, word) {

    let star = '*';

    while (text.includes(word)) {
        text = text.replace(word, star.repeat(word.length));
    }

    console.log(text);
}


censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');