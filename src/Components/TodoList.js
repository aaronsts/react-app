import React from 'react';
// Import components
import Todo from "./Todo"

const TodoList = ({setTodos, todos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        key={todo.id} 
                        text={todo.text} 
                        todos={todos} 
                        todo={todo}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;

