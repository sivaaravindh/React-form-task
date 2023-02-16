import React, { useState } from 'react';
import "./Form.css";
 //import Child from "./child";
const Form = () => {
  const [tasks, setTasks] = useState([]);
  const [prioritys, setPriority] = useState("");
  const [completion, setCompletion] = useState("");

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
  const priorityTasks = tasks.filter(task => task.isPriority===true);
  const completeTasks = tasks.filter(task => task.isComplete===true);

  
  // let priorityTasks = tasks.filter((value) => {
  //   return value.isPriority === true;
  // });
  // let completeTasks = tasks.filter((value) => {
  //   return value.isComplete === true;
  // })
  
  const Uptade = (e) => {
    if (e.target.name === "isPrioritys" && e.target.checked ){
      tasks[0].isPriority=true
    }
    setTasks([...tasks]);
  }

  const handleInput = (ev) => {
  if (ev.target.name === "isPrioritys") {
      setPriority(ev.target.checked);
    } else {
      setCompletion(ev.target.checked);
    }
 };

  // const filterTasks = (e) => {
  //   let filteredTasks = tasks.filter((task) => {
  //     if (e.target.name === 'isPriority' && e.target.checked) {
  //       return task.isPriority;
  //     } else if (e.target.name === 'isComplete' && e.target.checked) {
  //       return task.isComplete;
  //     } else {
  //       return true;
  //     }
  //   });
  //   setTasks(filteredTasks);
  // };

  const Delete = (i) => {
    tasks.splice(i,1);
    setTasks([...tasks]);
  };
  
  return (
    <>
    <div class="container">
      <div class="content">
      <h2 className='title'>Create a new task</h2>
      <form onSubmit={addTask}>
      <div className='h-row'>
        <div className='h-col-1'>
            <label class="lable">
              Title:
            </label>
        </div>
        <div className='h-col-2' >
        <input type="text" name="title" className='input' />
        </div>
        <div className='h-col-1'>
        <label class="lable">
          Description:
        </label>
        </div>
        <div className='h-col-2'>
        <input name="description" className='input'/>
        </div> 
        <div className='h-col-1'>
        <label class="lable">
          Priority:
        </label>
        </div>
        <div className='h-col-2'>
          {/* <input type="checkbox" name="isPriority" onChange={filterTasks} /> */}
          <input type="checkbox" name="isPriority"  />
        </div>
     
        <div className='h-col-1'>
        <label class="lable">
          Complete:
        </label>
        </div>
        <div className='h-col-2'>
          {/* <input type="checkbox" name="isComplete" onChange={filterTasks} /> */}
          <input type="checkbox" name="isComplete"   />
        </div>
      <div className='btn'>
         <input type="submit" value="Add Task" className='but'/>
      </div>  
      <div className='h-col-1'>
        <label class="lable">
          Priority task:
        </label>
        </div>
        <div className='h-col-2'>
          {/* <input type="checkbox" name="isPriority" onChange={filterTasks} /> */}
          <input type="checkbox" name="isPrioritys" onChange={handleInput} />
        </div>
     
        <div className='h-col-1'>
        <label class="lable">
          Complete task:
        </label>
        </div>
        <div className='h-col-2'>
          {/* <input type="checkbox" name="isComplete" onChange={filterTasks} /> */}
          <input type="checkbox" name="isCompletes"  onChange={handleInput} />
        </div>
      </div>      
      </form>
      </div>  
      <h2 class="line">Tasks</h2>
      <div class="row">
      {Boolean(prioritys) === false && Boolean(completion) === false && (
        <div>
        {tasks.map((task,i) => (
          <div key={i}  class="col-1">
            <ul>
            <li><h4>{task.title}</h4></li>
            <li><p>{task.description}</p></li>
            </ul>
            <p>Priority: {task.isPriority ?  (<input type="checkbox" name="isPriority" defaultChecked/>) : 
                                             ( <input type="checkbox" name="isPrioritys" onChange={Uptade}/>)}</p>
            <p>Complete: {task.isComplete ? (<input type="checkbox" name="isComplete" defaultChecked/>):
                                            (<input type="checkbox" name="isComplete" onChange={Uptade}/>)}</p>
            <button onClick={() => Delete(i)}>
                  clean
            </button>
          </div>
         ))}
         </div>
         )}
    {Boolean(prioritys) === true && (
        <div>
      {priorityTasks.map((task, i) => (
        <div key={i} class="col-2">
           <h3>Priority Tasks</h3>
            <ul>
              <li><p><span> Task-name: </span>{task.title}</p></li>
              <li><p><span> Task-description:  </span> {task.description}</p></li>
            </ul>
            <p>Priority: {task.isPriority ?  (<input type="checkbox" name="isPriority" defaultChecked/>) : ( <input type="checkbox" name="isPrioritys" onChange={Uptade}/>)}</p>
            <p>Complete: {task.isComplete ? (<input type="checkbox" name="isComplete" defaultChecked/>): (<input type="checkbox" name="isComplete" onChange={Uptade}/>)}</p>
            <button onClick={() => Delete(i)}>
                  clean
            </button>
          </div>
      ))}
        </div>
        )}
  {Boolean(completion) === true && (
     <div>
      {completeTasks.map((task, i) => (
        <div key={i} class="col-2">
           <h3>Complete Tasks</h3>
            <ul>
              <li><p><span> Task-name: </span>{task.title}</p></li>
              <li><p><span> Task-description:  </span> {task.description}</p></li>
            </ul>
            <p>Priority: {task.isPriority ?  (<input type="checkbox" name="isPriority" defaultChecked/>) : ( <input type="checkbox" name="isPriority" onChange={Uptade}/>)}</p>
            <p>Complete: {task.isComplete ? (<input type="checkbox" name="isComplete" defaultChecked/>): (<input type="checkbox" name="isComplete" onChange={Uptade}/>)}</p>
            <button onClick={() => Delete(i)}>
                  clean
            </button>
          </div>
      ))}
      </div>
      )}
       </div>
      </div>
      {/* <Child /> */}
    </>
  );
};

export default Form;
