function arrayRotation(array, rotations) {
    let wholeRotations = rotations % array.length;

    for (let i = 0; i < wholeRotations; i++) {
        let currentNumber = array.shift();
        array.push(currentNumber);
    }

    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
