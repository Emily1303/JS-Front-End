function employees(input) {
    // for (const element of input) {
    //     let employee = {};
    //     employee[element] = element.length;

    //     console.log(`Name: ${element} -- Personal Number: ${employee[element]}`);
    // }

    let employeesMap = input.reduce((data, currentValue) => {
        data[currentValue] = currentValue.length;
        return data;
    }, {})

    for (const key in employeesMap) {
        console.log(`Name: ${key} -- Personal Number: ${employeesMap[key]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);