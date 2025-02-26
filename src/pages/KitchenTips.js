import React from 'react';
import { Link } from 'react-router-dom';
import './KitchenTips.css';

const KitchenTips = () => {
    const tipCategories = [
        {
            id: 'instant-pot',
            title: 'Instant Pot',
            description: 'Master your Instant Pot with our comprehensive guides and recipes',
            image: '/images/kitchen-tips/instant-pot.jpg'
        },
        {
            id: 'air-fryer',
            title: 'Air Fryer',
            description: 'Get crispy, delicious results with less oil using your air fryer',
            image: '/images/kitchen-tips/air-fryer.jpg'
        },
        {
            id: 'slow-cooker',
            title: 'Slow Cooker',
            description: 'Set it and forget it with our favorite slow cooker techniques',
            image: '/images/kitchen-tips/slow-cooker.jpg'
        },
        {
            id: 'grilling',
            title: 'BBQ & Grilling',
            description: 'Perfect your outdoor cooking skills with expert tips',
            image: '/images/kitchen-tips/grilling.jpg'
        },
        {
            id: 'substitutions',
            title: 'Ingredient Substitutions',
            description: 'Common substitutions to save your recipe in a pinch',
            image: '/images/kitchen-tips/substitutions.jpg'
        },
        {
            id: 'equipment',
            title: 'Cooking Equipment',
            description: 'Essential tools and equipment for every kitchen',
            image: '/images/kitchen-tips/equipment.jpg'
        }
    ];

    return (
        <div className="kitchen-tips-container">
            <header className="tips-header">
                <h1>Kitchen Tips & Techniques</h1>
                <p>Master essential cooking skills and get expert advice for better meals</p>
            </header>
            <div className="tips-grid">
                {tipCategories.map((category) => (
                    <Link 
                        to={`/kitchen-tips/${category.id}`} 
                        className="tip-card" 
                        key={category.id}
                    >
                        <div className="tip-image">
                            <img src={category.image} alt={category.title} />
                        </div>
                        <div className="tip-content">
                            <h2>{category.title}</h2>
                            <p>{category.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default KitchenTips; 