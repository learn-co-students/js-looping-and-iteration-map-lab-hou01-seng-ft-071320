// Code your solution in this file.

// const array = ['DANIEL', 'VICTORIA']
// const array = ['Daniel Cole', 'Victoria Gordon']

const lowerCaseDrivers = function(array) {
    return array.map(function(driver){
        return driver.toLowerCase()
    });
};

// console.log(lowerCaseDrivers(array))

const nameToAttributes = function(array) {
    return array.map(function(driver){
        let splitNames = driver.split(' ');
        let first = splitNames[0];
        let last = splitNames[1];
        return { firstName: first, lastName: last }
    });
};

// console.log(nameToAttributes(array))

const attributesToPhrase = function(array) {
    return array.map(function(driver){
        return `${driver.name} is from ${driver.hometown}`
    });
};