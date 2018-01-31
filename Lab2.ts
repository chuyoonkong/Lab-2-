let myArray:Array<string> = [];

function addTask(task:string):number
{
    myArray.push(task);
    console.log("Item <" + task + "> added.");
    
    return myArray.length;
}

function listAllTasks()
{
    //Option 1
    for(let item of myArray)
    {
        console.log(item);
    }

    //Option 2
    //for(let i = 0; i < myArray.length; i++)
}

function deleteTasks(task:string):number
{
    let index : number = myArray.indexOf(task);
    
    if(index > -1)
    {
        myArray.splice(index, 1);
        console.log("Item <" + task + "> deleted.");

    }

    return myArray.length;
}

addTask("Test");

listAllTasks();
deleteTasks("Test");