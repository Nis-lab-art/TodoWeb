import React from "react";
import { ITask } from "../../../types/tasks";
import Task from "./Task";

interface TodoListProps {
    tasks: ITask[]
}

const TaskList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="grid grid-cols-2 gap-y-1">
            {tasks.map(( task ) => (
                <div key={task.id} className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body">
                        <h2 className={`card-title w-full text-base capitalize font-medium ${task.done ? "line-through" : ""}`}>{task.task}</h2>
                        <div className="card-actions justify-end">
                            <Task task={task}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default TaskList;