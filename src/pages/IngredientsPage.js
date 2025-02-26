import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './IngredientsPage.css'; // Ensure you have this CSS file for styling

const ingredients = [
    'Apples',
    'Bananas',
    'Carrots',
    'Dill',
    'Eggs',
    'Flour',
    'Garlic',
    'Honey',
    'Iceberg Lettuce',
    'Jalapeños',
    'Kale',
    'Lemons',
    'Mangoes',
    'Nuts',
    'Olive Oil',
    'Pasta',
    'Quinoa',
    'Rice',
    'Spinach',
    'Tomatoes',
    'Ugli Fruit',
    'Vanilla',
    'Watermelon',
    'Xigua',
    'Yams',
    'Zucchini',
];

const IngredientsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredIngredients = ingredients.filter(ingredient =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="ingredients-container">
            <h1>Ingredients A-Z</h1>
            <input
                type="text"
                placeholder="Search ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <ul className="ingredients-list">
                {filteredIngredients.map((ingredient, index) => (
                    <li key={index} className="ingredient-item">
                        <Link to={`/ingredients/${ingredient.toLowerCase()}`} className="ingredient-link">
                            {ingredient}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientsPage;