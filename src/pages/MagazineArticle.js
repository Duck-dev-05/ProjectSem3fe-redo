import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaBookmark, FaShare, FaFacebook, FaTwitter, FaPinterest, FaEnvelope, 
         FaHeart, FaComment, FaReply, FaEllipsisH, FaLink } from 'react-icons/fa';
import './MagazineArticle.css';
import { toast } from 'react-toastify';

const MagazineArticle = () => {
    const { id } = useParams();
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [comments, setComments] = useState([
        {
            id: 1,
            user: {
                name: "John Doe",
                avatar: "https://placehold.co/50x50/e33d26/ffffff?text=JD"
            },
            content: "This is such an insightful article! I've been experimenting with sourdough myself during the pandemic.",
            date: "2 hours ago",
            likes: 12,
            replies: [
                {
                    id: 101,
                    user: {
                        name: "Sarah Johnson",
                        avatar: "https://placehold.co/50x50/e33d26/ffffff?text=SJ"
                    },
                    content: "Thank you, John! Glad you enjoyed it. How is your sourdough journey going?",
                    date: "1 hour ago",
                    likes: 3
                }
            ]
        },
        {
            id: 2,
            user: {
                name: "Emily Chen",
                avatar: "https://placehold.co/50x50/e33d26/ffffff?text=EC"
            },
            content: "The part about digital kitchen community really resonates. I've learned so much from online cooking groups!",
            date: "5 hours ago",
            likes: 8,
            replies: []
        }
    ]);

    // Mock article data
    const article = {
        id: 1,
        title: "The Rise of Home Cooking: A New Era in the Kitchen",
        subtitle: "How the pandemic transformed our relationship with cooking and created a new generation of home chefs",
        category: "Food Trends",
        author: {
            name: "Sarah Johnson",
            avatar: "https://placehold.co/100x100/e33d26/ffffff?text=SJ",
            bio: "Food writer and culinary expert with 10+ years of experience in the industry"
        },
        date: "March 15, 2024",
        readTime: "8 min read",
        heroImage: "https://placehold.co/1200x600/e33d26/ffffff?text=Home+Cooking",
        content: [
            {
                type: "paragraph",
                text: "The global pandemic brought unprecedented changes to our daily lives, and perhaps nowhere was this transformation more evident than in our kitchens. As restaurants closed and people found themselves confined to their homes, a remarkable phenomenon emerged: the rise of home cooking."
            },
            {
                type: "subheading",
                text: "The Kitchen Renaissance"
            },
            {
                type: "paragraph",
                text: "What started as a necessity quickly evolved into a passionate hobby for many. People who had never cooked beyond basic meals suddenly found themselves experimenting with sourdough starters, perfecting their pasta-making techniques, and diving deep into the world of fermentation."
            },
            {
                type: "image",
                url: "https://placehold.co/800x400/e33d26/ffffff?text=Kitchen+Scene",
                caption: "Modern home cooks are more adventurous and willing to experiment with new techniques and cuisines"
            },
            {
                type: "quote",
                text: "Cooking has become more than just feeding ourselves—it's about connection, creativity, and finding joy in the process.",
                author: "Chef Michael Roberts"
            },
            {
                type: "subheading",
                text: "The Digital Kitchen Community"
            },
            {
                type: "paragraph",
                text: "Social media platforms became virtual cooking schools, with home cooks sharing their successes, failures, and discoveries. Instagram and TikTok were flooded with cooking tutorials, recipe hacks, and proud displays of culinary achievements."
            }
        ],
        tags: ["home cooking", "food trends", "cooking culture", "pandemic impact"],
        relatedArticles: [
            {
                id: 2,
                title: "Essential Kitchen Tools for the Modern Home Chef",
                image: "https://placehold.co/400x300/e33d26/ffffff?text=Kitchen+Tools",
                category: "Equipment"
            },
            {
                id: 3,
                title: "The Science Behind Fermentation",
                image: "https://placehold.co/400x300/e33d26/ffffff?text=Fermentation",
                category: "Food Science"
            }
        ]
    };

    const handleSave = () => {
        setIsSaved(!isSaved);
        toast.success(isSaved ? "Article removed from saved items" : "Article saved successfully");
    };

    const handleShare = (platform) => {
        try {
            const articleUrl = window.location.href;
            const articleTitle = article.title;
            
            let shareUrl;
            switch (platform) {
                case 'facebook':
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`, '_blank', 'width=600,height=400');
                    break;
                case 'twitter':
                    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(articleTitle)}`, '_blank', 'width=600,height=400');
                    break;
                case 'pinterest':
                    window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(articleUrl)}&media=${encodeURIComponent(article.heroImage)}&description=${encodeURIComponent(articleTitle)}`, '_blank', 'width=600,height=400');
                    break;
                case 'email':
                    window.location.href = `mailto:?subject=${encodeURIComponent(articleTitle)}&body=${encodeURIComponent(`Check out this article: ${articleUrl}`)}`;
                    break;
                case 'copy':
                    navigator.clipboard.writeText(articleUrl);
                    toast.success('Link copied to clipboard!');
                    break;
                default:
                    break;
            }
            
            if (platform !== 'copy') {
                toast.success(`Sharing on ${platform}...`);
            }
        } catch (error) {
            toast.error('Failed to share. Please try again.');
            console.error('Share error:', error);
        }
    };

    const CommentSection = () => (
        <section className="comments-section">
            <h3>Comments ({comments.length})</h3>
            
            <div className="comment-form-container">
                <button 
                    className="comment-button"
                    onClick={() => setShowCommentForm(!showCommentForm)}
                >
                    <FaComment /> Write a Comment
                </button>
                
                {showCommentForm && (
                    <form className="comment-form">
                        <textarea 
                            placeholder="Share your thoughts..."
                            rows="4"
                        />
                        <div className="form-actions">
                            <button type="button" onClick={() => setShowCommentForm(false)}>
                                Cancel
                            </button>
                            <button type="submit" className="submit-button">
                                Post Comment
                            </button>
                        </div>
                    </form>
                )}
            </div>

            <div className="comments-list">
                {comments.map(comment => (
                    <div key={comment.id} className="comment-card">
                        <div className="comment-header">
                            <div className="comment-user">
                                <img src={comment.user.avatar} alt={comment.user.name} />
                                <div className="user-info">
                                    <span className="user-name">{comment.user.name}</span>
                                    <span className="comment-date">{comment.date}</span>
                                </div>
                            </div>
                            <button className="more-options">
                                <FaEllipsisH />
                            </button>
                        </div>
                        
                        <div className="comment-content">
                            <p>{comment.content}</p>
                        </div>
                        
                        <div className="comment-actions">
                            <button className="action-button">
                                <FaHeart /> {comment.likes}
                            </button>
                            <button className="action-button">
                                <FaReply /> Reply
                            </button>
                        </div>

                        {comment.replies.length > 0 && (
                            <div className="comment-replies">
                                {comment.replies.map(reply => (
                                    <div key={reply.id} className="reply-card">
                                        <div className="comment-header">
                                            <div className="comment-user">
                                                <img src={reply.user.avatar} alt={reply.user.name} />
                                                <div className="user-info">
                                                    <span className="user-name">{reply.user.name}</span>
                                                    <span className="comment-date">{reply.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-content">
                                            <p>{reply.content}</p>
                                        </div>
                                        <div className="comment-actions">
                                            <button className="action-button">
                                                <FaHeart /> {reply.likes}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );

    const ShareModal = () => (
        <div className={`share-modal ${showShareModal ? 'active' : ''}`} onClick={() => setShowShareModal(false)}>
            <div className="share-modal-content" onClick={e => e.stopPropagation()}>
                <h3>Share this article</h3>
                <div className="share-options">
                    <button onClick={() => handleShare('facebook')} className="share-option facebook">
                        <FaFacebook /> Facebook
                    </button>
                    <button onClick={() => handleShare('twitter')} className="share-option twitter">
                        <FaTwitter /> Twitter
                    </button>
                    <button onClick={() => handleShare('pinterest')} className="share-option pinterest">
                        <FaPinterest /> Pinterest
                    </button>
                    <button onClick={() => handleShare('email')} className="share-option email">
                        <FaEnvelope /> Email
                    </button>
                    <button onClick={() => handleShare('copy')} className="share-option copy">
                        <FaLink /> Copy Link
                    </button>
                </div>
                <button className="close-modal" onClick={() => setShowShareModal(false)}>
                    Close
                </button>
            </div>
        </div>
    );

    return (
        <div className="article-container">
            <header className="article-header">
                <div className="category-label">{article.category}</div>
                <h1>{article.title}</h1>
                <h2>{article.subtitle}</h2>
                
                <div className="article-meta">
                    <div className="author-info">
                        <img src={article.author.avatar} alt={article.author.name} className="author-avatar" />
                        <div className="author-details">
                            <span className="author-name">{article.author.name}</span>
                            <span className="publish-date">{article.date} • {article.readTime}</span>
                        </div>
                    </div>
                    
                    <div className="article-actions">
                        <button 
                            className={`action-button ${isSaved ? 'saved' : ''}`}
                            onClick={handleSave}
                        >
                            <FaBookmark /> {isSaved ? 'Saved' : 'Save'}
                        </button>
                        <button 
                            className="action-button"
                            onClick={() => setShowShareModal(true)}
                        >
                            <FaShare /> Share
                        </button>
                    </div>
                </div>
            </header>

            <div className="hero-image">
                <img src={article.heroImage} alt={article.title} />
            </div>

            <div className="article-layout">
                <aside className="social-share">
                    <div className="share-buttons">
                        <button 
                            onClick={() => handleShare('facebook')} 
                            className="share-button facebook"
                            aria-label="Share on Facebook"
                        >
                            <FaFacebook />
                        </button>
                        <button 
                            onClick={() => handleShare('twitter')} 
                            className="share-button twitter"
                            aria-label="Share on Twitter"
                        >
                            <FaTwitter />
                        </button>
                        <button 
                            onClick={() => handleShare('pinterest')} 
                            className="share-button pinterest"
                            aria-label="Share on Pinterest"
                        >
                            <FaPinterest />
                        </button>
                        <button 
                            onClick={() => handleShare('email')} 
                            className="share-button email"
                            aria-label="Share via Email"
                        >
                            <FaEnvelope />
                        </button>
                    </div>
                </aside>

                <article className="article-content">
                    {article.content.map((block, index) => {
                        switch (block.type) {
                            case 'paragraph':
                                return <p key={index}>{block.text}</p>;
                            case 'subheading':
                                return <h3 key={index}>{block.text}</h3>;
                            case 'image':
                                return (
                                    <figure key={index} className="article-image">
                                        <img src={block.url} alt={block.caption} />
                                        <figcaption>{block.caption}</figcaption>
                                    </figure>
                                );
                            case 'quote':
                                return (
                                    <blockquote key={index} className="article-quote">
                                        <p>{block.text}</p>
                                        <cite>— {block.author}</cite>
                                    </blockquote>
                                );
                            default:
                                return null;
                        }
                    })}

                    <div className="article-tags">
                        {article.tags.map((tag, index) => (
                            <Link key={index} to={`/magazine/tag/${tag}`} className="tag">
                                #{tag}
                            </Link>
                        ))}
                    </div>

                    <div className="author-bio">
                        <img src={article.author.avatar} alt={article.author.name} className="author-avatar" />
                        <div className="bio-content">
                            <h4>{article.author.name}</h4>
                            <p>{article.author.bio}</p>
                        </div>
                    </div>
                </article>
            </div>

            <section className="related-articles">
                <h3>Related Articles</h3>
                <div className="related-grid">
                    {article.relatedArticles.map(related => (
                        <Link to={`/magazine/article/${related.id}`} key={related.id} className="related-card">
                            <div className="related-image">
                                <img src={related.image} alt={related.title} />
                            </div>
                            <div className="related-content">
                                <span className="category-label">{related.category}</span>
                                <h4>{related.title}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <CommentSection />
            <ShareModal />
        </div>
    );
};

export default MagazineArticle; 