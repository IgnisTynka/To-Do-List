import React from 'react';
import { useState} from 'react';
import './App.css';
import github from'./github.svg';

function App() {

  const [ArrayOfTasks, setArrayOfTasks] = useState([]);

  const [task, setTask] = useState("");

  function addTask(){
    let newTask = {id: ArrayOfTasks.length + 1, name: task, finished: false};
    setArrayOfTasks([...ArrayOfTasks, newTask]);
    setTask("");
  }

  function handleCheckboxChange(id){
    let newArrayOfTasks = ArrayOfTasks.map((task) => {
      if (task.id === id) {
        task.finished = !task.finished;
      }
      return task;
    })
    setArrayOfTasks(newArrayOfTasks);
  }

  return (
    <React.Fragment>
     <div className="App">
      <header className="App-header">
        <h1>To-Do-List</h1>
      </header>
      <section className="App-body">
        <div className="App-body_addtask">
          <input type="text" placeholder="Add new task" id="task" value={task} onChange={(e)=>{
            setTask(e.target.value);
          }}/> 
          <button id="btn" onClick={addTask}>Add</button>
        </div>
        <div className="App-body_tasklist">
          <div className="App-body_tasklist_notfinished">
            <h3>Not finished</h3>
            <div className="App-body_tasklist_notfinished_task">
              {
                ArrayOfTasks.map((task) => {
                  if (task.finished === false) {
                    return (
                      <div className="task" key={task.id}>
                        <p>{task.name}</p>
                        <input type="checkbox" id="checkbox" onChange={()=>{
                          handleCheckboxChange(task.id)
                        }}/>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
          <div className="App-body_tasklist_finished">
            <h3>Finished</h3>
            <div className="App-body_tasklist_finished_task">
            {
                ArrayOfTasks.map((task) => {
                  if (task.finished === true) {
                    return (
                      <div className="task finished" key={task.id}>
                        <p>{task.name}</p>
                        <input type="checkbox" id="checkbox" onChange={()=>{
                          handleCheckboxChange(task.id)
                          }} checked/>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      </section>
      <footer className="App-footer">
        <p>Created by</p> <img src={github} alt='github'/><p>IgnisTynka</p>
      </footer>
    </div>
    </React.Fragment>
  );
}

export default App;
