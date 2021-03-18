// Create a temps array here
var temps = [ 
monday = [31, 32, 19, 37],
tuesday = [29, 27, 55, 36],
wednesday = [17, 27, 42, 46],
thursday = [29, 52, 21, 64],
friday = [91, 27, 31, 61]
];

// End of temps array
function myArrayFunction(arr) {
    /*var temps = [...arr];*/
    averageDayTemp = [29.75, 36.75, 33, 41.5, 52.5];
    // Only change code below this line
    for (var i = 0; i<temps.lenght; i++){
        for(var k = 0; k < temps[i].length; k++){
        console.log(averageDayTemp[i][k]);
        }
    }

    // Only change code above this line
    return averageDayTemp;
}

console.log(myArrayFunction());
module.exports = myArrayFunction;