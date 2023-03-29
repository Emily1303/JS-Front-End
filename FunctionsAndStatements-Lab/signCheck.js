function signCheck(...numbers) {
    return numbers.filter((element) => element < 0)
            .length % 2 === 0 ? 'Positive' : 'Negative';

    // let countNegativeNumbers = 0;
    
    // for (let i = 0; i < numbers.length; i++) {

    //     if (numbers[i] < 0) {
    //         countNegativeNumbers++;
    //     }

    //     if (i === numbers.length - 1 && countNegativeNumbers % 2 === 0) {
    //         return 'Positive';
    //     } else if (i === numbers.length - 1 && countNegativeNumbers % 2 !== 0) {
    //         return 'Negative';
    //     }
    // }
}

console.log(signCheck( 5,12,-15));
console.log(signCheck(-6,-12,14));
console.log(signCheck(-1,-2,-3));
console.log(signCheck(-5,1,1));