import { useState, useEffect } from 'react';
import './App.css';
import { getRecipes, addRecipe, deleteRecipe } from './services/recipesAPI';

function App() {
	const [recipes, setRecipes] = useState([]);

  // useEffect performs 'side effects' in function components.
  // It accepts two arguments: the function to run the intended effect
  // and a dependency array that controls when the effect should re-run.
  // The empty array means it will only run the useEffect argument function once.
	useEffect(() => {
    	fetchRecipes();
	}, []);

	const fetchRecipes = async () => {
    	try {
    	const data = await getRecipes();
      	console.log('Fetched recipes:', data); // Debugging log
    	setRecipes(data);
    	} catch (error) {
    	console.error('Error fetching recipes:', error); // Error handling
    	}
	};

	const handleAddRecipe = async () => {
    	const newRecipe = {
    	name: "New Recipe...",
    	type: "Unhealthy",
    	calories: 3050,
    	description: "A super sweet and sour dessert.",
    	temperature: "Warm",
    	ingredients: ["Sugar", "Syrup", "Toffee"],
    	price: 3.99
    	};
    	try {
    		await addRecipe(newRecipe);
      		fetchRecipes(); // Refresh the list after adding a new recipe
    	} catch (error) {
      	console.error('Error adding recipe:', error); // Error handling
    	}
	};

	const handleDeleteRecipe = async (id) => {
    try {
    	await deleteRecipe(id);
      fetchRecipes(); // Refresh the list after deleting a recipe
    } catch (error) {
      console.error('Error deleting recipe:', error); // Error handling
    }
	};

	return (
    <>
    	<h1>My Fantastic Recipes!</h1>
    	<button onClick={handleAddRecipe}>Add Recipe</button>
    	<p>Here is my list of wonderful recipes:</p>

    	<ul>
        {recipes.map((recipe) => (
        	<li key={recipe.id}>
            {recipe.name} - {recipe.description}
            <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
        	</li>
        ))}
    	</ul>
    </>
	);
}

export default App;
