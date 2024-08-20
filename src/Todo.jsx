import { useState } from "react";
import './Todo.css';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index) {
        const updatedTasks =tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            const [removedTask] = updatedTasks.splice(index, 1);
            updatedTasks.splice(index - 1, 0, removedTask);
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            const [removedTask] = updatedTasks.splice(index, 1);
            updatedTasks.splice(index + 1, 0, removedTask);
            setTasks(updatedTasks);
        }
    }

    return (
        <div>
            <h1>Tennivaló</h1>
            <input
                className="todo-input"
                type="text"
                value={newTask}
                placeholder="tennivaló"
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}
            className="add-button">Hozzáadása</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        
                        <span className="task-text">{task}</span>

                        <button onClick={() => deleteTask(index)}
                        className="delete-button"                    
                        >🗑</button>
                        <button onClick={() => moveTaskUp(index)}
                        className="move-button">↑</button>
                        <button onClick={() => moveTaskDown(index)}
                        className="move-button">↓</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo
