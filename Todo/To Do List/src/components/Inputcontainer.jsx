import React from "react";

function Inputcontainer({inputVal,writeTodo,addTodo}) {
  
  return (
    <div className="input-container">
      <input type="text" value={inputVal}  onChange={writeTodo}/>
      <button onClick={addTodo} type="button">+</button>
    </div>
  );
}

export default Inputcontainer;
