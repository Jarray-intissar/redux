import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddTask from './AddTask';
import Task from './Task';

const ListTask = () => {
    const tasks = useSelector((state)=>state.task.listtask);
    const [fildone,setFildone] = useState(false);
 
  return (
    <div className='container'>
        <AddTask/>
<button  variant="warring" bg="warring" onClick={()=>setFildone(!fildone)} style={{padding:"5px"}}>
  { fildone ? "fil undone" :"fil done"}</button>
        {tasks.filter((task)=> task.isDone === fildone)
        .map((task)=>(<Task task={task} />))}
    </div>
  )
}

export default ListTask