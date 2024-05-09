import { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const INITIAL_STATE = [
    {id: uuid(), taskTodo: 'read'},
    {id: uuid(), taskTodo: 'write'},
    {id: uuid(), taskTodo: 'swim'}
  ];

  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, {...newTodo, id: uuid()}])
  }

  const removeTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h3>Todo App</h3>
      <NewTodoForm addTodo={addTodo} />
      {todos.map(({id, taskTodo}) => (
        <Todo 
          id={id} 
          taskTodo={taskTodo} 
          key={id} 
          removeTodo={removeTodo}
        />
      ))}
    </div>
  )
}


export default TodoList;