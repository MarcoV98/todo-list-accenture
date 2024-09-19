import React, { useState, useContext } from "react";
import Context from "../context/Context";

function Form() {
  const [newTask, setNewTask] = useState("");
  const {addTask} = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="input-group__input" className="input-group__label">
            Add your task here:
          </label>
          <input
            id="input-group__input"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New task here..."
          />
          <p className="input-group__help">
            You can put you task here and you'll see it below.
          </p>
        </div>
        <button type="submit" className="button">
          <span className="button__body">Add task</span>{" "}
          <span className="button__append">➕</span>
        </button>
      </form>
    </div>
  );
}

export default Form;
