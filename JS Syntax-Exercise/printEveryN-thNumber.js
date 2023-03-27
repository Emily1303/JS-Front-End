function printNumbers(array, number) {

    let newArray = [];

    for (let i = 0; i < array.length; i += number) {
        let currentElement = array[i];
        newArray.push(currentElement);
    }

    return newArray;
}


console.log(printNumbers(['5', '20', '31', '4', '20'], 2));
console.log(printNumbers(['dsa','asd', 'test', 'tset'], 2));
console.log(printNumbers(['1', '2','3', '4', '5'], 6));