import { useState,useContext } from "react";
import { TaskContex } from "../context/TaskContext";


function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask}= useContext(TaskContex)
  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ title: title, description: description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      
    <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit} >
      <h1 className="text-2xl mb-3 text-teal-50" >Crea tu tarea </h1>
      <input
        placeholder="escribe tu tarea "
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2 placeholder-black"
        />
      <textarea
        placeholder="pon la descricion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-slate-300 p-3 w-full mb-2  placeholder-black"
        />

      <button className="bg-lime-500 px-2 py-1 rounded-md mt-4 hover:bg-lime-400 text-white "
      
      >Guardar</button>
    </form>
        </div>
  );
}

export default TaskForm;
 