import React from "react";
import {useState} from 'react';

function ToyForm({toyForm}) {
  const[formData, setFormData] = useState(
    {name: '',
    image: '',
    likes: 0,
  })

function handleChange(event){
  const{name, value} = event.target
  setFormData(form => ({...form, [name]: value}))
}

function handleSubmit(event){
  event.preventDefault()
  fetch('http://localhost:3001/toys',{
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => toyForm(data))
}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
