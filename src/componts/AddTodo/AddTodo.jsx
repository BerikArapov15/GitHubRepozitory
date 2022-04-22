import React from 'react';
import { useState } from 'react';

const AddTodo = (props) => {
    const[task, setTask] = useState('')
     
    const handleInput = (e) =>{
        setTask(e.target.value);
    }

    const handleAdd =()=>{
      const newTask = {
        task:task,
        status: false,
        id:Date.now(),
        };
        console.log(newTask);
        props.handleTask(newTask)
    }
    return (
        <div>
            <input type="text" onChange={handleInput} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddTodo;