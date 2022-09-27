import Tasklis from "./components/Tasklis";
import TaskForm from "./components/TaskForm";


function App() {
 

  return (
    <main className="bg-black h-screen" >
      <div className="container mx-auto p-10">

      <TaskForm/>
      <Tasklis />
      </div>
    </main>
  );
}

export default App;
