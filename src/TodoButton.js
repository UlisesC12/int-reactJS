import React from 'react';
import './TodoButton.css';

function TodoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  }

  return (
    <button
     className="TodoButton"
     onClick={() => onClickButton("Aquí va el modal")}
     >
      +
    </button>
  )
}

export {TodoButton};