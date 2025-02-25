import React from 'react';
import './Salad.css';

const Salad = () => {
    const salads = [
        { id: 'caesar-salad', title: 'Caesar Salad', image: '/images/salads/caesar-salad.jpg', description: 'A classic Caesar salad with fresh romaine and homemade dressing.' },
        { id: 'greek-salad', title: 'Greek Salad', image: '/images/salads/greek-salad.jpg', description: 'A refreshing Greek salad with feta cheese and olives.' },
        { id: 'caprese-salad', title: 'Caprese Salad', image: '/images/salads/caprese-salad.jpg', description: 'A simple salad with fresh mozzarella, tomatoes, and basil.' },
        // Add more salads as needed
    ];

    console.log("Salad component rendered");

    return (
        <div className="salad-container">
            <h1>Salad Recipes</h1>
            <p className="salad-description">Discover our collection of fresh and delicious salad recipes that are perfect for any meal.</p>
            <div className="salad-grid">
                {salads.map(salad => (
                    <div key={salad.id} className="recipe-card">
                        <img src={salad.image} alt={salad.title} />
                        <h2>{salad.title}</h2>
                        <p>{salad.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Salad; 