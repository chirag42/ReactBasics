import React from "react";

function TaskItem({task, index, toggleTaskCompletion, deleteTask}){
    return (<li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
        <button style={{ marginLeft: "10px" }} onClick={() => deleteTask(index)}>Delete</button>
        <br></br>
    </li>);

}

export default TaskItem;