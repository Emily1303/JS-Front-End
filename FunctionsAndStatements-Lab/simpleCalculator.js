function simpleCalculator(numOne, numTwo, operator) {
    const add = (numOne, numTwo) => numOne + numTwo;
    const subtract = (numOne, numTwo) => numOne - numTwo;
    const multiply = (numOne, numTwo) => numOne * numTwo;
    const divide = (numOne, numTwo) => numOne / numTwo;

    switch(operator) {
        case 'add':
            return add(numOne, numTwo);
        case 'subtract':
            return subtract(numOne, numTwo);
        case 'multiply':
            return multiply(numOne, numTwo);
        case 'divide':
            return divide(numOne, numTwo);
    }
}

console.log(simpleCalculator(5,5,'multiply'));
console.log(simpleCalculator(40,8,'divide'));
console.log(simpleCalculator(12,19,'add'));
console.log(simpleCalculator(50,13,'subtract'));