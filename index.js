// Code your solution in this file.
function lowerCaseDrivers(drivers){
    const lowerCased = drivers.map(function(driver){return driver.toLowerCase()});
    return lowerCased;
}

function nameToAttributes(drivers){
    const nameToAtt = drivers.map(function(driver){
        let driverSplit = driver.split(" ");
        let driverFirstName = driverSplit[0];
        let driverLastName = driverSplit[1];
        return {firstName: driverFirstName, lastName: driverLastName}});
    return nameToAtt;
}

function attributesToPhrase(drivers){
    const phrase = drivers.map(function(driver){
        return `${driver.name} is from ${driver.hometown}`});
    return phrase;
}