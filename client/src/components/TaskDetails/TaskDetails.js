import React from 'react';
import "./TaskDetails.css";

function TaskDetails({task}) {
    const {name} = task;
    return (
        <p className = "taskName">
            {name}
        </p>
    )
}

export default TaskDetails
