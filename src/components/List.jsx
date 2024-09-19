import React, { useContext } from 'react';
import Context from "../context/Context";

function List() {
  const { tasks, deleteTask } = useContext(Context); 

  let content;

  if (tasks.length > 0) {
    content = tasks.map((task) => (
      <li key={task.id} className="task-item">
        {task.text}
        <button
          onClick={() => deleteTask(task.id)}
          className="delete-button"
        >
          ❌
        </button>
      </li>
    ));
  } else {
    content = <li>No tasks to show</li>;
  }

  return (
    <div className="card-group">
      <h2>Your Tasks:</h2>
      <ul>
        {content}
      </ul>
    </div>
  );
}

export default List;
