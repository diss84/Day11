// Only change code below this line 
function largestNumFromArray(arr) {

    var maxNumArray = [...arr];
    for (var i = 0; i < arr.length; i++) {
        maxNumArray[i] = arr[i][0];
        for (var j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > maxNumArray[i]) {
                maxNumArray[i] = arr[i][j];
            }
        }
    }

    return maxNumArray;
}
// Only change code above this line

console.log(largestNumFromArray([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));  // Change this line
console.log(largestNumFromArray([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));  // Change this line
console.log(largestNumFromArray([[17 ,23, 25, 12], [25, 7, 34, 48], [4, 10, 18, 21], [72, 3, 17,10]]));  // Change this line

module.exports = largestNumFromArray;