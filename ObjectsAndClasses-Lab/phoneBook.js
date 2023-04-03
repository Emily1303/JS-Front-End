function phoneBook(array) {

    let phoneBookMap = {};

    for (const line of array) {
        let [key, value] = line.split(' ');
        phoneBookMap[key] = value;
    }

    for (const key in phoneBookMap) {
        console.log(`${key} -> ${phoneBookMap[key]}`);
    }

    // let entries = Object.entries(phoneBookMap);
    // for (const [key, value] of entries) {
    //     console.log(`${key} -> ${value}`);
    // }
}


phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']);