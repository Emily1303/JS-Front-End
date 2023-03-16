function calculate(typeOfDay, age) {

    let price;
    let isTrue = true;

    if (typeOfDay === 'Weekday') {

        if (age >= 0 && age <= 18) {
            price = 12;
        } else if (age > 18 && age <= 64) {
            price = 18;
        } else if (age > 64 && age <= 122) {
            price = 12;
        } else {
            isTrue = false;
        }

    } else if (typeOfDay === 'Weekend') {

        if (age >= 0 && age <= 18) {
            price = 15;
        } else if (age > 18 && age <= 64) {
            price = 20;
        } else if (age > 64 && age <= 122) {
            price = 15;
        } else {
            isTrue = false;
        }

    } else if (typeOfDay === 'Holiday') {

        if (age >= 0 && age <= 18) {
            price = 5;
        } else if (age > 18 && age <= 64) {
            price = 12;
        } else if (age > 64 && age <= 122) {
            price = 10;
        } else {
            isTrue = false;
        }

    }

    if (isTrue) {
        console.log(`${price}$`);
    } else {
        console.log('Error!');
    }
    
}


calculate('Weekday', 42);
calculate('Holiday', -12);
calculate('Holiday', 15);