function formatGrade(grade) {
    if (grade >= 5.50) {
        return `Excellent (${formatGrade()})`;
    } else if (grade < 5.50 && grade >= 4.50) {
        return `Very good (${formatGrade()})`;
    } else if (grade < 4.50 && grade >= 3.50) {
        return `Good (${formatGrade()})`;
    } else if (grade < 3.50 && grade > 3.00) {
        return `Poor (${formatGrade()})`;
    }

    return 'Fail (2)';

    function formatGrade() {
        return `${grade.toFixed(2)}`;
    }
}


console.log(formatGrade(3.33));

console.log(formatGrade(4.50));

console.log(formatGrade(2.90));