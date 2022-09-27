import { useContext } from "react";
import { TaskContex } from "../context/TaskContext";

function TasksCard({ task }) {
  const { deleteTask } = useContext(TaskContex);

  return (
    <div className="bg-gray-800 text-neutral-300 p-4 rounded-md">
      <h1 className="text-x1 font-bold capitalize"> {task.title}</h1>
      <p className="text-sm">{task.description}</p>
      <button
        className="bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-500"
        onClick={() => deleteTask(task.id)}
      >
        eliminar
      </button>
    </div>
  );
}

export default TasksCard;
