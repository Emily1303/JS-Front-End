function evenAndOdd(array) {

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 === 0) {
            evenSum = evenSum + array[i];
        } else if (array[i] % 2 !== 0) {
            oddSum = oddSum + array[i];
        }
    }

    let diff = evenSum - oddSum;

    console.log(diff);
}


evenAndOdd([1,2,3,4,5,6]);
evenAndOdd([3,5,7,9]);
evenAndOdd([2,4,6,8,10]);