import React, { useState, useEffect } from "react";
import './App.css';

// Import components
import Form from "./Components/Form";
import TodoList from "./Components/TodoList"

function App() {
  // State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

    // Use effect
    useEffect(() => {
      filterHandler();
    }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Aaron's ToDo List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText} 
        setStatus={setStatus}
        
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
