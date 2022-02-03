import React from "react";

function RecipeList({recipes, setRecipes, deleteItem}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
 
  //map thgouth recipes array, getting index and item
  //add each item into a <td>

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => (
          <tr key='index' className='recipe'>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td><img src={recipe.photo} /></td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.preparation}</td>
              <td><button name="delete" onClick={() => deleteItem(index)}>delete</button></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
