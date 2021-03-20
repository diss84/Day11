// Only change code below this line
function myMutation(arr) {

    arr[0] = arr[0].toLowerCase().split("");
    arr[1] = arr[1].toLowerCase().split("");
    
    for (let i = 0; i < arr[1].length; i++) {
        if (arr[0].indexOf(arr[1][i]) == -1) {
            return false;
        }
    }
    return true;
}
// Only change code above this line
console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Marry", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;