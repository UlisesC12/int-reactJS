import React from "react";
import { TodoCounter } from "../TodoCounter/index.";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";

function AppUI() {
    return (
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <TodoContext.Consumer>
            {({
                error,
                loading, 
                searchedTodos, 
                completeTodo, 
                deleteTodo,
            })=>(
                <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodos.length)  && <p>¡Crea tu primer TODO!</p>}
    
                {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
            )}
        </TodoContext.Consumer>

        <TodoButton />
    </React.Fragment>
    );
}

export { AppUI }