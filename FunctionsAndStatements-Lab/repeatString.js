function repeatString(string, number) {
    // return string.repeat(number);

    let output = '';
    for (let i = 1; i <= number; i++) {
        output += string;
    }

    return output;
}


console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));