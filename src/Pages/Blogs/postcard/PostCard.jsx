import { Link } from 'react-router-dom';
import './PostCard.css';

export default function PostCard({ post }) {
  const postDate = post.data.date
    ? new Date(post.data.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : new Date(post.first_publication_date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

  const title = post.data.title?.[0]?.text || 'Untitled Post';
  const imageUrl = post.data.main_image?.url;

  return (
    <Link to={`/blogs/${post.uid}`} className="post-card">
      {imageUrl && (
        <div className="post-image-wrapper">
          <img
            src={`${imageUrl}&w=600&h=400&fit=crop`}
            alt={post.data.main_image.alt || title}
            className="post-image"
            loading="lazy"
          />
        </div>
      )}

      <div className="post-content">
        <p className="post-meta">{postDate}</p>
        <h3 className="post-title">{title}</h3>
        <span className="post-read-more">
          Read Article
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </Link>
  );
}