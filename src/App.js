import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButton } from "./TodoButton";
// import './App.css';
const todos = [
  {text: "Cortar cebolla", completed: false},
  {text: "Adelantar curso", completed: false},
  {text: "Llorar con la llorona", completed: false},
];
function App(props) {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <TodoButton/>
    </React.Fragment>
  );
}

export default App;
