import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {
    const newsCategories = [
        {
            category: "Celebrity & Entertainment",
            articles: [
                {
                    id: 1,
                    title: "Celebrity Chef's New Restaurant Opening",
                    image: "/images/news/celebrity-chef.jpg",
                    excerpt: "Famous chef announces new dining concept...",
                    date: "March 15, 2024"
                },
                // More articles...
            ]
        },
        {
            category: "Fast Food",
            articles: [
                {
                    id: 2,
                    title: "Popular Chain Introduces New Menu Items",
                    image: "/images/news/fast-food.jpg",
                    excerpt: "New seasonal offerings hit stores nationwide...",
                    date: "March 14, 2024"
                },
                // More articles...
            ]
        },
        {
            category: "Grocery",
            articles: [
                {
                    id: 3,
                    title: "Major Supermarket Chain Expands Organic Section",
                    image: "/images/news/grocery.jpg",
                    excerpt: "New organic products added to shelves...",
                    date: "March 13, 2024"
                },
                // More articles...
            ]
        }
    ];

    return (
        <div className="news-container">
            <header className="news-header">
                <h1>Food News</h1>
                <p>Stay up to date with the latest food trends and industry news</p>
            </header>

            {newsCategories.map((category, index) => (
                <section key={index} className="news-category">
                    <h2>{category.category}</h2>
                    <div className="articles-grid">
                        {category.articles.map(article => (
                            <Link to={`/news/${article.id}`} key={article.id} className="article-card">
                                <div className="article-image">
                                    <img src={article.image} alt={article.title} />
                                </div>
                                <div className="article-content">
                                    <h3>{article.title}</h3>
                                    <p>{article.excerpt}</p>
                                    <span className="article-date">{article.date}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default News; 