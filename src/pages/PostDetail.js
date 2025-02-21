import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHeart, FaComment, FaBookmark, FaShare, FaClock, FaPrint, FaUtensils } from 'react-icons/fa';
import './PostDetail.css';

const PostDetail = () => {
    const { id } = useParams();

    // Mock data for the post detail
    const post = {
        id: 1,
        title: "Sheet Pan Lemon Herb Chicken & Vegetables",
        author: {
            name: "Chef Michael",
            avatar: "https://placehold.co/100x100/e33d26/ffffff?text=CM",
            verified: true,
            followers: "12.5K"
        },
        datePublished: "March 15, 2024",
        image: "https://placehold.co/1200x600/e33d26/ffffff?text=Lemon+Herb+Chicken",
        rating: 4.9,
        reviews: 328,
        prepTime: "15 mins",
        cookTime: "30 mins",
        servings: 4,
        difficulty: "Easy",
        description: "A complete weeknight dinner with tender chicken and roasted vegetables, brightened with lemon and fresh herbs. Perfect for busy families!",
        ingredients: [
            "4 chicken breasts",
            "2 cups baby potatoes, halved",
            "2 cups carrots, chopped",
            "1 large lemon, sliced",
            "4 tablespoons olive oil",
            "2 tablespoons fresh rosemary",
            "2 tablespoons fresh thyme",
            "4 cloves garlic, minced",
            "Salt and pepper to taste"
        ],
        instructions: [
            {
                step: 1,
                text: "Preheat oven to 425°F (220°C). Line a large sheet pan with parchment paper."
            },
            {
                step: 2,
                text: "In a small bowl, combine olive oil, minced garlic, chopped rosemary, and thyme."
            },
            {
                step: 3,
                text: "Arrange chicken, potatoes, and carrots on the sheet pan. Drizzle with herb mixture."
            },
            {
                step: 4,
                text: "Top with lemon slices, season with salt and pepper."
            },
            {
                step: 5,
                text: "Roast for 25-30 minutes, or until chicken is cooked through and vegetables are tender."
            }
        ],
        tips: [
            "Use similar-sized vegetable pieces for even cooking",
            "Pat chicken dry before seasoning for better browning",
            "Let rest 5 minutes before serving"
        ],
        nutrition: {
            calories: "385",
            protein: "42g",
            carbs: "25g",
            fat: "18g"
        },
        tags: ["sheet-pan", "chicken", "easy-dinner", "healthy", "meal-prep"],
        relatedRecipes: [
            {
                id: 2,
                title: "Mediterranean Sheet Pan Salmon",
                image: "https://placehold.co/300x200/e33d26/ffffff?text=Med+Salmon",
                time: "30 mins"
            },
            {
                id: 3,
                title: "Sheet Pan Sausage and Vegetables",
                image: "https://placehold.co/300x200/e33d26/ffffff?text=Sausage+Veggies",
                time: "45 mins"
            }
        ]
    };

    return (
        <div className="post-detail-container">
            <header className="post-detail-header">
                <div className="header-content">
                    <h1>{post.title}</h1>
                    <div className="author-info">
                        <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
                        <div className="author-details">
                            <h3>{post.author.name}</h3>
                            <span className="publish-date">{post.datePublished}</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="post-detail-content">
                <div className="recipe-meta-bar">
                    <div className="meta-item">
                        <FaClock />
                        <span>Prep: {post.prepTime}</span>
                    </div>
                    <div className="meta-item">
                        <FaUtensils />
                        <span>Cook: {post.cookTime}</span>
                    </div>
                    <div className="meta-item">
                        <span>Servings: {post.servings}</span>
                    </div>
                    <div className="meta-item">
                        <span>Difficulty: {post.difficulty}</span>
                    </div>
                </div>

                <div className="main-image">
                    <img src={post.image} alt={post.title} />
                </div>

                <div className="action-bar">
                    <button className="action-button">
                        <FaHeart /> Save
                    </button>
                    <button className="action-button">
                        <FaPrint /> Print
                    </button>
                    <button className="action-button">
                        <FaShare /> Share
                    </button>
                </div>

                <div className="recipe-description">
                    <p>{post.description}</p>
                </div>

                <div className="recipe-content">
                    <section className="ingredients-section">
                        <h2>Ingredients</h2>
                        <ul className="ingredients-list">
                            {post.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="instructions-section">
                        <h2>Instructions</h2>
                        <div className="instructions-list">
                            {post.instructions.map((instruction) => (
                                <div key={instruction.step} className="instruction-step">
                                    <span className="step-number">{instruction.step}</span>
                                    <p>{instruction.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="tips-section">
                        <h2>Recipe Tips</h2>
                        <ul className="tips-list">
                            {post.tips.map((tip, index) => (
                                <li key={index}>{tip}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="nutrition-section">
                        <h2>Nutrition Information</h2>
                        <div className="nutrition-grid">
                            {Object.entries(post.nutrition).map(([key, value]) => (
                                <div key={key} className="nutrition-item">
                                    <span className="nutrition-value">{value}</span>
                                    <span className="nutrition-label">{key}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <section className="related-recipes">
                    <h2>You Might Also Like</h2>
                    <div className="related-grid">
                        {post.relatedRecipes.map(recipe => (
                            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="related-card">
                                <div className="related-image">
                                    <img src={recipe.image} alt={recipe.title} />
                                </div>
                                <div className="related-content">
                                    <h3>{recipe.title}</h3>
                                    <span className="time">{recipe.time}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PostDetail; 