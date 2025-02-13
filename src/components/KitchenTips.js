import React from 'react';
import './KitchenTips.css';

function KitchenTips() {
  // List of tip categories inspired by Allrecipes Kitchen Tips
  const tipsCategories = [
    { id: 1, title: "Instant Pot", description: "Find tips and recipes for your Instant Pot.", image: '/images/instant-pot.jpg' },
    { id: 2, title: "Air Fryer", description: "Discover creative air fryer recipes and hacks.", image: '/images/air-fryer.jpg' },
    { id: 3, title: "Slow Cooker", description: "Cook hearty meals with these slow cooker tips.", image: '/images/slow-cooker.jpg' },
    { id: 4, title: "Our Favorite Products", description: "Check out top kitchen gadgets and products.", image: '/images/favorite-products.jpg' },
    { id: 5, title: "BBQ & Grilling", description: "Master the grill with our best tips.", image: '/images/bbq-grilling.jpg' },
    { id: 6, title: "Cooking by Equipment", description: "Learn techniques for various kitchen equipment.", image: '/images/equipment.jpg' },
    { id: 7, title: "Ingredient Substitutions", description: "Smart swaps when you run out of ingredients.", image: '/images/substitutions.jpg' },
    { id: 8, title: "View All", description: "Browse all kitchen tips and tricks.", image: '/images/view-all.jpg' },
  ];

  return (
    <div className="kitchen-tips-page">
      <h1>Kitchen Tips</h1>
      <div className="tips-grid">
        {tipsCategories.map((category) => (
          <div key={category.id} className="tip-card">
            <img src={category.image} alt={category.title} />
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            <a href={`/kitchen-tips/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>Explore</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KitchenTips;