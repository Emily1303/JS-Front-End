function sortArray(array) {

    return [...array].sort((firstName, secondName) => firstName.localeCompare(secondName))
    .map((name, index) => index + 1 + '.' + name)
    .join('\n');
}

console.log(sortArray(["John", "Bob", "Christina", "Ema"]));