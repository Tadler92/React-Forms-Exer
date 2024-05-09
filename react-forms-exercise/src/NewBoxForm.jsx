import { useState } from "react";
import './NewBoxForm.css';

const NewBoxForm = ({addBox}) => {
  const INITIAL_STATE = {
    backgroundColor: "",
    width: '',
    height: ''
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
    // addItem(formData.name, formData.qty);
    addBox({...formData});
    setFormData(INITIAL_STATE);
  }

  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color: </label>
      <input 
        id="backgroundColor"
        type="text" 
        name="backgroundColor" 
        placeholder="Color" 
        value={formData.backgroundColor}
        onChange={handleChange} 
      />

      <label htmlFor="width">Width: </label>
      <div className="NewBoxForm-width-range">
        <p>{formData.width}</p>
        <input 
          id="width"
          type="range" 
          min="10"
          max="200"
          step="10"
          name="width" 
          value={formData.width}
          onChange={handleChange} 
        />
      </div>

      <label htmlFor="height">Height: </label>
      <div className="NewBoxForm-width-range">
        <p>{formData.height}</p>
        <input 
          id="height"
          type="range" 
          min="10"
          max="200"
          step="10"
          name="height" 
          value={formData.height}
          onChange={handleChange} 
        />
      </div>

      <button>Add Box</button>
    </form>
  )
}



export default NewBoxForm;