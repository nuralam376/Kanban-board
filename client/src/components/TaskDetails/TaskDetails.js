import React from 'react';
import "./TaskDetails.css";

function TaskDetails({task, onDragStart, onDragOver, onDrop}) {
    const {_id, name} = task;

    return (
        <p 
            className = "taskName" 
            draggable 
            onDragStart = {e => onDragStart(e,_id)} 
            >
            {name}
        </p>
    )
}

export default TaskDetails
