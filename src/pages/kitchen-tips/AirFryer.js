import React from 'react';
import './KitchenTipPage.css';

const AirFryer = () => {
    const tips = [
        {
            title: "Getting Started",
            content: "Essential tips for air fryer beginners",
            steps: [
                "Preheat your air fryer before cooking",
                "Don't overcrowd the basket - air needs to circulate",
                "Spray or brush food with oil for better browning",
                "Shake or flip food halfway through cooking"
            ]
        },
        {
            title: "Temperature Guide",
            content: "Common temperature settings for different foods",
            steps: [
                "Frozen foods: 400°F (200°C)",
                "Fresh vegetables: 375°F (190°C)",
                "Chicken: 375°F (190°C)",
                "Fish: 350°F (175°C)"
            ]
        },
        {
            title: "Maintenance Tips",
            content: "Keep your air fryer in top condition",
            steps: [
                "Clean the basket and drawer after each use",
                "Wipe the heating element monthly",
                "Check for and remove food debris regularly",
                "Never use metal utensils that can scratch the coating"
            ]
        }
    ];

    return (
        <div className="tip-page-container">
            <header className="tip-page-header">
                <h1>Air Fryer Tips & Tricks</h1>
                <p>Get the most out of your air fryer with these essential tips</p>
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
                <h2>Popular Air Fryer Recipes</h2>
                {/* Add recipe cards or links here */}
            </div>
        </div>
    );
};

export default AirFryer; 