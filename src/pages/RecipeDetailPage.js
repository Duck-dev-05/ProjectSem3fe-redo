import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetailPage.css'; // Create a CSS file for styling

const RecipeDetailPage = () => {
    const { recipeId } = useParams(); // Get the recipe ID from the URL

    // Example recipe details (you can replace this with actual data fetching)
    const recipes = {
        'apple-pie': {
            title: 'Apple Pie',
            image: 'https://via.placeholder.com/300',
            description: 'A classic dessert made with fresh apples.',
            ingredients: ['Apples', 'Sugar', 'Butter', 'Flour', 'Cinnamon'],
            instructions: '1. Preheat oven to 425°F. 2. Prepare the crust. 3. Fill with apples and bake.',
        },
        'banana-bread': {
            title: 'Banana Bread',
            image: 'https://via.placeholder.com/300',
            description: 'Moist and delicious banana bread.',
            ingredients: ['Bananas', 'Sugar', 'Flour', 'Eggs', 'Baking Soda'],
            instructions: '1. Preheat oven to 350°F. 2. Mix ingredients. 3. Bake for 60 minutes.',
        },
        // Add more recipes as needed...
    };

    const recipe = recipes[recipeId] || {};

    return (
        <div className="recipe-detail-container">
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <p>{recipe.description}</p>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetailPage; 