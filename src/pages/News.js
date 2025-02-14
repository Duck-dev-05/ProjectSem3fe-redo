import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Replace with your actual news API endpoint
    axios.get('https://api.example.com/news')
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching the news data:', error);
      });
  }, []);

  return (
    <div>
      <h1>News Page</h1>
      {articles.length === 0 ? (
        <p>Loading news...</p>
      ) : (
        <ul>
          {articles.map(article => (
            <li key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News; 