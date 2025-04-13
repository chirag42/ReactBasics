import React, {useState} from "react";

function TaskInput({addTask}){
    const [task, setTask] = useState("");
    const handleAddClick = () => {
        if(task.trim()) {
            addTask(task);
            setTask("");
        }
    }

    return <div>
        <input type="text"
               value={task}
               placeholder="Add a new task"
               onChange={(e) => setTask(e.target.value)}
        />
        <br/>
        <button onClick={handleAddClick}>Add Task</button>
        </div>
}


export default TaskInput;