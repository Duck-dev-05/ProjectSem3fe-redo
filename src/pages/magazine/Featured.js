import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark, FaClock } from 'react-icons/fa';
import './Featured.css';

const Featured = () => {
    const featuredArticles = [
        {
            id: 1,
            title: "The Art of Fermentation",
            category: "Food Science",
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Fermentation",
            author: "Dr. Sarah Chen",
            date: "March 15, 2024",
            readTime: "12 min read",
            excerpt: "Discover the science and tradition behind fermented foods..."
        },
        // Add more featured articles...
    ];

    return (
        <div className="featured-container">
            <header className="featured-header">
                <h1>Featured Articles</h1>
                <p>Hand-picked content from our editors</p>
            </header>

            <div className="featured-grid">
                {featuredArticles.map(article => (
                    <Link to={`/magazine/article/${article.id}`} key={article.id} className="featured-article-card">
                        <div className="article-image">
                            <img src={article.image} alt={article.title} />
                            <span className="category-tag">{article.category}</span>
                            <button className="bookmark-button">
                                <FaBookmark />
                            </button>
                        </div>
                        <div className="article-content">
                            <h2>{article.title}</h2>
                            <p>{article.excerpt}</p>
                            <div className="article-meta">
                                <span className="author">{article.author}</span>
                                <span className="date">{article.date}</span>
                                <span className="read-time">
                                    <FaClock /> {article.readTime}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Featured; 