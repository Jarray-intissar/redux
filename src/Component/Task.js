import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux/es/exports';
import '../App.css'; 
import { doneTask,removeTask } from '../JS/taskSlice/TaskSlice';
import EditTask from './EditTask';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    < div className={`con ${task.isDone ? "done" : "undone"} `} style={{display:"inline-block",margin:"10px",width:"100%"}}>

      <Card  style={{ margin:" 10px",width:"100%"}}>
        <Card.Header onClick={()=>dispatch(doneTask({id : task.id}))}>
        {task.isDone ? "done": "Not Done"}</Card.Header>git branch -M main
        <Card.Body>
          <Card.Title>{task.title}</Card.Title>
          <Card.Text>
          {task.description}
          </Card.Text>
          <EditTask id={task.id}/>
          <Button bg="danger" variant="danger" onClick={()=>dispatch(removeTask({id : task.id}))}> remove</Button>
        </Card.Body>
        
      </Card>
    </div>
    );
}

export default  Task