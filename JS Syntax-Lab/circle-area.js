function checkType(input) {

    let result;

    if (typeof input === 'number') {
        result = Math.PI * input * input;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}

checkType(5);
checkType('name');