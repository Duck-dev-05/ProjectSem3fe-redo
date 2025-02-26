import React from 'react';
import './KitchenTipPage.css';

const CookingBasics = () => {
    const tips = [
        {
            title: "Essential Cooking Techniques",
            content: "Master these fundamental techniques to improve your cooking skills.",
            steps: [
                "Sautéing: Quickly cooking food in a small amount of oil over high heat.",
                "Boiling: Cooking food in water or broth at high temperatures.",
                "Baking: Cooking food using dry heat in an oven.",
                "Roasting: Cooking food evenly in an oven, often with added fat."
            ]
        },
        {
            title: "Ingredient Preparation",
            content: "Learn how to properly prepare ingredients for cooking.",
            steps: [
                "Chopping: Cut ingredients into small pieces for even cooking.",
                "Mise en Place: Gather and prepare all ingredients before cooking.",
                "Marinating: Soak food in a seasoned liquid to enhance flavor.",
                "Measuring: Use precise measurements for accurate cooking."
            ]
        },
        {
            title: "Flavor Building",
            content: "Enhance the taste of your dishes with these tips.",
            steps: [
                "Seasoning: Use salt and pepper to enhance flavors.",
                "Herbs and Spices: Experiment with different herbs and spices for variety.",
                "Acidity: Add a splash of vinegar or citrus juice to brighten flavors.",
                "Umami: Incorporate ingredients like mushrooms, tomatoes, or cheese for depth."
            ]
        }
    ];

    return (
        <div className="tip-page-container">
            <header className="tip-page-header">
                <h1>Cooking Basics</h1>
                <p>Learn essential cooking techniques and tips to elevate your culinary skills.</p>
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
                <h2>Popular Cooking Recipes</h2>
                {/* Add recipe cards or links here */}
            </div>
        </div>
    );
};

export default CookingBasics; 