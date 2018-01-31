var myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log("Item <" + task + "> added.");
    return myArray.length;
}
function listAllTasks() {
    //Option 1
    for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
        var item = myArray_1[_i];
        console.log(item);
    }
    //Option 2
    //for(let i = 0; i < myArray.length; i++)
}
function deleteTasks(task) {
    var index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log("Item <" + task + "> deleted.");
    }
    return myArray.length;
}
addTask("Test");
listAllTasks();
deleteTasks("Test");
