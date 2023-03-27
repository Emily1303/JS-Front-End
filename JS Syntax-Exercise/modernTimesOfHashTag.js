function modernTimes(text) {

    let array = text.split(' ');

    for (let i = 0; i < array.length; i++) {
        let originalWord = array[i];
        let currentWord = array[i].toLowerCase();

        if (currentWord.startsWith('#') && currentWord.length > 1 && checkWords(currentWord)) {
            console.log(originalWord.substring(1, originalWord.length));
        }
    }

    function checkWords(currentWord) {
        let newWord = currentWord.substring(1, currentWord.length);

        for (let i = 0; i < newWord.length; i++) {
            
            let currentSymbol = newWord.charCodeAt(i);

            if (currentSymbol >= 97 && currentSymbol <= 122) {
                return true;
            } else {
                return false;
            }
        }
    }
}


modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');