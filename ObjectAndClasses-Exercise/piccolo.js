function piccolo(input) {

    let parkingLot = [];

    for (const element of input) {
        let [direction, carNumber] = element.split(', ');
        
        if (direction === 'IN' && !parkingLot.includes(carNumber)) {
            parkingLot.push(carNumber);
        } else if (direction === 'OUT' && parkingLot.includes(carNumber)) {
            let indexOfCar = parkingLot.indexOf(carNumber);
            parkingLot.splice(indexOfCar, 1);
        }
    }

    if (parkingLot.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        parkingLot.sort((numberOne, numberTwo) => numberOne.localeCompare(numberTwo))
                .forEach((number) => console.log(number));
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);