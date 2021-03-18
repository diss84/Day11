// Create a monitorListArray array here
var monitorListArray = ["Apple", "Peach", "Berry"];
// End of monitorListArray array
function myMonitorsFunction(arr) {
    var newMonitorList = [...arr];
    // Only change code below this line
    var monitorList = [];
    var count = 0;

    for ( var i of monitorListArray) {count++; monitorList.push([i, count]); 
            
    }
    return monitorList;
    // Only change code above this line  
}
console.log(myMonitorsFunction(monitorListArray));
module.exports = myMonitorsFunction;