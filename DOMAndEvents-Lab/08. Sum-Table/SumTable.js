function sumTable() {
    const allNumbersToSum = Array.from(document.querySelectorAll('td:nth-child(2)'));
    const sumTd = document.getElementById('sum');

    let sum = Number(allNumbersToSum.pop().textContent);

    for (let i = 0; i < allNumbersToSum.length; i++) {
        let currentNumber = Number(allNumbersToSum[i].textContent);
        sum += currentNumber;
    }

    sumTd.textContent = sum;
}