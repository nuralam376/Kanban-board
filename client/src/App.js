import { createContext, useState } from 'react';
import './App.css';
import Categories from "./components/Categories/Categories";
import TaskForm from "./components/TaskForm/TaskForm";

export const NewTaskContext = createContext();

function App() {
  const [loadTask,setLoadTask] = useState(false);
  
  return (
    <div className="App">
      <NewTaskContext.Provider value = {{loadTask,setLoadTask}}>  
        <TaskForm />
        <Categories />
      </NewTaskContext.Provider>
    </div>
  );
}

export default App;
