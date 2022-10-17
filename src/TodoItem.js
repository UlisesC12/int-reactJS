import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    alert("TODO Completado: " + props.text);
  }
  const onDelete = () => {
    alert("TODO Eliminado: " + props.text);
  }
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}>
       ᄼ
      </span>

      <p 
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <span
       className="Icon Icon-delete"
       onClick={onDelete}>
        X
      </span>
    </li>
  )
}

export {TodoItem};