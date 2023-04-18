function calc() {

    const firstNumber = document.getElementById('num1');
    const secondNumber = document.getElementById('num2');
    const sum = document.getElementById('sum');

    let firstNumValue = Number(firstNumber.value);
    let secondNumValue = Number(secondNumber.value);

    sum.value = firstNumValue + secondNumValue;
}
