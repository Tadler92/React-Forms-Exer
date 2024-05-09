import './Todo.css'

const Todo = ({taskTodo, removeTodo, id}) => {
  const remove = () => removeTodo(id);
  return (
    <div className="Todo">
      <span>{taskTodo}</span>
      <button onClick={remove}>X</button>
    </div>
  )
}


export default Todo;