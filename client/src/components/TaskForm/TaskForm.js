import React from 'react';
import "./TaskForm.css";

function TaskForm() {
    return (
        <div className = "task-form">
                <input type="text" placeholder = "Write your task..." id = "task-text"/>
                <button type = "button" className = "form-button">Add</button>
        </div>
    )
}

export default TaskForm
