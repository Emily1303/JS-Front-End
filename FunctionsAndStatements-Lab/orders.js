function orders(product, quantity) {

    let price = 0;

    switch (product) {
        case 'coffee':
            price = quantity * 1.50;
            break;
        case 'coke':
            price = quantity * 1.40;
            break;
        case 'water':
            price = quantity * 1.00;
            break;
        case 'snacks':
            price = quantity * 2.00;
            break;
    }

    return price.toFixed(2);
}


console.log(orders("water", 5));
console.log(orders("coffee", 2));