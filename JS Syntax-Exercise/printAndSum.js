function sum(num1, num2) {

    let sum = 0;
    let output = '';

    for (let i = num1; i <= num2; i++) {
        sum = sum + i;
        output += i + ' ';
    }

    console.log(output);
    console.log(`Sum: ${sum}`);
}


sum(5, 10);
sum(0, 26);
sum(50, 60);