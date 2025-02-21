import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark, FaClock, FaHeart } from 'react-icons/fa';
import './Popular.css';

const Popular = () => {
    const popularArticles = [
        {
            id: 1,
            title: "Essential Knife Skills Every Home Chef Should Master",
            category: "Cooking Techniques",
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Knife+Skills",
            author: "Chef Michael Roberts",
            date: "March 10, 2024",
            readTime: "15 min read",
            likes: 1250,
            excerpt: "Learn the fundamental knife techniques that will improve your cooking efficiency..."
        },
        {
            id: 2,
            title: "The Ultimate Guide to Sourdough Bread",
            category: "Baking",
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Sourdough",
            author: "Emma Baker",
            date: "March 8, 2024",
            readTime: "20 min read",
            likes: 980,
            excerpt: "Everything you need to know about making perfect sourdough bread at home..."
        },
        {
            id: 3,
            title: "One-Pan Dinner Recipes",
            category: "Quick Meals",
            image: "https://placehold.co/800x400/e33d26/ffffff?text=One+Pan",
            author: "Lisa Chen",
            date: "March 5, 2024",
            readTime: "10 min read",
            likes: 856,
            excerpt: "Delicious and easy dinner recipes that only require one pan..."
        }
    ];

    return (
        <div className="popular-container">
            <header className="popular-header">
                <h1>Popular Articles</h1>
                <p>Most loved content by our readers</p>
            </header>

            <div className="popular-grid">
                {popularArticles.map(article => (
                    <Link to={`/magazine/article/${article.id}`} key={article.id} className="popular-article-card">
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
                                <span className="likes">
                                    <FaHeart /> {article.likes}
                                </span>
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

export default Popular; 