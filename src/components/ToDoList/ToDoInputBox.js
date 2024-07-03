import React,{ useState } from "react";
import PropTypes from 'prop-types'

const ToDoInputBox = (props) => {
  const { addTask } = props
  
  const [task, setTask] = useState('') 

  const handleOnClick = () => {
    addTask(task)
  }
  return (
    <>
      <div>
        <input type="text" onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleOnClick}>Add</button>
      </div>
    </>
  );
}

ToDoInputBox.propTypes = {
  addTask: PropTypes.func.isRequired
}
export default ToDoInputBox
