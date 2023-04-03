function meetings(array) {

    let meetingsMap = {};

    for (const line of array) {
        let [key, value] = line.split(' ');
        
        if (!meetingsMap.hasOwnProperty(key)) {
            meetingsMap[key] = value;
            console.log(`Scheduled for ${key}`);
        } else {
            console.log(`Conflict on ${key}!`);
        }
    }

    for (const key in meetingsMap) {
        console.log(`${key} -> ${meetingsMap[key]}`);
    }
}


meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);