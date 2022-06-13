const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];




//***MAP***
//1. Get array of all names
const names = characters.map(character => {
    return character.name;
})
console.log(names);
//2. Get array of all heights
const height = characters.map((character) => character.height);
console.log(height);
//3. Get array of objects with just name and height properties
const minifiedRecords = characters.map((character) => ({
    name: character.name,
    height: character.height,
}));
console.log(minifiedRecords);
//4. Get array of all first names - (.split is splitting based on the space) and [0] which is the first in the array.
const firstNames = characters.map((character) => character.name.split(' ')[0]);
console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.mass;
}, 0)
console.log(totalMass);
//2. Get total height of all characters
const totalHeight = characters.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.height;
}, 0)
console.log(totalHeight)
//3. Get total number of characters by eye color - becomes OBJECT OR MAP
const totalEyeColour = characters.reduce((accumulator, currentValue) => { 
    const color = currentValue.eye_color;
    if (accumulator[color]){
        accumulator[color] ++;
    } else { accumulator[color] = 1;}
    return accumulator;
},{} );
console.log(totalEyeColour)
//4. Get total number of characters in all the character names
const totalCharacterNames = characters.reduce((accumulator, currentValue) => 
    accumulator + currentValue.name.length, 0);
console.log(totalCharacterNames);

// const characterNameTotal = characters.reduce((accumulator, currentValue) => {
//     const character = currentValue.name;
//     if (accumulator[character]){
//         accumulator[character] ++;
//     }
//         else {
//             accumulator[character] = 1;}
//         return accumulator;
//     },{} );
// console.log(characterNameTotal)



//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
