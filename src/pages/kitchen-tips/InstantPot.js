import React from 'react';
import { Link } from 'react-router-dom';
import './KitchenTipPage.css';

const InstantPot = () => {
    const tips = [
        {
            title: "Getting Started",
            content: "Learn the basic functions and safety features of your Instant Pot",
            steps: [
                "Always check the sealing ring before use",
                "Add at least 1 cup of liquid for pressure cooking",
                "Don't fill beyond the max fill line",
                "Ensure the steam release valve is in the correct position"
            ]
        },
        {
            title: "Common Functions",
            content: "Master these essential Instant Pot cooking methods",
            steps: [
                "Pressure Cook: High and low pressure settings",
                "Sauté: Brown meats and vegetables",
                "Slow Cook: Traditional slow cooking",
                "Steam: Perfect for vegetables and dumplings"
            ]
        },
        {
            title: "Time-Saving Tips",
            content: "Make the most of your Instant Pot with these efficiency tips",
            steps: [
                "Keep frequently used ingredients ready",
                "Use the delay start function",
                "Clean the pot and accessories right after use",
                "Store the lid upside down when not in use"
            ]
        }
    ];

    const popularRecipes = [
        {
            id: 1,
            title: "Instant Pot Beef Stew",
            cookTime: "45 mins",
            difficulty: "Easy",
            rating: 4.8,
            image: "/images/recipes/instant-pot/beef-stew.jpg",
            description: "Tender beef and vegetables in a rich broth"
        },
        {
            id: 2,
            title: "Pressure Cooker Chicken and Rice",
            cookTime: "25 mins",
            difficulty: "Easy",
            rating: 4.9,
            image: "/images/recipes/instant-pot/chicken-rice.jpg",
            description: "One-pot meal with perfectly cooked chicken and fluffy rice"
        },
        {
            id: 3,
            title: "IP Mac and Cheese",
            cookTime: "15 mins",
            difficulty: "Easy",
            rating: 4.7,
            image: "/images/recipes/instant-pot/mac-cheese.jpg",
            description: "Creamy, cheesy pasta made in minutes"
        },
        {
            id: 4,
            title: "Instant Pot Pulled Pork",
            cookTime: "60 mins",
            difficulty: "Medium",
            rating: 4.8,
            image: "/images/recipes/instant-pot/pulled-pork.jpg",
            description: "Tender, flavorful pulled pork perfect for sandwiches"
        }
    ];

    return (
        <div className="tip-page-container">
            <header className="tip-page-header">
                <h1>Instant Pot Tips & Tricks</h1>
                <p>Master your Instant Pot with our comprehensive guide</p>
            </header>

            <div className="tip-sections">
                {tips.map((tip, index) => (
                    <section key={index} className="tip-section">
                        <h2>{tip.title}</h2>
                        <p>{tip.content}</p>
                        <ul>
                            {tip.steps.map((step, stepIndex) => (
                                <li key={stepIndex}>{step}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>

            <div className="related-recipes">
                <h2>Popular Instant Pot Recipes</h2>
                <div className="recipe-grid">
                    {popularRecipes.map(recipe => (
                        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
                            <div className="recipe-image">
                                <img src={recipe.image} alt={recipe.title} />
                            </div>
                            <div className="recipe-content">
                                <h3>{recipe.title}</h3>
                                <p className="recipe-description">{recipe.description}</p>
                                <div className="recipe-meta">
                                    <span className="cook-time">⏱️ {recipe.cookTime}</span>
                                    <span className="difficulty">{recipe.difficulty}</span>
                                    <span className="rating">★ {recipe.rating}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstantPot; 