import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './IngredientDetailPage.css'; // Ensure this CSS file is created

const IngredientDetailPage = () => {
    const { ingredient } = useParams(); // Get the ingredient from the URL

    // Example dinners related to the ingredient with images and descriptions
    const dinners = {
        apples: [
            { name: 'Apple Pie', link: '/recipes/apple-pie', image: 'https://via.placeholder.com/150', difficulty: 'easy', description: 'A classic dessert made with fresh apples.' },
            { name: 'Apple Crisp', link: '/recipes/apple-crisp', image: 'https://via.placeholder.com/150', difficulty: 'easy', description: 'A warm and comforting dessert with a crunchy topping.' },
            { name: 'Caramel Apples', link: '/recipes/caramel-apples', image: 'https://via.placeholder.com/150', difficulty: 'easy', description: 'Sweet apples coated in rich caramel.' },
        ],
        bananas: [
            { name: 'Banana Bread', link: '/recipes/banana-bread', image: 'https://via.placeholder.com/150', difficulty: 'easy', description: 'Moist and delicious banana bread.' },
            { name: 'Banana Pancakes', link: '/recipes/banana-pancakes', image: 'https://via.placeholder.com/150', difficulty: 'easy', description: 'Fluffy pancakes with ripe bananas.' },
            { name: 'Banana Smoothie', link: '/recipes/banana-smoothie', image: 'https://via.placeholder.com/150', difficulty: 'easy', description: 'A refreshing smoothie made with bananas.' },
        ],
        // Add more ingredients and their related dinners here...
    };

    const relatedDinners = dinners[ingredient] || [];
    const [searchTerm, setSearchTerm] = useState('');
    const [activeDifficulty, setActiveDifficulty] = useState('all');

    const filteredDinners = relatedDinners.filter(dinner => {
        const matchesSearch = dinner.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDifficulty = activeDifficulty === 'all' || dinner.difficulty === activeDifficulty;
        return matchesSearch && matchesDifficulty;
    });

    return (
        <div className="ingredient-detail-container">
            <h1>Dinners with {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</h1>
            <p>Looking for unique recipes using {ingredient}? Here are some delicious options:</p>
            <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <div className="filter-options">
                <button 
                    className={`filter-pill ${activeDifficulty === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveDifficulty('all')}
                >
                    All Levels
                </button>
                <button 
                    className={`filter-pill ${activeDifficulty === 'easy' ? 'active' : ''}`}
                    onClick={() => setActiveDifficulty('easy')}
                >
                    Easy
                </button>
                <button 
                    className={`filter-pill ${activeDifficulty === 'medium' ? 'active' : ''}`}
                    onClick={() => setActiveDifficulty('medium')}
                >
                    Medium
                </button>
            </div>
            {filteredDinners.length > 0 ? (
                <div className="dinner-grid">
                    {filteredDinners.map((dinner, index) => (
                        <div key={index} className="dinner-card">
                            <a href={`/recipe/${dinner.link.split('/').pop()}`} className="dinner-link">
                                <img src={dinner.image} alt={dinner.name} className="dinner-image" />
                                <h3>{dinner.name}</h3>
                                <p>{dinner.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No related dinners found.</p>
            )}
        </div>
    );
};

export default IngredientDetailPage; 