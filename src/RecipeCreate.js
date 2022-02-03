import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes, addRecipes}) {

  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [photo, setPhoto] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');
  
  const initialFormData = {
    name: '',
    cuisine: '',
    url: '',
    ingredients: '',
    preparation: '',
  }

  const [formData, setFormData] = useState({...initialFormData});
  
  //takes input, sets formData item to that value
  const handleName = (event) => {
    setName(event.target.value); 
    const value = event.target.value
    setFormData({ ...formData, [event.target.name]: value,})
  }
  
  const handleCuisine = (event) => { 
    setCuisine(event.target.value); 
    const value = event.target.value
    setFormData({ ...formData, [event.target.name]: value,})
  }
  
  const handlePhoto = (event) => { 
    setPhoto(event.target.value); 
    const value = event.target.value
    setFormData({ ...formData, [event.target.name]: value,})
  }
  
  const handleIngredients = (event) => { 
    setIngredients(event.target.value); 
    const value = event.target.value
    setFormData({ ...formData, [event.target.name]: value,})
  }
  
  const handlePreparation = (event) => { 
    setPreparation(event.target.value); 
    const value = event.target.value
    setFormData({ ...formData, [event.target.name]: value,})
  }
  
  const handleSubmit = (event) => {
    //prevent default page refresh
    event.preventDefault();

    //add new form data to recipeData array
    addRecipes(formData);

    //reset form after submitting
    setName('');
    setCuisine('');
    setPhoto('');
    setIngredients('');
    setPreparation('');
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input type='text' 
                name='name' 
                id='name' 
                value={name} 
                onChange={handleName} 
                placeholder="Name" />
            </td>
            <td>
              <input type='text' 
                name='cuisine' 
                id='cuisine' 
                value={cuisine} 
                onChange={handleCuisine} 
                placeholder="Cuisine" />
            </td>
            <td>
              <input type='text' 
                name='photo' 
                id='photo' 
                value={photo} 
                onChange={handlePhoto} 
                placeholder="URL" />
            </td>
            <td>
            <textarea type='text' 
              name='ingredients' 
              id='ingredients' 
              value={ingredients} 
              onChange={handleIngredients} 
              placeholder="Ingredients" />
            </td>
            <td>
            <textarea type='text' 
              name='preparation' 
              id='preparation' 
              value={preparation} 
              onChange={handlePreparation} 
              placeholder="Preparation" />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
