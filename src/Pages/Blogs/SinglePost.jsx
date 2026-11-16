// src/Pages/Blogs/SinglePost.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PrismicRichText } from '@prismicio/react';
import { client } from '../../lib/prismic';
import './SinglePost.css';

export default function SinglePost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    client
      .getByUID('post', slug)
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Prismic fetch error:', err);
        setError('Failed to load this post.');
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="container single-post-status">
        <div className="loading-spinner" />
        <p>Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container single-post-status">
        <h2>Post not found</h2>
        <p>The post you're looking for doesn't exist or has been removed.</p>
        <Link to="/blogs" className="btn">
          Back to all posts
        </Link>
      </div>
    );
  }

  const formattedDate = post.data.date
    ? new Date(post.data.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : new Date(post.first_publication_date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });

  const title = post.data.title?.[0]?.text || 'Untitled Post';
  const imageUrl = post.data.main_image?.url;

  return (
    <article className="single-post-page">
      <div className="single-post-hero">
        <div className="single-post-hero-overlay" />
        <div className="container single-post-hero-content">
          <Link to="/blogs" className="back-link">
            ← Back to all posts
          </Link>
          <p className="single-post-meta">{formattedDate}</p>
          <h1>{title}</h1>
        </div>
      </div>

      <div className="container single-post-body">
        {imageUrl && (
          <img
            src={`${imageUrl}&w=1200`}
            alt={post.data.main_image.alt || title}
            className="single-post-image"
            loading="lazy"
          />
        )}

        <PrismicRichText field={post.data.content} />

        <div className="single-post-footer">
          <Link to="/blogs" className="back-btn">
            ← Back to all posts
          </Link>
          <Link to="/donation" className="support-btn">
            Support a Student
          </Link>
        </div>
      </div>
    </article>
  );
}