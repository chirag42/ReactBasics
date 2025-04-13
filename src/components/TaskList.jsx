import React from "react";
import TaskItem from "./TaskItem";

function TaskList({tasks,  deleteTask, toggleTaskCompletion }){

    return (<ul>
        {tasks.map((task, index) => (
            <TaskItem
                key={index}
                task={task}
                index={index}
                deleteTask={deleteTask}
                toggleTaskCompletion={toggleTaskCompletion}
            />
        ))}
    </ul>);
}

export default TaskList;