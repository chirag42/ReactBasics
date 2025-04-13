import React, {useEffect, useState} from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function TaskRender() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((tasks) => [...tasks, { text: task, completed: false }]);
    };
    useEffect(() => {
        console.log("Updated tasks:", tasks);
    }, [tasks]);

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };



    return (
        <div>
            <h1>To-Do List</h1>
            <TaskInput addTask={addTask} />
            <TaskList tasks={tasks}
                      deleteTask={deleteTask}
                      toggleTaskCompletion={toggleTaskCompletion}/>
            {/*<TaskList*/}
            {/*    tasks={tasks}*/}
            {/*    deleteTask={deleteTask}*/}
            {/*    toggleTaskCompletion={toggleTaskCompletion}*/}
            {/*/>*/}
        </div>
    );
}

export default TaskRender;

