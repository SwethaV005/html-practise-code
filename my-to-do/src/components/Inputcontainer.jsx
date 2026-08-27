import React from "react";

function Inputcontainer({inputRef, inputVal, writeTodo, addTodo}) {
  
  return (
    <div className="input-container">
      <input ref={inputRef} type="text" value={inputVal} onChange={writeTodo}/>
      <button onClick={addTodo} type="button">+</button>
    </div>
  );
}

export default Inputcontainer;
