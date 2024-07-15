import axios from 'axios';

// Create an axios instance to use with our base URL at the designated port of our JSON Server
const api = axios.create({
	baseURL: 'http://localhost:3000/'
});

// Function to retrieve or fetch all of my recipes aka GET:
export const getRecipes = async () => {
	const response = await api.get('/recipes');
	console.log(response.data)
	return response.data
}  

// Function to add a new recipe aka CREATE or POST:

export const addRecipe = async (recipe) => {
	const response = await api.post('/recipes', recipe);
	return response.data;
	};

// Fucnion to update a recipe (Put or patch) in the data base:
export const updateRecipe = async (id, recipe) => {
	const response = await api.put(`/recipes/${id}`, recipe);
	return response.data;
};

// Function to delete a recipe from the database: 
export const deleteRecipe = async (id) => {
	await api.delete(`/recipes/${id}`);
};