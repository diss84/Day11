// Only change code below this line
function myBouncer(arr) {
    var newArr = [];
    for (var i = 0; i < arr.lenght; i++) {
        if ( arr[i] === false) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
    // Only change code above this line
}
console.lenght(myBouncer());
module.exports = myBouncer;