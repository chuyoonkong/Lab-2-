import {myQueue} from "./Interface";

class myClass implements myQueue
{
        myArray:Array<string> = [];

    addTask(task:string):number
    {
        this.myArray.push(task);
        console.log("Item <" + task + "> added.");
        
        return this.myArray.length;
    }

    listAllTasks()
    {
        //Option 1
        for(let item of this.myArray)
        {
            console.log(item);
        }

        //Option 2
        //for(let i = 0; i < myArray.length; i++)
    }

    deleteTasks(task:string):number
    {
        let index : number = this.myArray.indexOf(task);
        
        if(index > -1)
        {
        this.myArray.splice(index, 1);
            console.log("Item <" + task + "> deleted.");

        }

        return this.myArray.length;
    }
}

let newClass = new myClass();
newClass.addTask("Jam");
newClass.listAllTasks();
newClass.deleteTasks("Jam");