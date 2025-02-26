import React, { useState, useEffect } from 'react';
import './DessertPage.css'; // Ensure you have this CSS file for styling

const DessertPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [difficulty, setDifficulty] = useState('all');
    const [loading, setLoading] = useState(true);

    const dessertRecipes = [
        {
            id: 1,
            title: 'Chocolate Cake',
            description: 'A rich and moist chocolate cake.',
            image: '/images/desserts/chocolate-cake.jpg',
            difficulty: 'easy',
        },
        {
            id: 2,
            title: 'Apple Pie',
            description: 'Classic apple pie with a flaky crust.',
            image: '/images/desserts/apple-pie.jpg',
            difficulty: 'medium',
        },
        {
            id: 3,
            title: 'Cheesecake',
            description: 'Creamy cheesecake with a graham cracker crust.',
            image: '/images/desserts/cheesecake.jpg',
            difficulty: 'hard',
        },
        // Add more dessert recipes as needed
    ];

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const filteredRecipes = dessertRecipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDifficulty = difficulty === 'all' || recipe.difficulty === difficulty;
        return matchesSearch && matchesDifficulty;
    });

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    return (
        <div>
            <h1>Dessert Recipes</h1>
            <input
                type="text"
                placeholder="Search for a dessert..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="difficulty-select">
                <option value="all">All Difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <div className="dessert-recipes">
                {filteredRecipes.map(recipe => (
                    <div key={recipe.id} className="recipe-card">
                        <img src={recipe.image} alt={recipe.title} />
                        <h2>{recipe.title}</h2>
                        <p>{recipe.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DessertPage; 