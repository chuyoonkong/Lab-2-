"use strict";
exports.__esModule = true;
var myClass = /** @class */ (function () {
    function myClass() {
        this.myArray = [];
    }
    myClass.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log("Item <" + task + "> added.");
        return this.myArray.length;
    };
    myClass.prototype.listAllTasks = function () {
        //Option 1
        for (var _i = 0, _a = this.myArray; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
        //Option 2
        //for(let i = 0; i < myArray.length; i++)
    };
    myClass.prototype.deleteTasks = function (task) {
        var index = this.myArray.indexOf(task);
        if (index > -1) {
            this.myArray.splice(index, 1);
            console.log("Item <" + task + "> deleted.");
        }
        return this.myArray.length;
    };
    return myClass;
}());
var newClass = new myClass();
newClass.addTask("Jam");
newClass.listAllTasks();
newClass.deleteTasks("Jam");
