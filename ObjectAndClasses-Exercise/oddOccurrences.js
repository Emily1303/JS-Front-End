function oddOccurrences(input) {

    let arrayInput = input.toLowerCase().split(' ');
    let objectOccurrences = {};

    for (let i = 0; i < arrayInput.length; i++) {
        let currentWord = arrayInput[i];

        if (!objectOccurrences.hasOwnProperty(currentWord)) {
            objectOccurrences[currentWord] = 1;
        } else {
            objectOccurrences[currentWord] += 1;
        }
    }

    let filteredWords = Object.keys(objectOccurrences).filter((key) => objectOccurrences[key] % 2 !== 0).join(' ');
    console.log(filteredWords);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');