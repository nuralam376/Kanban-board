import React from 'react';
import TaskDetails from '../TaskDetails/TaskDetails';

function Tasks({taskState}) {
    const {tasks,loading, error} = taskState;
        return (
        <div>
            {loading && <h1>Loading ....</h1>}
            {tasks.length ? tasks.map(task => <TaskDetails key = {task._id} task={task}/> ): <p>No Tasks</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Tasks
