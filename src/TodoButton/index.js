import React from 'react';
import './TodoButton.css';

function TodoButton({setOpenModal, openModal}) {
  const onClickButton = (msg) => {
    setOpenModal(!openModal);
  }

  return (
    <button
     className="TodoButton"
     onClick={onClickButton}
     >
      +
    </button>
  )
}

export {TodoButton};