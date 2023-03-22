function reverseArray(number, array) {
    let newArray = array.splice(0, number);
    newArray = newArray.reverse();

    console.log(newArray.join(' '));
}


reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);