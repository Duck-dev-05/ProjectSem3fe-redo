import React from 'react';
import { Link } from 'react-router-dom';
import './Meals.css'; // Assuming you have a CSS file for styling

const ViewAllMeals = () => {
    const mealCategories = [
        { id: 'breakfast', title: 'Breakfast', description: 'Simple and delicious meals to start your day.', image: '/images/breakfast.jpg' },
        { id: 'lunch', title: 'Lunch', description: 'Hearty meals to keep you energized.', image: '/images/lunch.jpg' },
        { id: 'healthy', title: 'Healthy', description: 'Nutritious meals for a balanced diet.', image: '/images/healthy.jpg' },
        { id: 'appetizers', title: 'Appetizers', description: 'Tasty starters for any occasion.', image: '/images/appetizers.jpg' },
        { id: 'salads', title: 'Salads', description: 'Fresh and vibrant salads to enjoy.', image: '/images/salads.jpg' },
        { id: 'soups', title: 'Soups', description: 'Warm and comforting soups for any season.', image: '/images/soups.jpg' },
        { id: 'bread', title: 'Bread', description: 'Homemade bread recipes for every meal.', image: '/images/bread.jpg' },
        { id: 'drink', title: 'Drinks', description: 'Refreshing beverages to complement your meals.', image: '/images/drinks.jpg' },
        { id: 'desserts', title: 'Desserts', description: 'Sweet treats to satisfy your cravings.', image: '/images/desserts.jpg' },
    ];

    return (
        <div className="view-all-meals-container">
            <h1 className="meals-header">All Meal Topics</h1>
            <p className="meals-description">Explore all our delicious meal topics!</p>
            <div className="meal-categories-grid">
                {mealCategories.map(category => (
                    <div className="meal-category-card" key={category.id}>
                        <Link to={`/meals/${category.id}`}>
                            <img src={category.image} alt={category.title} className="meal-category-image" />
                            <h2 className="meal-category-title">{category.title}</h2>
                            <p className="meal-category-description">{category.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewAllMeals; 