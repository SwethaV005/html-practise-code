import React ,{useState} from "react";
import "./App.css"
import Inputcontainer from "./components/Inputcontainer";
import Todocontainer from "./components/Todocontainer";
import Todo from "./components/Todo";

function App() {
  const [inputVal ,setInputVal]=useState('')

  const[todos, setTodos]=useState([])

  function writeTodo(e){
    setInputVal(e.target.value)
   
  }
  
  function addTodo(e){
    if (inputVal !== '') {
      e.preventDefault();
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal('');
    }
  }
  

  function delTodo(todoindex){
    setTodos((prevTodos) => prevTodos.filter((prevTodos,prevTodosIndex) =>
    {
      return prevTodosIndex !== todoindex
    }))
  }
  
  return (
    <main>
      <h1>To Do List</h1>
      <Inputcontainer  inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo}/>
      <Todocontainer todos={todos} delTodo={delTodo}/>
    </main>
  );
}

export default App;
