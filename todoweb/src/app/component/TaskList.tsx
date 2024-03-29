import React from "react";
import { ITask } from "../../../types/tasks";
import Task from "./Task";

interface TodoListProps {
    tasks: ITask[]
}

const TaskList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
            <thead>
                <tr>
                    <td>Tasks</td>
                    <td>Actions</td>
                </tr>
            </thead>
                <tbody>
                {tasks.map((task) => (
                    <Task key={task.id} task={task}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default TaskList;