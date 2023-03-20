function calculatePrice(fruit, grams, pricePerKilo) {

    let kilos = grams / 1000;
    let totalPrice = kilos * pricePerKilo;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`)
}


calculatePrice('orange', 2500, 1.80);
calculatePrice('apple', 1563, 2.35);