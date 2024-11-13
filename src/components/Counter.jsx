import React, { useState } from "react";


function Counter() {
 const [arr, setArr] = useState([])

 function addMinus() {
setArr(prevArr => [...prevArr, "-"])

 }

 function addPlus() {
    setArr(prevArr => [...prevArr, "+"])
 }

  return (
    <div>
      <button onClick={addMinus} >-</button>

      <button onClick={addPlus} >+</button>
      {arr.toString()}
    </div>
  );
}

export default Counter;
