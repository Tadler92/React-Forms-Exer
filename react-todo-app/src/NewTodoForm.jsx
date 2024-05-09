import { useState } from "react";
import './NewTodoForm.css';

const NewTodoForm = ({addTodo}) => {
  const INITIAL_STATE = {
    taskTodo: "",
  }
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({...formData});
    setFormData(INITIAL_STATE);
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="taskTodo">Task Todo: </label>
      <input 
        id="taskTodo"
        type="text" 
        name="taskTodo" 
        placeholder="Task" 
        value={formData.taskTodo}
        onChange={handleChange} 
      />

      <button>Add Todo</button>
    </form>
  )
}



export default NewTodoForm;