import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css';

const Features = () => {
    const features = [
        {
            id: "dinner-fix",
            title: "Dinner Fix",
            description: "Quick and easy dinner solutions for busy weeknights",
            image: "/images/features/dinner-fix.jpg",
            articles: [
                {
                    id: 1,
                    title: "30-Minute Dinner Ideas",
                    image: "/images/features/30-min-dinner.jpg"
                },
                // More articles...
            ]
        },
        {
            id: "sweet-spot",
            title: "Sweet Spot",
            description: "Delicious desserts and baking inspiration",
            image: "/images/features/sweet-spot.jpg",
            articles: [
                {
                    id: 2,
                    title: "Best Cookie Recipes",
                    image: "/images/features/cookies.jpg"
                },
                // More articles...
            ]
        },
        {
            id: "in-the-kitchen",
            title: "In the Kitchen",
            description: "Expert tips and techniques for better cooking",
            image: "/images/features/kitchen.jpg",
            articles: [
                {
                    id: 3,
                    title: "Essential Cooking Tools",
                    image: "/images/features/tools.jpg"
                },
                // More articles...
            ]
        }
    ];

    return (
        <div className="features-container">
            <header className="features-header">
                <h1>Featured Content</h1>
                <p>Discover our latest features and cooking inspiration</p>
            </header>

            <div className="features-grid">
                {features.map(feature => (
                    <section key={feature.id} className="feature-section">
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                        <div className="feature-articles">
                            {feature.articles.map(article => (
                                <Link 
                                    to={`/features/${feature.id}/${article.id}`} 
                                    key={article.id} 
                                    className="feature-article"
                                >
                                    <img src={article.image} alt={article.title} />
                                    <h3>{article.title}</h3>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Features; 