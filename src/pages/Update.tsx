// Update.tsx
import React, { useState, useEffect, useRef } from 'react';
import { UPDATE_DATA } from '../data/UpdateData';
import '../styles/Update.css';

// UpdateCard Component
const UpdateCard = ({ update }) => {
  return (
    <div className="update-item">
      <div className="update-meta">
        <div className="update-date">{update.date}</div>
        <div className="update-author">{update.author}</div>
        <div className="update-tags">
          {update.tags.map((tag, index) => (
            <span key={index} className="update-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="update-content">
        <h3 className="update-title">{update.title}</h3>
        <p className="update-description">{update.content}</p>
        <a href="#" className="update-link">Read More</a>
      </div>
    </div>
  );
};

// UpdatesList Component
const UpdatesList = ({ initialLimit = 5, loadMoreLimit = 5 }) => {
  const [displayedUpdates, setDisplayedUpdates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);

  const fetchMoreUpdates = () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const currentLength = displayedUpdates.length;
      const nextBatch = UPDATE_DATA.slice(currentLength, currentLength + loadMoreLimit);
      
      if (nextBatch.length === 0) {
        setHasMore(false);
      } else {
        setDisplayedUpdates(prev => [...prev, ...nextBatch]);
      }
      
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    setDisplayedUpdates(UPDATE_DATA.slice(0, initialLimit));
    setHasMore(UPDATE_DATA.length > initialLimit);
  }, [initialLimit]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          fetchMoreUpdates();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loading, hasMore, displayedUpdates]);

  return (
    <>
      {displayedUpdates.map(update => (
        <UpdateCard key={update.id} update={update} />
      ))}

      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading more updates...</p>
        </div>
      )}

      {!hasMore && displayedUpdates.length > 0 && (
        <div className="end-message">
          No more updates to load
        </div>
      )}

      <div ref={observerTarget} style={{ height: '1rem' }} />
    </>
  );
};

// Main Update Component
const Update: React.FC = () => {
  return (
    <>      
      <div className="update-container">
        <div className="updates-container">
          <div className="updates-header">
            <h1>Updates</h1>
            <p>Sign up for the latest updates from our team</p>
          </div>

          <div className="updates-content">
            <div className="updates-card">
              <UpdatesList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;