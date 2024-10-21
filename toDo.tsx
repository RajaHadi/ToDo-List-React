import { useState } from "react";

export default function TodoList() {
  const [Tasks, setTask] = useState(["code", "salah", "study"]);
  const [newTask, setNewtask] = useState("");
  function handleInput(event) {
    setNewtask(event.target.value);
  }
  function addTask() {
    if(newTask.trim() !==""){
        setTask(T=>[...T,newTask])
    setNewtask("")
    }
  }
  function deleteTask(index) {
    const UpdateTask=Tasks.filter((_,i)=> i!==index)
    setTask(UpdateTask);
  }
  function moveUp(index) {
    if(index>0){
        const updatedTask=[...Tasks];
        [updatedTask[index] ,updatedTask[index -1]]=[updatedTask[index -1],updatedTask[index]];
        setTask(updatedTask);

    }
  }
  function moveDown(index) {
    if(index < Tasks.length -1){
        const updatedTask=[...Tasks];
        [updatedTask[index] ,updatedTask[index +1]]=[updatedTask[index +1],updatedTask[index]];
        setTask(updatedTask);
  }}

  return (
    <>
      <div className="TodoList">
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Task..."
            value={newTask}
            onChange={handleInput}
          />
          <button className="addButton" onClick={addTask}>
            Add
          </button>
        </div>
      
      <ol>
        {Tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="DeleteButton " onClick={()=>deleteTask(index)}>Delete</button>
            <button className=" move-button" onClick={()=>moveUp(index)}>👆</button>
            <button className=" move-button" onClick={()=>moveDown(index)}>👇</button>
          </li>
        ))}
      </ol>
      </div>
    </>
  );
}
