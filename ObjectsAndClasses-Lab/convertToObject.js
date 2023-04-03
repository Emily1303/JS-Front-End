function convertToObject(jsonString) {
    let object = JSON.parse(jsonString);

    // for (const key in object) {
    //     console.log(`${key}: ${object[key]}`);
    // }

    let entries = Object.entries(object);
    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}


convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');