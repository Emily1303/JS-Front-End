function storeProvision(stock, ordered) {
    let wholeProducts = [...stock, ...ordered];

    let productsObject = {};

    for (let i = 0; i < wholeProducts.length; i+=2) {
        let currentProduct = wholeProducts[i];
        let quantity = Number(wholeProducts[i + 1]);

        if (productsObject.hasOwnProperty(currentProduct)) {
            productsObject[currentProduct] += quantity;
        } else {
            productsObject[currentProduct] = quantity;
        }
        
    }

    for (const key in productsObject) {
        console.log(`${key} -> ${productsObject[key]}`);
    }
}


storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]);