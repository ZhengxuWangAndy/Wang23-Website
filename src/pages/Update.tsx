// Update.tsx
import React, { useState, useEffect, useRef } from 'react';

// Dummy data
const DUMMY_UPDATES = [
  {
    id: 1,
    date: 'Mon June 24 2025',
    author: 'Andy Wang',
    tags: ['Company', 'Overview'],
    title: 'Our System Overview',
    content: 'At Wang23 LLC, websites are where businesses connect and grow. Founded with a passion for evolving alongside cutting-edge technology, Wang23 partners with clients to bring their digital presence to life through clean, strategic, and scalable web solutions.'
  },
  {
    id: 2,
    date: 'Mon June 30 2025',
    author: 'Andy Wang',
    tags: ['Branding', 'Identity'],
    title: 'Brand Guidelines',
    content: 'Our brand identity is designed to reflect Wang23\'s balance between creativity and precision. The brand guidelines outline how to use our logo, color palette, and typography to ensure a consistent look and feel across all platforms.'
  },
  {
    id: 3,
    date: 'Mon July 25 2025',
    author: 'Andy Wang',
    tags: ['UI/UX', 'Best Practices'],
    title: 'Design guidelines',
    content: 'Our design guidelines ensure that every digital experience we create feels intuitive, accessible, and scalable.'
  },
  {
    id: 4,
    date: 'Mon Aug 20 2025',
    author: 'Design Team',
    tags: ['Logo', 'Visual Identity'],
    title: 'Logo Updates',
    content: 'The logo is constructed from a series of interlocking geometric shapes, forming a bold and modern composition. The use of polygons and rectangles conveys precision, structure, and reliability, symbolizing a strong foundation.'
  },
  {
    id: 5,
    date: 'Mon Sept 24 2025',
    author: 'Andy Wang',
    tags: ['Team', 'Announcements'],
    title: 'Company Updates',
    content: 'As Wang23 expands its design and development initiatives, we\'re constantly evolving launching new features, refining our processes, and celebrating the people behind our work.'
  },
  {
    id: 6,
    date: 'Mon Oct 10 2025',
    author: 'Sarah Chen',
    tags: ['Development', 'Tech Stack'],
    title: 'New Technology Adoption',
    content: 'We\'re excited to announce the adoption of new technologies in our stack, including advanced React patterns and modern CSS frameworks that will enhance our development workflow.'
  },
  {
    id: 7,
    date: 'Tue Oct 15 2025',
    author: 'Mike Johnson',
    tags: ['Product', 'Features'],
    title: 'Q4 Product Roadmap',
    content: 'Our Q4 roadmap focuses on user experience improvements, performance optimization, and introducing new collaboration features requested by our clients.'
  },
  {
    id: 8,
    date: 'Wed Oct 22 2025',
    author: 'Emily Rodriguez',
    tags: ['Design', 'UI/UX'],
    title: 'Accessibility Improvements',
    content: 'We\'ve implemented comprehensive accessibility updates across all our platforms, ensuring WCAG 2.1 AA compliance and improving the experience for all users.'
  },
  {
    id: 9,
    date: 'Thu Oct 30 2025',
    author: 'Andy Wang',
    tags: ['Company', 'Culture'],
    title: 'Team Expansion',
    content: 'Wang23 is growing! We\'re welcoming five new team members across design, development, and project management to support our expanding client base.'
  },
  {
    id: 10,
    date: 'Fri Nov 5 2025',
    author: 'David Kim',
    tags: ['Development', 'Performance'],
    title: 'Performance Optimization',
    content: 'Our latest performance updates have reduced average page load times by 40%, implementing lazy loading, code splitting, and optimized asset delivery.'
  },
  {
    id: 11,
    date: 'Mon Nov 12 2025',
    author: 'Lisa Martinez',
    tags: ['Marketing', 'Strategy'],
    title: 'Content Strategy Updates',
    content: 'Our new content strategy focuses on storytelling, client success stories, and technical thought leadership to better connect with our audience.'
  },
  {
    id: 12,
    date: 'Wed Nov 20 2025',
    author: 'Andy Wang',
    tags: ['Product', 'Launch'],
    title: 'New Client Portal',
    content: 'Introducing our new client portal with real-time project tracking, collaborative feedback tools, and integrated communication features.'
  },
  {
    id: 13,
    date: 'Fri Nov 28 2025',
    author: 'Tom Anderson',
    tags: ['Development', 'Security'],
    title: 'Security Enhancements',
    content: 'We\'ve implemented enhanced security measures including two-factor authentication, encrypted data storage, and regular security audits.'
  },
  {
    id: 14,
    date: 'Mon Dec 2 2025',
    author: 'Jessica Wu',
    tags: ['Design', 'Trends'],
    title: 'Design Trends 2026',
    content: 'Looking ahead to 2026, we\'re exploring minimalist interfaces, micro-interactions, and immersive 3D experiences in web design.'
  },
  {
    id: 15,
    date: 'Thu Dec 12 2025',
    author: 'Andy Wang',
    tags: ['Company', 'Milestone'],
    title: 'Year in Review',
    content: 'Reflecting on an incredible year of growth, innovation, and successful client partnerships. Thank you to our amazing team and clients!'
  }
];

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
      const nextBatch = DUMMY_UPDATES.slice(currentLength, currentLength + loadMoreLimit);
      
      if (nextBatch.length === 0) {
        setHasMore(false);
      } else {
        setDisplayedUpdates(prev => [...prev, ...nextBatch]);
      }
      
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    setDisplayedUpdates(DUMMY_UPDATES.slice(0, initialLimit));
    setHasMore(DUMMY_UPDATES.length > initialLimit);
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
      <style>{`
        /* Updates Feed Custom Styles */
        .update-container {
          width: 100vw;
          overflow-x: hidden;
        }

        .updates-container {
          min-height: 100vh;
          background: white;
        }

        .updates-header {
          width: 1512px;
          height: 333px;
          background: linear-gradient(106.96deg, rgba(128, 198, 248, 0.2) 24.67%, rgba(200, 53, 248, 0.2) 112.48%);
          opacity: 1;
          padding: 3rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }

        .updates-header h1 {
          font-weight: 700;
          font-style: normal;
          font-size: 48px;
          line-height: 100%;
          letter-spacing: 0%;
          text-align: center;
          color: #111827;
          margin: 0 0 0.5rem 0;
        }

        .updates-header p {
          font-weight: 400;
          font-style: normal;
          font-size: 24px;
          line-height: 100%;
          letter-spacing: 0%;
          text-align: center;
          color: #374151;
          margin: 0;
        }

        .updates-content {
          width: 1120px;
          height: 1011px;
          opacity: 1;
          gap: 10px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .updates-card {
          width: 1120px;
          height: auto;
          opacity: 1;
          padding: 10px;
          background: white;
          border-radius: 0.5rem;
        }

        .update-item {
          padding: 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          gap: 20px;
          min-height: 203px;
        }

        .update-item:last-child {
          border-bottom: none;
        }

        .update-meta {
          width: 341px;
          height: auto;
          opacity: 1;
          padding-top: 0;
          padding-bottom: 0;
          gap: 10px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .update-date {
          font-weight: 600;
          font-style: normal;
          font-size: 16px;
          line-height: 100%;
          letter-spacing: 0%;
          text-align: center;
          color: #000000;
          margin-bottom: 0.25rem;
        }

        .update-author {
          font-weight: 400;
          font-style: normal;
          font-size: 16px;
          line-height: 100%;
          letter-spacing: 0%;
          text-align: center;
          color: #000000;
          margin-bottom: 0.75rem;
        }

        .update-tags {
          width: 341px;
          height: 55px;
          opacity: 1;
          padding-top: 10px;
          padding-bottom: 10px;
          gap: 10px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .update-tag {
          width: auto;
          height: 35px;
          opacity: 1;
          border-radius: 100px;
          gap: 10px;
          padding: 8px 16px;
          border: 1px solid #114FEE;
          color: #114FEE;
          background: white;
          font-weight: 400;
          font-style: normal;
          font-size: 16px;
          line-height: 100%;
          letter-spacing: 0%;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .update-tag:hover {
          background: #eff6ff;
        }

        .update-content {
          width: auto;
          height: auto;
          opacity: 1;
          padding-top: 0;
          padding-right: 0;
          padding-bottom: 0;
          padding-left: 0;
          gap: 10px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .update-title {
          font-weight: 600;
          font-style: normal;
          font-size: 20px;
          line-height: 100%;
          letter-spacing: 0%;
          color: #000000;
          margin: 0 0 10px 0;
        }

        .update-description {
          font-weight: 400;
          font-style: normal;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: 0%;
          color: #000000;
          margin: 0 0 10px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .update-link {
          font-weight: 400;
          font-style: normal;
          font-size: 16px;
          line-height: 100%;
          letter-spacing: 0%;
          text-align: left;
          color: #114FEE;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .update-link:hover {
          text-decoration: underline;
          color: #1d4ed8;
        }

        .loading-container {
          padding: 3rem 0;
          text-align: center;
        }

        .loading-spinner {
          display: inline-block;
          width: 2rem;
          height: 2rem;
          border: 2px solid #e5e7eb;
          border-bottom-color: #2563eb;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loading-text {
          margin-top: 0.75rem;
          font-size: 0.875rem;
          color: #6b7280;
        }

        .end-message {
          padding: 3rem 0;
          text-align: center;
          font-size: 0.875rem;
          color: #9ca3af;
        }

        @media (max-width: 768px) {
          .update-item {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .update-meta {
            width: 100%;
          }
          
          .update-meta {
            width: 100%;
          }
          
          .updates-card {
            padding: 1rem 1.5rem;
          }
          
          .updates-content {
            padding: 2rem 1rem;
          }
        }
      `}</style>
      
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