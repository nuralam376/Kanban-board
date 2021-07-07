import React from 'react';
import "./TaskDetails.css";

function TaskDetails({task, onDragStart, onDragOver, onDrop, dragStart}) {
    const {_id, name} = task;

    return (
        <p 
            className = {`taskName ${dragStart === _id ? 'draggable' : ''}`}
            draggable 
            onDragStart = {e => onDragStart(e,_id)} 
            >
            {name}
        </p>
    )
}

export default TaskDetails
