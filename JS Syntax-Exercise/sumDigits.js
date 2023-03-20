function sumDigits(number) {

    let currentDigit = 0;
    let sum = 0;

    while (number > 0) {
        currentDigit = number % 10;
        sum = sum + currentDigit;
        number = Math.floor(number / 10);
    }

    console.log(sum);
}


sumDigits(245678);
sumDigits(97561);
sumDigits(543);