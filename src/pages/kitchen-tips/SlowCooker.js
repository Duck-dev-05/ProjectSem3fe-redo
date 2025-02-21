import React from 'react';
import './KitchenTipPage.css';

const SlowCooker = () => {
    const tips = [
        {
            title: "Basic Guidelines",
            content: "Essential slow cooker principles",
            steps: [
                "Fill slow cooker 1/2 to 3/4 full for best results",
                "Don't lift the lid while cooking - it releases heat",
                "Add dairy products in the last hour",
                "Layer vegetables on the bottom, meats on top"
            ]
        },
        {
            title: "Time Conversions",
            content: "Converting regular recipes to slow cooker times",
            steps: [
                "High setting: 1 hour = 2.5 hours on Low",
                "Meat cooking times vary by cut and size",
                "Most soups take 4-6 hours on High",
                "Root vegetables need longer cooking times"
            ]
        },
        {
            title: "Pro Tips",
            content: "Advanced slow cooking techniques",
            steps: [
                "Brown meat before slow cooking for better flavor",
                "Use less liquid than traditional recipes",
                "Add fresh herbs at the end",
                "Thicken sauces in the last hour"
            ]
        }
    ];

    return (
        <div className="tip-page-container">
            <header className="tip-page-header">
                <h1>Slow Cooker Tips & Tricks</h1>
                <p>Master the art of slow cooking with these helpful tips</p>
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
                <h2>Popular Slow Cooker Recipes</h2>
                {/* Add recipe cards or links here */}
            </div>
        </div>
    );
};

export default SlowCooker; 