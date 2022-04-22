import { useState } from "react";
import AddTodo from "./componts/AddTodo/AddTodo";
import Color from "./componts/Color";
import EditModal from "./componts/EditModal/EditModal";
import Like from "./componts/Like";
import Render from "./componts/Render";
import TodoList from "./componts/TodoList/TodoList";


function App(item) {
 
  const [todos, setTodos] =useState([]);
  let [modal,setModal] = useState(false)
  let [editTodo, setEditTodo] = useState({})

  function handleTask(newObj){
    let newTodos =[...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }

  // ! function to make line throungh
 function changeStatus(id){
   const newTodos = todos.map((item) => {
     if(item.id===id){
       item.status = !item.status;
     }
     return item;
   });
   setTodos(newTodos);

 }

 function handleDelete(id){
   let newTodos = todos.filter(item => {
     return item.id !==id
   })
  setTodos(newTodos)
 }

function handleEdit(index){
  setModal(true)
setEditTodo(todos[index])
}

function handleSaveTask(newTask){
  const newTodos = todos.map((item) => {
    if(item.id===newTask.id){
      return newTask
    }
    return item
  });
  setTodos(newTodos);
  setModal(false);

}




  return (
    <>
    {/* <Like/>
    <Color/>
    <Render /> */}
    <AddTodo 
    handleTask={handleTask} />
    <TodoList 
    todos={todos}
    changeStatus ={changeStatus} 
    handleDelete ={handleDelete}  
    handleEdit = {handleEdit}

     />
     {modal ? 
     <EditModal
      editTodo={editTodo}
      // handleTask ={handleTask}
      handleSaveTask={handleSaveTask}
     />
      : null}
    
    </>
  )
}

export default App;
