function radar(speed, area) {

    let withinLimits = false;
    let limit = 0;
    let diff = 0;
    let status = '';

    if (area === 'motorway') {

        limit = 130;
        if (speed <= 130) {
            withinLimits = true;
        } else {
            diff = speed - limit;
        }
        
    } else if (area === 'interstate') {
        
        limit = 90;
        if (speed <= 90) {
            withinLimits = true;
        } else {
            diff = speed - limit;
        }

    } else if (area === 'city') {

        limit = 50;
        if (speed <= 50) {
            withinLimits = true;
        } else {
            diff = speed - limit;
        }

    } else if (area === 'residential') {
        
        limit = 20;
        if (speed <= 20) {
            withinLimits = true;
        } else {
            diff = speed - limit;
        }

    }

    if (diff <= 20) {
        status = 'speeding';
    } else if (diff <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }


    if (withinLimits) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}


radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');