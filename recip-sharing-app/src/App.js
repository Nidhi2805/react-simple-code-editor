
import React, { useState } from 'react';
import RecipeEditor from './RecipeEditor';
import RecipeList from './RecipeList';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Sharing Website</h1>
        <RecipeEditor onAddRecipe={handleAddRecipe} />
        <RecipeList recipes={recipes} />
      </header>
    </div>
  );
}

export default App;
