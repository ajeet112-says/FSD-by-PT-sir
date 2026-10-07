import React, { useState } from "react";

function ImageManipulation() {
  const [height, setHeight] = useState(300);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  function increaseHeight() {
    setHeight(height + 10);
  }

  function decreaseHeight() {
    setHeight(height - 10);
  }

  function changeColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  return (
    <div>
      <h1>Image Manipulation</h1>

      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          width: "300px",
          height: "300px",
          border: "1px solid black",
        }}
      >
        <img
          src="https://www.cats.org.uk/media/13136/220325case013.jpg?width=500&height=333.49609375"
          width="300"
          height={height}
        />
      </div>

      <h3>Height: {height}</h3>

      <button onClick={increaseHeight}>
        Increase Height
      </button>

      <button onClick={decreaseHeight}>
        Decrease Height
      </button>

      <button onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}

export default ImageManipulation;