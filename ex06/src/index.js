var myArray1 = [
    [2],
    [5, 6, 7],
    [8, 9]
];
var myArray2 = [
    [2.5, 2],
    [0.5, 0.2],
    [8]
];
var myArray3 = [
    [1,2],
    [3, 4, 5, 6],
    [7, 8, 9]
];


function multiplyArrayFunction(myArray) {
    
    // Only change code below this line   
    var arr = [];
    var sum = 0;
    var pro = 1;
    for (var i = 0; i < myArray.length; i++) {
        for (var j = 0; j < myArray[i].length; j++) {
            pro *= myArray[i][j];
            sum += myArray[i][j];
        }
    }
    arr.push(pro);
    arr.push(sum);

    return arr;
}
        // Only change code above this line

console.log(multiplyArrayFunction(myArray1));  // Change this line
console.log(multiplyArrayFunction(myArray2));  // Change this line
console.log(multiplyArrayFunction(myArray3));  // Change this line
module.exports = multiplyArrayFunction;