function pascalCaseSplitter(text) {

    let output = '';
    let textArray = text.split('');

    for (let i = 0; i < textArray.length; i++) {
        let currentSymbol = text.charCodeAt(i);
        let letter = textArray[i];

        if (currentSymbol >= 65 && currentSymbol <= 90) {
            if (output.length === 0) {
                output = output + letter;
            } else {
                output = output + ', ';
                output = output + letter;
            }

        } else {
            output = output + letter;
        }
    }

    return output;
}


console.log(pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'));
console.log(pascalCaseSplitter('HoldTheDoor'));
console.log(pascalCaseSplitter('ThisIsSoAnnoyingToDo'));