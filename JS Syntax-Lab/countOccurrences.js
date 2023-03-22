function countOccurrences(text, word) {

    let count = 0;

    let array = text.split(' ');
    for (const item of array) {
        if (item === word) {
            count++;
        }        
    }

    console.log(count);
}


countOccurrences('This is a word and it also is a sentence', 'is');
countOccurrences('softuni is great place for learning new programming languages', 'softuni');