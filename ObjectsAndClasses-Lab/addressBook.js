function addressBook(array) {

    let addressBookMap = {};

    for (const line of array) {
        let [key, value] = line.split(':');
        addressBookMap[key] = value;
    }

    let keys = Object.keys(addressBookMap);
    let sortedArray = keys.sort((nameOne, nameTwo) => nameOne.localeCompare(nameTwo));

    sortedArray.forEach(key => console.log(`${key} -> ${addressBookMap[key]}`));
}


addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);