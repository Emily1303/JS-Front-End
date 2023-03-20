function countDigits(number) {

    let areSame = true;
    let sum = 0;
    let priviousDigit = 0;

    while (number > 0) {
        let currentDigit = number % 10;

        if (sum === 0) {
            sum += currentDigit;
            priviousDigit = currentDigit;
            number = Math.floor(number / 10);
            continue;
        }

        if (currentDigit === priviousDigit) {
            sum += currentDigit;
            priviousDigit = currentDigit;
            number = Math.floor(number / 10);
        } else if (currentDigit !== priviousDigit) {
            areSame = false;
            sum += currentDigit;
            number = Math.floor(number / 10);
        }
    }

    if (areSame) {
        console.log('true');
    } else {
        console.log('false');
    }

    console.log(sum);
}


countDigits(2222222);
countDigits(1234);