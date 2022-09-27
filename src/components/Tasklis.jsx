import TasksCard from "./TasksCard";
import { useContext } from "react";
import { TaskContex } from "../context/TaskContext";



function Tasklis() {


  const {tasks} = useContext(TaskContex);


  if (tasks.length === 0) {
    return <h1 className="text-x1 font-bold capitalize text-white">no hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 ">
      {tasks.map((task) => (
        
         <TasksCard key={task.id} task= {task}/> 
        
      ))}
    </div>
  );
}

export default Tasklis;
