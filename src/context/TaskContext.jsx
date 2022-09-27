import { createContext, useEffect, useState } from "react";
import {  tasks as data } from "../data/tasks"

export const TaskContex = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(tasksId) {
    setTasks(tasks.filter((task) => task.id !== tasksId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContex.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContex.Provider>
  );
}
