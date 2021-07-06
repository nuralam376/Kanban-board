import React from 'react';
import "./TaskDetails.css";

function TaskDetails({task, onDragStart, onDragOver, onDrop}) {
    const {name} = task;

    return (
        <p 
            className = "taskName" 
            draggable 
            onDragStart = {e => onDragStart(e,name)} 
            onDragOver  = {(e) => onDragOver(e)}
            onDrop = {(e) => onDrop(e, name)}
            >
            {name}
        </p>
    )
}

export default TaskDetails
