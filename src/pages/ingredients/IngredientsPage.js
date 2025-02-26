import React, { useState } from 'react';
import './IngredientsPage.css'; // Ensure you have appropriate styles

const ingredients = [
    { name: 'Almonds', image: '/images/ingredients/almonds.jpg' },
    { name: 'Apples', image: '/images/ingredients/apples.jpg' },
    { name: 'Bananas', image: '/images/ingredients/bananas.jpg' },
    { name: 'Beef', image: '/images/ingredients/beef.jpg' },
    { name: 'Chicken', image: '/images/ingredients/chicken.jpg' },
    { name: 'Duck', image: '/images/ingredients/duck.jpg' },
    { name: 'Fish', image: '/images/ingredients/fish.jpg' },
    { name: 'Lamb', image: '/images/ingredients/lamb.jpg' },
    { name: 'Mangoes', image: '/images/ingredients/mangoes.jpg' },
    { name: 'Pork', image: '/images/ingredients/pork.jpg' },
    { name: 'Seafood', image: '/images/ingredients/seafood.jpg' },
    { name: 'Vegetables', image: '/images/ingredients/vegetables.jpg' },
    { name: 'Fruits', image: '/images/ingredients/fruits.jpg' },
    { name: 'Pasta', image: '/images/ingredients/pasta.jpg' }
    // Add more ingredients as needed
];

const IngredientsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredIngredients = ingredients.filter(ingredient =>
        ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="ingredients-container">
            <h1>Ingredients A-Z</h1>
            <input
                type="text"
                placeholder="Search ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="alphabet-navigation">
                {Array.from(Array(26)).map((_, i) => {
                    const letter = String.fromCharCode(65 + i);
                    return (
                        <a href={`#${letter}`} key={letter} className="alphabet-link">
                            {letter}
                        </a>
                    );
                })}
            </div>
            <div className="ingredients-grid">
                {filteredIngredients.map((ingredient, index) => (
                    <div className="ingredient-card" key={index} id={ingredient.name.charAt(0).toUpperCase()}>
                        <img src={ingredient.image} alt={ingredient.name} className="ingredient-image" />
                        <h2>{ingredient.name}</h2>
                        <p className="ingredient-description">Learn more about {ingredient.name}.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IngredientsPage; 