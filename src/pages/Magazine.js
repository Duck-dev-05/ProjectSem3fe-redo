import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBookmark } from 'react-icons/fa';
import './Magazine.css';

const Magazine = () => {
    const featuredArticles = [
        {
            id: 1,
            title: "The Rise of Home Cooking: A New Era in the Kitchen",
            category: "Food Trends",
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Home+Cooking",
            author: "Sarah Johnson",
            date: "March 2024",
            excerpt: "How the pandemic transformed our relationship with cooking and created a new generation of home chefs."
        },
        {
            id: 2,
            title: "Sustainable Eating: A Guide to Eco-Friendly Cooking",
            category: "Sustainability",
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Sustainable+Eating",
            author: "Michael Chen",
            date: "March 2024",
            excerpt: "Practical tips for reducing your carbon footprint while creating delicious meals."
        }
    ];

    const latestArticles = [
        {
            id: 3,
            title: "The Science of Sourdough",
            category: "Baking",
            image: "https://placehold.co/400x300/e33d26/ffffff?text=Sourdough",
            readTime: "8 min read"
        },
        {
            id: 4,
            title: "Kitchen Tools Worth the Investment",
            category: "Equipment",
            image: "https://placehold.co/400x300/e33d26/ffffff?text=Kitchen+Tools",
            readTime: "6 min read"
        },
        {
            id: 5,
            title: "Global Flavors: Exploring World Cuisines",
            category: "World Food",
            image: "https://placehold.co/400x300/e33d26/ffffff?text=World+Cuisines",
            readTime: "10 min read"
        }
    ];

    const categories = [
        { name: "Food Science", count: 24 },
        { name: "Cooking Tips", count: 45 },
        { name: "Restaurant Reviews", count: 18 },
        { name: "Chef Interviews", count: 12 },
        { name: "Food History", count: 15 },
        { name: "Kitchen Equipment", count: 20 }
    ];

    return (
        <div className="magazine-container">
            <header className="magazine-header">
                <h1>JamesThew Magazine</h1>
                <p>Discover stories, tips, and expertise from the culinary world</p>
                <nav className="magazine-nav">
                    <Link to="/magazine/featured">Featured</Link>
                    <Link to="/magazine/categories">Categories</Link>
                    <Link to="/magazine/latest">Latest</Link>
                    <Link to="/magazine/popular">Popular</Link>
                </nav>
            </header>

            <section className="featured-articles">
                <h2>Featured Stories</h2>
                <div className="featured-grid">
                    {featuredArticles.map(article => (
                        <Link to={`/magazine/article/${article.id}`} key={article.id} className="featured-card">
                            <div className="featured-image">
                                <img src={article.image} alt={article.title} />
                                <span className="category-tag">{article.category}</span>
                            </div>
                            <div className="featured-content">
                                <h3>{article.title}</h3>
                                <p className="excerpt">{article.excerpt}</p>
                                <div className="article-meta">
                                    <span>{article.author}</span>
                                    <span>•</span>
                                    <span>{article.date}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <div className="magazine-layout">
                <main className="articles-section">
                    <h2>Latest Articles</h2>
                    <div className="articles-grid">
                        {latestArticles.map(article => (
                            <Link to={`/magazine/article/${article.id}`} key={article.id} className="article-card">
                                <div className="article-image">
                                    <img src={article.image} alt={article.title} />
                                    <button className="bookmark-button">
                                        <FaBookmark />
                                    </button>
                                </div>
                                <div className="article-content">
                                    <span className="category-label">{article.category}</span>
                                    <h3>{article.title}</h3>
                                    <span className="read-time">{article.readTime}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </main>

                <aside className="magazine-sidebar">
                    <div className="categories-widget">
                        <h3>Categories</h3>
                        <ul className="categories-list">
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <Link to={`/magazine/category/${category.name.toLowerCase()}`} className="category-link">
                                        <span>{category.name}</span>
                                        <span className="article-count">{category.count}</span>
                                        <FaArrowRight className="arrow-icon" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Magazine; 