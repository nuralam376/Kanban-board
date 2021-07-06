import React from 'react';
import TaskDetails from '../TaskDetails/TaskDetails';

function Tasks({taskState}) {
    const {tasks,loading, error} = taskState;
    
    const onDragStart = (e,taskName) => {
        e.dataTransfer.setData("id",taskName);
    };
    
    const onDragOver = (e) => {
        e.preventDefault();
        console.log("drag Over",e.dataTransfer.getData("id"));
    };

    const onDrop = (e, taskName) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("drop Over", taskName);
    };
    
        return (
        <div>
            {loading && <h1>Loading ....</h1>}
            {tasks.length ? tasks.map(task => 
                    <TaskDetails 
                        key = {task._id} 
                        task={task} 
                        onDragStart = {onDragStart} 
                        onDragOver = {onDragOver}
                        onDrop = {onDrop}
                    /> 
                )
                    : <p>No Tasks</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Tasks
