// Create myPetsArray aray here
myPetsArray = ["Dog", "Cat"];
// Create of myPetsArray array

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    // Only change code below this line
myNewPets.push("Bird", "Fish");
var firstPet = myNewPets.shift();
var lastPet = myNewPets.pop();
myNewPets.unshift("Lion");

return myNewPets;
}
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
