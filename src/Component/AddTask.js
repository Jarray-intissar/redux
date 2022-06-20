import React, { useState } from 'react'
import '../App.css'
import { addTask } from '../JS/taskSlice/TaskSlice';
import { useDispatch } from 'react-redux/es/exports';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddTask = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const dispatch =useDispatch();
   const[task,settask] = useState({
    id: Math.random(),
    title: " ",
    description: "",
    isDone:false,
   });
  return (
    <>
    <Button variant="dark" onClick={handleShow} style={{margin:" 50px auto",textAlign:"center",width:"50%",display:"flex",justifyContent:"center",}}>
     Add
    </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <input type="text" placeholder='enter title' style={{width:"80%",
margin:"10px",
padding:"5px"}}
     onChange={(e)=>settask({...task,title: e.target.value})}/>
      <input type="text" placeholder='enter description' 
   onChange={(e)=>settask({...task,description: e.target.value})}
   style={{width:"80%",
   margin:"10px",
   padding:"5px"}}
   /> 
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>dispatch(addTask(task))}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>

   /*  <div className='add'>
        <input type="text" placeholder='enter title'
        onChange={(e)=>settask({...task,title: e.target.value})}/>
        <input type="text" placeholder='enter description'onChange={(e)=>settask({...task,description: e.target.value})}/>
        
    </div> */
  )
}

export default AddTask