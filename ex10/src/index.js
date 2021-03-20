// Only change code below this line
function mySplice(arr1, arr2, n) {
    let combinedArrays = arr2.slice();
    var temp = arr1.reverse();
    for (let i = 0; i < temp.length; i++) {
      combinedArrays.splice(n, 0, temp[i]);
      n++;
    }
    return combinedArrays;
  }
  mySplice([1, 2, 3], [4, 5], 1);
  // Only change code above this line
  console.log(mySplice([1, 2, 3], [4, 5], 1));
  console.log(mySplice([1, 2, 3], [4, 5], 2));
  console.log(mySplice(["b", "c"], ["a", "d"], 1));
  console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2)); // Change this line
  module.exports = mySplice;