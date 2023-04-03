function convertToJSON(name, lastName, hairColor) {

    let object = {
        name, 
        lastName, 
        hairColor
    };

    let jsonString = JSON.stringify(object);
    console.log(jsonString);
}

convertToJSON('George', 'Jones', 'Brown');

convertToJSON('Peter', 'Smith', 'Blond');