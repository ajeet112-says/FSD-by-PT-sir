import React from 'react'
import { useState } from "react";
import ImageManipulation from './ImageManipulation.jsx';

const App = () => {
 const [count, setCount] = useState(0)  

 function handleClick() {
    setCount(count + 5)
  }
  function handleDecrease() {
    setCount(count - 1)
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button> 

    <button onClick={handleDecrease}>
        Decrease
      </button>

      <div>
        <ImageManipulation />
      </div>
    </div>
  )
}

export default App
