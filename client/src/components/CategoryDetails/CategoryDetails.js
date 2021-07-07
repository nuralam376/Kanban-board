import axios from 'axios';
import React, { useCallback, useContext, useEffect, useReducer } from 'react';
import { NewTaskContext } from '../../App';
import { initialState, taskReducer } from "../reducers/TaskReducer";
import Tasks from '../Tasks/Tasks';
import "./CategoriesDetails.css";

function CategoryDetails({category}) {
    const {_id, name} = category;
    const [taskState, taskDispatch] = useReducer(taskReducer,initialState);
    const {loadTask}= useContext(NewTaskContext);

    const getTasks = useCallback(async() => {
            try
            {
                const response = await axios.get(`/categories/${_id}/tasks`);
                
                if(response.status === 200)
                {
                    taskDispatch({
                        type : "success",
                        payload : response.data
                    });
                }
            }
            catch(err)
            {
                taskDispatch({
                    type : "failure",
                });
            }
    },[_id]);
  

    useEffect(() => {
        getTasks();
    },[_id, getTasks, loadTask]);


    return (
        <div className = "categoryDetails">
            <span className = "categoryName">    
             {name}
            </span>
            <Tasks taskState = {taskState} category = {category}/>
        </div>
    )
}

export default CategoryDetails
