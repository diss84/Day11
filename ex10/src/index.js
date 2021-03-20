// Only change code below this line
function mySplice(arr1, arr2, n) {
  arr2.slice();
  var temp = arr1.reverse();
  for (let i = 0; i < temp.length; i++) {
    arr2.splice(n, 0, temp[i]);
    n++;
  }
  return arr2;
}
mySplice([1, 2, 3], [4, 5], 1);
// Only change code above this line
console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2)); // Change this line
console.log(mySplice([1, 2, 3, 4], [5, 6, 7], 1));
module.exports = mySplice;