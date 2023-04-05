function wordTracker(input) {

    let wordsObject = {};
    let givenWords = input.shift().split(' ');

    for (const word of givenWords) {
        wordsObject[word] = 0;

        for (let i = 0; i < input.length; i++) {
            let currentWord = input[i];
    
            if (currentWord === word) {
                wordsObject[word] += 1;
            }
        }
    }

    let entries = Object.entries(wordsObject).sort(([_keyA, valueA], [_keyB, valueB]) => 
                valueB - valueA).forEach(([key, value]) => console.log(`${key} - ${value}`));
}

wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);

wordTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);