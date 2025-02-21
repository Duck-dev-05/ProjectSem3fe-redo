import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark, FaClock } from 'react-icons/fa';
import './Latest.css';

const Latest = () => {
    const latestArticles = [
        {
            id: 1,
            title: "Modern Kitchen Gadgets Worth Your Investment",
            category: "Equipment",
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Kitchen+Gadgets",
            author: "James Wilson",
            date: "March 20, 2024",
            readTime: "8 min read",
            excerpt: "Discover the latest kitchen innovations that can transform your cooking experience..."
        },
        {
            id: 2,
            title: "Mastering the Art of Sous Vide",
            category: "Techniques",
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Sous+Vide",
            author: "Chef Sarah",
            date: "March 19, 2024",
            readTime: "12 min read",
            excerpt: "Learn how to achieve restaurant-quality results with sous vide cooking..."
        },
        {
            id: 3,
            title: "Spring Vegetables Guide",
            category: "Ingredients",
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Spring+Veggies",
            author: "Maria Garcia",
            date: "March 18, 2024",
            readTime: "10 min read",
            excerpt: "Your complete guide to selecting and preparing spring vegetables..."
        }
    ];

    return (
        <div className="latest-container">
            <header className="latest-header">
                <h1>Latest Articles</h1>
                <p>Stay up to date with our newest content</p>
            </header>

            <div className="latest-grid">
                {latestArticles.map(article => (
                    <Link to={`/magazine/article/${article.id}`} key={article.id} className="latest-article-card">
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

export default Latest; 