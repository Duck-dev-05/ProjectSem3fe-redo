import React from 'react';
import './KitchenTipPage.css';

const CookingEquipment = () => {
    const equipmentTips = [
        {
            title: "Essential Knives",
            content: "A good chef's knife is essential for any kitchen.",
            steps: [
                "Invest in a quality chef's knife.",
                "Keep your knives sharp for safety and efficiency.",
                "Learn proper knife techniques to enhance your skills."
            ]
        },
        {
            title: "Cookware Basics",
            content: "Understanding your cookware can improve your cooking.",
            steps: [
                "Use non-stick pans for easy cleanup.",
                "Cast iron skillets are great for searing and baking.",
                "Stainless steel pans are ideal for browning and deglazing."
            ]
        },
        {
            title: "Small Appliances",
            content: "Small appliances can save time and effort.",
            steps: [
                "A slow cooker is perfect for set-it-and-forget-it meals.",
                "An immersion blender is great for soups and sauces.",
                "A food processor can speed up prep work."
            ]
        }
    ];

    return (
        <div className="tip-page-container">
            <header className="tip-page-header">
                <h1>Cooking Equipment Tips</h1>
                <p>Essential tools and equipment for every kitchen</p>
            </header>

            <div className="tip-sections">
                {equipmentTips.map((tip, index) => (
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
        </div>
    );
};

export default CookingEquipment; 