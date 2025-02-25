import React from 'react';
import { useParams } from 'react-router-dom';
import './DinnerDetail.css';

const DinnerDetail = () => {
    const { id } = useParams();

    // Sample data for demonstration purposes
    const dinnerRecipes = {
        '5-ingredient': {
            title: '5-Ingredient Pasta',
            image: '/images/dinners/5-ingredient-pasta.jpg',
            description: 'A quick and easy pasta dish with just five ingredients.',
            ingredients: ['Pasta', 'Olive Oil', 'Garlic', 'Parmesan', 'Basil'],
            instructions: 'Cook pasta, sauté garlic in olive oil, mix with pasta, and top with cheese and basil.'
        },
        'one-pot': {
            title: 'One-Pot Chicken and Rice',
            image: '/images/dinners/one-pot-chicken-rice.jpg',
            description: 'A flavorful one-pot meal that is easy to prepare.',
            ingredients: ['Chicken', 'Rice', 'Broth', 'Vegetables', 'Spices'],
            instructions: 'Brown chicken, add rice and broth, simmer until cooked.'
        },
        // Add more dinner recipes as needed
    };

    const recipe = dinnerRecipes[id];

    if (!recipe) {
        return <h2>Recipe not found</h2>;
    }

    return (
        <div className="dinner-detail">
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.description}</p>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default DinnerDetail; 