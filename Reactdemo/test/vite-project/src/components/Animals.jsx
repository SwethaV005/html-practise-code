import React from "react";

function Animals() {
  let animals = ["Cats", "Dogs", "Horse"];
  return (
    <div>
        <ul>
      {animals.map((animal) => {
        return  <li>{animal}</li>;
      })}
      </ul>
    </div>
  );
}

export default Animals;
