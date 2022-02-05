import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  //add new user inputs to recipes data
  const addRecipes = (recipe) => {
     setRecipes((current) => [...current, recipe])
  }
  
  //edit/delete function
  const deleteItem = ((index) => 
     setRecipes((recipe) =>
     recipes.filter((recipe, currentIndex)=> currentIndex !== index)
     ));
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes= {recipes} setRecipes={setRecipes} deleteItem={deleteItem}/>
      <RecipeCreate recipes= {recipes} setRecipes={setRecipes} addRecipes={addRecipes} />
    </div>
  );
}

export default App;
