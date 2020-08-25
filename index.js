// Code your solution in this file.
function lowerCaseDrivers(array) {
    return array.map(function (name) {return name.toLowerCase();});
}

function nameToAttributes(array) {
    return array.map(function (name) {
        let names = name.split(" ")
        return {firstName: names[0], lastName: names[1]}
    })
}

function attributesToPhrase(array) {
    return array.map(function (obj) {
        return `${obj.name} is from ${obj.hometown}`
    })
}