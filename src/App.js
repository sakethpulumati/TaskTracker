import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

//https://www.youtube.com/watch?v=w7ejDZ8SWv8
//sourceytlink
//rafce
const App = () =>
{

  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(()=>{})

//Add Task
const addTask = (task) =>
{
    const id = Math.floor(Math.random() * 10000) + 1
    
    const newTask   = { id,  ...task }
    setTasks([...tasks, newTask])
}

//Delete task
const deleteTask = (id) =>
{
  setTasks(tasks.filter((task)=> task.id !== id))
}

// Toggle Remainder
const toggleReminder = (id) =>
{
  setTasks(tasks.map((task)=> task.id === id 
  ? { ...task,reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd={ ()=> setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd= {addTask}/>}
      {tasks.length > 0 ? (<Tasks  tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder}/>) : ("No tasks to Show")}
    </div>
    
  );
}

export default App;