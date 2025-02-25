import React from 'react';
import './AppetizersPage.css'; // Ensure you create this CSS file for styling
import { Link } from 'react-router-dom';
import '../posts/Posts.css';

const AppetizersPage = () => {
    const appetizerCategories = [
        { id: 'dips', title: 'Dips' },
        { id: 'finger-foods', title: 'Finger Foods' },
        { id: 'bruschetta', title: 'Bruschetta' },
        { id: 'skewers', title: 'Skewers' },
        // Add more categories as needed
    ];

    const featuredRecipes = [
        {
            id: 'classic-bruschetta',
            title: 'Classic Bruschetta',
            image: '/images/appetizers/bruschetta.jpg',
            description: 'A simple and delicious appetizer made with fresh tomatoes and basil.',
        },
        {
            id: 'stuffed-mushrooms',
            title: 'Stuffed Mushrooms',
            image: '/images/appetizers/stuffed-mushrooms.jpg',
            description: 'Savory mushrooms stuffed with cheese and herbs.',
        },
        {
            id: 'chicken-wings',
            title: 'Buffalo Chicken Wings',
            image: '/images/appetizers/chicken-wings.jpg',
            description: 'Spicy and crispy chicken wings served with blue cheese dressing.',
        },
    ];

    return (
        <div className="post-container allrecipes-layout">
            <div className="post-header">
                <div className="header-content">
                    <h1>Appetizers Recipes</h1>
                    <p className="header-description">
                        Discover a variety of delicious appetizers that are perfect for any occasion!
                    </p>
                </div>
            </div>
            <div className="recipe-filters">
                <h3>Explore Appetizer Categories:</h3>
                <div className="category-list">
                    {appetizerCategories.map(category => (
                        <Link key={category.id} to={`/category/meals/appetizers/${category.id}`} className="category-item">
                            {category.title}
                        </Link>
                    ))}
                </div>
            </div>
            <h3>Featured Appetizer Recipes:</h3>
            <div className="featured-recipes">
                {featuredRecipes.map(recipe => (
                    <div key={recipe.id} className="recipe-card">
                        <img src={recipe.image} alt={recipe.title} />
                        <h4>{recipe.title}</h4>
                        <p>{recipe.description}</p>
                        <Link to={`/recipe/${recipe.id}`} className="view-recipe">View Recipe</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppetizersPage; 