import React from 'react'
import Todo from './Todo'

function Todocontainer({ todos, delTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return <Todo key={`${todo}-${index}`} todo={todo} delTodo={delTodo} index={index} />
      })}
    </div>
  )
}

export default Todocontainer