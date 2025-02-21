import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Categories.css';

const Categories = () => {
    const categories = [
        {
            name: "Cooking Techniques",
            count: 45,
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Cooking+Techniques",
            description: "Master essential cooking methods and kitchen skills"
        },
        {
            name: "Kitchen Equipment",
            count: 32,
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Kitchen+Equipment",
            description: "Reviews and guides for kitchen tools and appliances"
        },
        {
            name: "Food Science",
            count: 28,
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Food+Science",
            description: "Understanding the science behind cooking"
        },
        {
            name: "Global Cuisines",
            count: 56,
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Global+Cuisines",
            description: "Explore food cultures from around the world"
        }
    ];

    return (
        <div className="categories-container">
            <header className="categories-header">
                <h1>Magazine Categories</h1>
                <p>Explore our curated collection of culinary content</p>
            </header>

            <div className="categories-grid">
                {categories.map((category, index) => (
                    <Link 
                        to={`/magazine/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                        key={index} 
                        className="category-card"
                    >
                        <div className="category-image">
                            <img src={category.image} alt={category.name} />
                        </div>
                        <div className="category-content">
                            <h2>{category.name}</h2>
                            <p>{category.description}</p>
                            <span className="article-count">{category.count} articles</span>
                            <FaArrowRight className="arrow-icon" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories; 