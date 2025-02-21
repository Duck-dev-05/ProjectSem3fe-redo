import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaBookmark, FaClock } from 'react-icons/fa';
import './CategoryArticles.css';

const CategoryArticles = () => {
    const { categoryName } = useParams();
    const formattedCategoryName = categoryName.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const articles = [
        {
            id: 1,
            title: "Understanding Basic Knife Cuts",
            category: "Cooking Techniques",
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Knife+Cuts",
            author: "Chef Michael",
            date: "March 15, 2024",
            readTime: "10 min read",
            excerpt: "Master the fundamental knife cuts that form the basis of professional cooking..."
        },
        {
            id: 2,
            title: "The Science of Searing",
            category: "Cooking Techniques",
            image: "https://placehold.co/800x400/e33d26/ffffff?text=Searing",
            author: "Sarah Chen",
            date: "March 14, 2024",
            readTime: "8 min read",
            excerpt: "Learn how to achieve the perfect sear and why it matters for flavor..."
        }
    ];

    return (
        <div className="category-articles-container">
            <header className="category-header">
                <h1>{formattedCategoryName}</h1>
                <p>Articles related to {formattedCategoryName.toLowerCase()}</p>
            </header>

            <div className="articles-grid">
                {articles.map(article => (
                    <Link to={`/magazine/article/${article.id}`} key={article.id} className="article-card">
                        <div className="article-image">
                            <img src={article.image} alt={article.title} />
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

export default CategoryArticles; 