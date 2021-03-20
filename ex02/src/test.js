
var tempArray = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
    /*

    for (var i = 0; i < arr.length; i++) {

        newTemps[i] = 0;

        for (var j = 0; j < arr[i].length; j++) {

            newTemps[i] += arr[i][j];

        }

        newTemps[i] /= arr[i].length;

    }

    for (var i = 0; i < newTemps.length; i++) {

        averageDayTemp.push(newTemps[i]);

    }

    */

 

    for (var i = 0; i < 5; i++) {

        newTemps[i] = 0;

        for (var j = 0; j < 4; j++) {

            newTemps[i] += arr[i][j];

        }

        newTemps[i] /= 4;

    }

    for (var i = 0; i < 5; i++) {

        averageDayTemp.push(newTemps[i]);

    }

 

    return averageDayTemp;

}
console.log(myArrayFunction(tempArray));