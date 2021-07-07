import axios from 'axios';
import React, { useContext, useState } from 'react';
import { NewTaskContext } from '../../App';
import TaskDetails from '../TaskDetails/TaskDetails';
import "./Tasks.css";

function Tasks({taskState, category}) {
    const {tasks,loading, error} = taskState;
    const {_id} = category;
    const {loadTask, setLoadTask} = useContext(NewTaskContext);
    const [dragStart,setDragStart] = useState(null);
    
    const onDragStart = (e,id) => {
        e.dataTransfer.setData("id",id);
        setDragStart(id);
    };
    
    const onDragOver = (e) => {
        e.preventDefault();
    };

    const updateTask = async(categoryId, taskId) => {
        try
        {
            const response = await axios.put("/tasks",{
                category_id : categoryId,
                task_id : taskId
            });

            if(response.status === 200)
            {
                setLoadTask({
                    loadTask : !loadTask
                });
            }
        }
        catch(err)
        {
            alert("Something went wrong");
        }
        setDragStart(null);
    }; 

    const onDrop = (e, categoryId) => {
        e.stopPropagation();
        e.preventDefault();
        updateTask(categoryId, e.dataTransfer.getData("id"));
    };
    
        return (
        <div className = "droppable"  onDragOver  = {(e) => onDragOver(e)} onDrop = {(e) => onDrop(e, _id)}>
            {loading && <h1>Loading ....</h1>}
            {tasks.length ? tasks.map(task => 
                    <TaskDetails 
                        key = {task._id} 
                        task={task} 
                        onDragStart = {onDragStart} 
                        onDragOver = {onDragOver}
                        onDrop = {onDrop}
                        dragStart = {dragStart}
                    /> 
                )
                    : <p>No Tasks</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Tasks
