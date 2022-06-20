import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux/es/exports';
import { updateTask } from '../JS/taskSlice/TaskSlice';


const EditTask = ({id}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
const [edited,setEdited]=useState(
  {
    title:"",
    description:"",
  }
)
  return (
   
      <>
      <Button variant="info" onClick={handleShow} style={{margin:"10px"}}>
       Edit task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body className='opp'>
        <input type="text" placeholder='enter title'
         style={{width:"80%",
         margin:"10px",
         padding:"5px"}}
        onChange={(e)=>setEdited({...edited,title: e.target.value})} />
        <input type="text" placeholder='enter description' 
        style={{width:"80%",
        margin:"10px",
        padding:"5px"}}
        onChange={(e)=>setEdited({...edited,description: e.target.value})}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            handleClose();
            dispatch(updateTask({id : id, edited }));}}
            >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
 
  )
}

export default EditTask