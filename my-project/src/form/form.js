import React, { useState } from 'react';

const Form = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    let newTask = {
      title: e.target.title.value,
      description: e.target.description.value,
      isPriority: e.target.isPriority.checked,
      isComplete: e.target.isComplete.checked
    };
    setTasks([...tasks, newTask]);
  };

  const filterTasks = (e) => {
    let filteredTasks = tasks.filter((task) => {
      if (e.target.name === 'isPriority' && e.target.checked) {
        return task.isPriority;
      } else if (e.target.name === 'isComplete' && e.target.checked) {
        return task.isComplete;
      } else {
        return true;
      }
    });
    setTasks(filteredTasks);
  };

  return (
    <>
      <h3>Create a new task</h3>
      <form onSubmit={addTask}>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Description:
          <input name="description" />
        </label>
        <label>
          Priority:
          <input type="checkbox" name="isPriority" onChange={filterTasks} />
        </label>
        <label>
          Complete:
          <input type="checkbox" name="isComplete" onChange={filterTasks} />
        </label>
        <input type="submit" value="Add Task" />
      </form>
      <h3>Tasks</h3>
      {tasks.map((task, i) => (
        <div key={i}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Priority: {task.isPriority ? 'Yes' : 'No'}</p>
          <p>Complete: {task.isComplete ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </>
  );
};

export default Form;
