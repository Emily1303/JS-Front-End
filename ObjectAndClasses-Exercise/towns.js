function townParser(input) {
    for (const element of input) {
        let [town, latitude, longitude] = element.split(' | ');
        let townObject = {
            town, 
            latitude: Number(latitude).toFixed(2), 
            longitude: Number(longitude).toFixed(2)
        };

        console.log(townObject);
    }
}

townParser(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);

townParser(['Plovdiv | 136.45 | 812.575']);