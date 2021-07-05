import './App.css';
import Categories from "./components/Categories/Categories";
import TaskForm from "./components/TaskForm/TaskForm";

function App() {
  return (
    <div className="App">
      <TaskForm />
      <Categories />
    </div>
  );
}

export default App;
