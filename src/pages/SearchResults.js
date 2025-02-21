import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUser, FaClock, FaHeart, FaComment, FaSearch } from 'react-icons/fa';
import './SearchResults.css';

const SearchResults = () => {
    const { query } = useParams();
    const [activeFilter, setActiveFilter] = useState('all');

    const searchResults = {
        recipes: [
            {
                id: 1,
                title: "Sheet Pan Lemon Herb Chicken & Vegetables",
                image: "https://placehold.co/600x400/e33d26/ffffff?text=Lemon+Herb+Chicken",
                rating: 4.9,
                reviews: 328,
                time: "45 mins",
                difficulty: "Easy",
                author: "Chef Michael",
                description: "A complete dinner with tender chicken, roasted vegetables, and bright lemon herb flavors"
            },
            {
                id: 2,
                title: "Mediterranean Sheet Pan Salmon",
                image: "https://placehold.co/600x400/e33d26/ffffff?text=Med+Salmon",
                rating: 4.8,
                reviews: 245,
                time: "30 mins",
                difficulty: "Easy",
                author: "Sarah's Kitchen",
                description: "Flaky salmon with colorful vegetables and Mediterranean seasonings"
            },
            {
                id: 3,
                title: "Sheet Pan Sausage and Root Vegetables",
                image: "https://placehold.co/600x400/e33d26/ffffff?text=Sausage+Veggies",
                rating: 4.7,
                reviews: 189,
                time: "50 mins",
                difficulty: "Easy",
                author: "Comfort Food Kitchen",
                description: "Hearty winter meal with roasted sausages and seasonal root vegetables"
            },
            {
                id: 4,
                title: "Sheet Pan Fajitas",
                image: "https://placehold.co/600x400/e33d26/ffffff?text=Sheet+Pan+Fajitas",
                rating: 4.8,
                reviews: 276,
                time: "35 mins",
                difficulty: "Easy",
                author: "Mexican Cuisine",
                description: "Colorful bell peppers and seasoned chicken for easy fajitas"
            }
        ],
        articles: [
            {
                id: 1,
                title: "Sheet Pan Dinner Tips & Tricks",
                category: "Cooking Tips",
                image: "https://placehold.co/600x400/e33d26/ffffff?text=Sheet+Pan+Tips",
                readTime: "5 min read",
                description: "Master the art of sheet pan cooking with these essential tips"
            },
            {
                id: 2,
                title: "Best Sheet Pans for Perfect Results",
                category: "Kitchen Equipment",
                image: "https://placehold.co/600x400/e33d26/ffffff?text=Best+Sheet+Pans",
                readTime: "7 min read",
                description: "Our top picks for reliable sheet pans that deliver great results"
            }
        ],
        collections: [
            {
                id: 1,
                title: "30-Minute Sheet Pan Dinners",
                recipeCount: 15,
                image: "https://placehold.co/600x400/e33d26/ffffff?text=Quick+Sheet+Pan",
                description: "Quick and easy sheet pan meals for busy weeknights"
            },
            {
                id: 2,
                title: "Vegetarian Sheet Pan Meals",
                recipeCount: 12,
                image: "https://placehold.co/600x400/e33d26/ffffff?text=Veggie+Sheet+Pan",
                description: "Meatless sheet pan dinners packed with flavor"
            }
        ],
        relatedSearches: [
            "Sheet Pan Chicken Recipes",
            "One Pan Fish Dinners",
            "Roasted Vegetable Combinations",
            "Quick Sheet Pan Meals",
            "Sheet Pan Meal Prep Ideas",
            "Mediterranean Sheet Pan Dinners"
        ],
        tips: [
            {
                title: "Perfect Temperature Guide",
                content: "Different foods require different temperatures. Here's your guide to perfect roasting."
            },
            {
                title: "Timing is Everything",
                content: "Learn when to add different ingredients for even cooking."
            },
            {
                title: "Best Vegetables for Sheet Pan Meals",
                content: "Which vegetables work best and how to cut them for even cooking."
            }
        ],
        seasonalSuggestions: {
            title: "Seasonal Sheet Pan Ideas",
            items: [
                {
                    season: "Spring",
                    recipe: "Sheet Pan Asparagus & Lemon Chicken"
                },
                {
                    season: "Summer",
                    recipe: "Mediterranean Vegetable & Fish Sheet Pan Dinner"
                },
                {
                    season: "Fall",
                    recipe: "Autumn Root Vegetable & Sausage Bake"
                },
                {
                    season: "Winter",
                    recipe: "Roasted Winter Squash & Chicken Sheet Pan Dinner"
                }
            ]
        }
    };

    const filters = [
        { id: 'all', label: 'All Results' },
        { id: 'recipes', label: 'Recipes' },
        { id: 'articles', label: 'Articles' },
        { id: 'collections', label: 'Collections' },
        { id: 'posts', label: 'Community Posts' }
    ];

    const renderRatingStars = (rating) => {
        return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
    };

    return (
        <div className="search-results-container">
            <header className="search-results-header">
                <h1>Search Results for "{query}"</h1>
                <p className="search-suggestion">
                    No exact matches found. Here are some similar recipes you might like:
                </p>
                <div className="result-filters">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </header>

            {(activeFilter === 'all' || activeFilter === 'recipes') && (
                <section className="results-section">
                    <h2>Recipes</h2>
                    <div className="recipe-grid">
                        {searchResults.recipes.map(recipe => (
                            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
                                <div className="recipe-image">
                                    <img src={recipe.image} alt={recipe.title} />
                                </div>
                                <div className="recipe-content">
                                    <h3>{recipe.title}</h3>
                                    <div className="recipe-meta">
                                        <span className="rating">
                                            {renderRatingStars(recipe.rating)}
                                            <span className="review-count">({recipe.reviews})</span>
                                        </span>
                                        <span className="time">{recipe.time}</span>
                                        <span className="difficulty">{recipe.difficulty}</span>
                                    </div>
                                    <div className="recipe-author">By {recipe.author}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {(activeFilter === 'all' || activeFilter === 'articles') && (
                <section className="results-section">
                    <h2>Articles</h2>
                    <div className="article-grid">
                        {searchResults.articles.map(article => (
                            <Link to={`/article/${article.id}`} key={article.id} className="article-card">
                                <div className="article-image">
                                    <img src={article.image} alt={article.title} />
                                </div>
                                <div className="article-content">
                                    <span className="article-category">{article.category}</span>
                                    <h3>{article.title}</h3>
                                    <span className="read-time">{article.readTime}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {(activeFilter === 'all' || activeFilter === 'collections') && (
                <section className="results-section">
                    <h2>Collections</h2>
                    <div className="collection-grid">
                        {searchResults.collections.map(collection => (
                            <Link to={`/collection/${collection.id}`} key={collection.id} className="collection-card">
                                <div className="collection-image">
                                    <img src={collection.image} alt={collection.title} />
                                </div>
                                <div className="collection-content">
                                    <h3>{collection.title}</h3>
                                    <span className="recipe-count">{collection.recipeCount} recipes</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <section className="results-section">
                <h2>Quick Tips for Sheet Pan Success</h2>
                <div className="tips-grid">
                    {searchResults.tips.map((tip, index) => (
                        <div key={index} className="tip-card">
                            <h3>{tip.title}</h3>
                            <p>{tip.content}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="results-section">
                <h2>Seasonal Ideas</h2>
                <div className="seasonal-grid">
                    {searchResults.seasonalSuggestions.items.map((item, index) => (
                        <div key={index} className="seasonal-card">
                            <span className="season-tag">{item.season}</span>
                            <h3>{item.recipe}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section className="results-section">
                <h2>Suggested Recipes</h2>
                <div className="recipe-grid">
                    {searchResults.recipes.map(recipe => (
                        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
                            <div className="recipe-image">
                                <img src={recipe.image} alt={recipe.title} />
                            </div>
                            <div className="recipe-content">
                                <h3>{recipe.title}</h3>
                                <div className="recipe-meta">
                                    <span className="rating">
                                        {renderRatingStars(recipe.rating)}
                                        <span className="review-count">({recipe.reviews})</span>
                                    </span>
                                    <span className="time">{recipe.time}</span>
                                    <span className="difficulty">{recipe.difficulty}</span>
                                </div>
                                <div className="recipe-author">By {recipe.author}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="results-section">
                <h2>Related Searches</h2>
                <div className="related-searches">
                    {searchResults.relatedSearches.map((search, index) => (
                        <Link 
                            to={`/search/${encodeURIComponent(search)}`} 
                            key={index} 
                            className="related-search-item"
                        >
                            <FaSearch className="search-icon" />
                            {search}
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SearchResults; 