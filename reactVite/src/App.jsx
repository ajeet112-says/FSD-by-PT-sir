import React from 'react'
import mypic from './image/vk .jpg';

function App() {
  const a=20;
  const name="Ajeet "
  return (
    <div style={{border:'10px solid red', width:'300px',height:'350px'}}>
      <h2> Welcome to React</h2>
      <h2 style={{color:"red"}} > Value of a ={a}</h2>
      <h2> Name: {name}</h2>
      <img src={mypic} height={200} width={190}></img>
    </div>
  )
}

export default App