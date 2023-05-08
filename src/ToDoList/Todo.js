import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "./Todo.css";

function Todo() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])
    const [editTask, setEditTask] = useState(0)
    const [completedTask, setCompletedTask] = useState([])
  
    function creatLi(e) {
      setTask(e.target.value)
    }
  
    function addLi(e) {
      e.preventDefault()
      if (editTask !== false){
        tasks[editTask] = task;
        setEditTask(false)
      }else setTasks([...tasks, task])
        
      setTask('')
    }

    function liDelete(e, index){
      e.preventDefault();
      setTasks(tasks.filter((task, id) => {
        return id !== index
      }))
    }

    function liEditing(e, index){
      e.preventDefault();
      setTask(tasks[index]);
      setEditTask(index)

    }

    function liCompleted(e, index){
      e.preventDefault();
      setCompletedTask([...completedTask, index])
    }
    
    return (
      <>
        <div className='wrepper'>
          <form onSubmit={addLi}>
            <input type="text" value={task} onChange={creatLi} autoFocus />
            <button type='submit'>Add Li</button>
          </form>
          <ul>
            {
              tasks.map((item, index) => {
                return (
                  <li
                    className={completedTask.includes(index) ? 'completed' : ''}
                    key={index}
                  >
                    {item}
                    <a href='' onClick={(e) => liDelete(e, index)}>
                      <DeleteIcon/>
                    </a>
                    <a href='' onClick={(e) => liEditing(e, index)}>
                      <EditIcon/>
                    </a>
                    <a href='' onClick={(e) => liCompleted(e, index)}>
                      <CheckBoxIcon/>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </>
    )

    
  }

export default Todo

// rfce 

