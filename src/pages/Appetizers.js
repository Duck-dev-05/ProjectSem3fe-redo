import React from 'react';
import './Appetizers.css';

const Appetizers = () => {
    const appetizers = [
        { id: 'classic-chicken-salad', title: 'Classic Chicken Salad', image: '/images/appetizers/chicken-salad.jpg', description: 'Nourish your body with this delicious salad. 15 mins easy. By Chef Anna' },
        { id: 'veggie-wrap', title: 'Veggie Wrap', image: '/images/appetizers/veggie-wrap.jpg', description: 'A quick and healthy option for any meal. 10 mins easy. By Chef Mike' },
        // Add more appetizers as needed
    ];

    return (
        <div className="appetizers-container">
            <h1>Appetizer Recipes</h1>
            <p className="appetizers-description">Explore our collection of delicious appetizer recipes that are quick and easy to prepare, perfect for any occasion.</p>
            <div className="appetizer-grid">
                {appetizers.map(appetizer => (
                    <div key={appetizer.id} className="recipe-card">
                        <img src={appetizer.image} alt={appetizer.title} />
                        <h2>{appetizer.title}</h2>
                        <p>{appetizer.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Appetizers; 