function sortingNumbers(array) {
    array.sort((num1, num2) => num1 - num2);

    let result = [];
    while (array.length > 0) {
        let firstNumber = array.shift();
        result.push(firstNumber);

        let lastNumber = array.pop();
        result.push(lastNumber);
    }

    return result;
}


console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));