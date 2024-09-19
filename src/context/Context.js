import React, {useState, createContext} from "react";

const Context = createContext();

export function Provider ({children}) {
    const [tasks, setTasks] = useState([]);
    const [id, setId] = useState(1);

    const addTask = (newTask) => {
        const taskWithId = { id: id, text: newTask };
        setTasks([...tasks, taskWithId]);
        setId(id + 1);
      };
    
      const deleteTask = (deletingTaskId) => {
        setTasks(tasks.filter((task) => task.id !== deletingTaskId));
      };

      return (
        <Context.Provider value={{tasks, addTask, deleteTask }} > 
        {children}
        </Context.Provider>
      )
}

export default Context;