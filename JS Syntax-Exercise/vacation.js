function calculatePrice(people, typeOfPeople, dayOfWeek) {

    let price = 0;

    if (typeOfPeople === 'Students') {

        if (dayOfWeek === 'Friday') {
            price = 8.45 * people;
        } else if (dayOfWeek === 'Saturday') {
            price = 9.80 * people;
        } else if (dayOfWeek === 'Sunday') {
            price = 10.46 * people;
        }

    } else if (typeOfPeople === 'Business') {

        if (dayOfWeek === 'Friday') {
            price = 10.90 * people;
        } else if (dayOfWeek === 'Saturday') {
            price = 15.60 * people;
        } else if (dayOfWeek === 'Sunday') {
            price = 16 * people;
        }

    } else if (typeOfPeople === 'Regular') {

        if (dayOfWeek === 'Friday') {
            price = 15 * people;
        } else if (dayOfWeek === 'Saturday') {
            price = 20 * people;
        } else if (dayOfWeek === 'Sunday') {
            price = 22.50 * people;
        }

    }


    if (typeOfPeople === 'Students' && people >= 30) {
        price = price - price * 0.15;
    } else if (typeOfPeople === 'Business' && people >= 100) {

        if (dayOfWeek === 'Friday') {
            price = price - 10 * 10.90;
        } else if (dayOfWeek === 'Saturday') {
            price = price - 10 * 15.60;
        } else if (dayOfWeek === 'Sunday') {
            price = price - 10 * 16;
        }

    } else if (typeOfPeople === 'Regular' && people >= 10 && people <= 20) {
        price = price - price * 0.05;
    }


    console.log(`Total price: ${price.toFixed(2)}`);
}


calculatePrice(30, "Students", "Sunday");
calculatePrice(40, "Regular", "Saturday");