import React from "react";

function RecipeList({recipes, setRecipes, deleteItem}) {
  //map through recipes array, getting index and each recipe
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
          <tr key={index} className='recipe'>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td><img src={recipe.photo} /></td>
              <td className="content_td"><p>{(recipe.ingredients)}</p></td>
              <td className="content_td"><p>{(recipe.preparation)}</p></td>
              <td><button name="delete" onClick={() => deleteItem(index)}>delete</button></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
