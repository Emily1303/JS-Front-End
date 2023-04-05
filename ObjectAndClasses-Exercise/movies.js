function moviesInfo(input) {

    let moviesArray = [];
    let arrayOfStrings = [];

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i];
        if (currentLine.includes('addMovie')) {
            arrayOfStrings = currentLine.split(' ');
            arrayOfStrings.shift();
            let movieName = arrayOfStrings.join(' ');
            addMovie(movieName);
        } else if (currentLine.includes('directedBy')) {
            arrayOfStrings = currentLine.split(' directedBy ');
            addDirector(arrayOfStrings[0], arrayOfStrings[1]);
        } else {
            arrayOfStrings = currentLine.split(' onDate ');
            onDate(arrayOfStrings[0], arrayOfStrings[1]);
        }
    }

    function addMovie(name) {
        let movieObject = {
            name: name
        };

        moviesArray.push(movieObject);
    }

    function addDirector(name, director) {
        let findNameOne = moviesArray.find(m => m.name === name);
        if (findNameOne) {
            let index = moviesArray.indexOf(findNameOne);
            moviesArray[index].director = director;
        }
    }

    function onDate(name, date) {
        let findNameTwo = moviesArray.find(m => m.name === name);
        if (findNameTwo) {
            let index = moviesArray.indexOf(findNameTwo);
            moviesArray[index].date = date;
        }
    }

    for (const object of moviesArray) {
        if (object.hasOwnProperty('name') && object.hasOwnProperty('director') && object.hasOwnProperty('date')) {
            console.log(JSON.stringify(object));
        }
    }
}


moviesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);

// moviesInfo([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
//     ]);