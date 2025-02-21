import React from 'react';
import './KitchenTipPage.css';

const Grilling = () => {
    const tips = [
        {
            title: "Grill Preparation",
            content: "Get your grill ready for cooking",
            steps: [
                "Clean the grates thoroughly before each use",
                "Preheat grill for 10-15 minutes",
                "Oil the grates to prevent sticking",
                "Create temperature zones for different foods"
            ]
        },
        {
            title: "Temperature Control",
            content: "Master heat management for perfect results",
            steps: [
                "High heat (400-450°F) for searing",
                "Medium heat (350-400°F) for most cooking",
                "Low heat (250-300°F) for slow cooking",
                "Use indirect heat for larger cuts"
            ]
        },
        {
            title: "Food Safety",
            content: "Essential safety tips for grilling",
            steps: [
                "Use separate plates for raw and cooked foods",
                "Check meat temperatures with a thermometer",
                "Keep a spray bottle handy for flare-ups",
                "Let meats rest after cooking"
            ]
        }
    ];

    return (
        <div className="tip-page-container">
            <header className="tip-page-header">
                <h1>BBQ & Grilling Tips</h1>
                <p>Perfect your grilling technique with these expert tips</p>
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
                <h2>Popular Grilling Recipes</h2>
                {/* Add recipe cards or links here */}
            </div>
        </div>
    );
};

export default Grilling; 