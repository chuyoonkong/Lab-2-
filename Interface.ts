export interface myQueue
{
    myArray:Array<string>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTasks(task:string):number;
}