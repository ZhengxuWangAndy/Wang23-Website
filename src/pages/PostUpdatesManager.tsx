// PostUpdatesManager.tsx
import React, { useState, useEffect } from 'react';

interface CompanyOverview {
  id: number;
  company_name: string;
  author_name: string;
  title: string;
  overview_text: string;
  display_date: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface FormData {
  company_name: string;
  author_name: string;
  title: string;
  overview_text: string;
  display_date: string;
  is_active: boolean;
}

const PostUpdatesManager: React.FC = () => {
    const API_BASE_URL = '/api';
//   const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

  const [formData, setFormData] = useState<FormData>({
    company_name: '',
    author_name: '',
    title: '',
    overview_text: '',
    display_date: '',
    is_active: true,
  });

  const [overviews, setOverviews] = useState<CompanyOverview[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchOverviews();
  }, []);

  const fetchOverviews = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/company-overviews/`);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setOverviews(data);
    } catch (error) {
      console.error('Error fetching overviews:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${API_BASE_URL}/company-overviews/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Failed to create overview');
      }

      setMessage({ type: 'success', text: 'Post update created successfully!' });
      setFormData({
        ...formData,
        overview_text: '',
        display_date: new Date().toISOString().split('T')[0],
      });
      fetchOverviews();
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleActivate = async (id: number) => {
    try {
      const response = await fetch(`${API_BASE_URL}/company-overviews/${id}/activate/`, {
        method: 'POST',
      });
      if (!response.ok) throw new Error('Failed to activate');
      setMessage({ type: 'success', text: 'Post update activated!' });
      fetchOverviews();
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to activate post update' });
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this post update?')) return;

    try {
      const response = await fetch(`${API_BASE_URL}/company-overviews/${id}/`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete');
      setMessage({ type: 'success', text: 'Post update deleted!' });
      fetchOverviews();
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete post update' });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .overview-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #f3f4f6;
          color: #1f2937;
          line-height: 1.6;
          min-height: 100vh;
          padding: 2rem 1.5rem;
        }

        .overview-wrapper {
          max-width: 1000px;
          margin: 0 auto;
        }

        .overview-header {
          margin-bottom: 2rem;
        }

        .overview-title {
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
        }

        .overview-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #374151;
        }

        .alert {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          margin-bottom: 1.5rem;
          border-radius: 0.5rem;
          animation: slideDown 0.3s ease-out;
        }

        .alert.success {
          background-color: #d1fae5;
          color: #065f46;
        }

        .alert.error {
          background-color: #fee2e2;
          color: #991b1b;
        }

        .alert.hidden {
          display: none;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          margin-left: 1rem;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .close-btn:hover {
          opacity: 1;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-section,
        .list-section {
          background: white;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.625rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 1rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-textarea {
          resize: vertical;
          font-family: inherit;
        }

        .char-count {
          display: block;
          font-size: 0.75rem;
          color: #6b7280;
          margin-top: 0.25rem;
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .checkbox-input {
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
          cursor: pointer;
        }

        .checkbox-label {
          font-size: 0.875rem;
          font-weight: normal;
          cursor: pointer;
        }

        .btn {
          padding: 0.625rem 1.5rem;
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-primary {
          background-color: #3b82f6;
          color: white;
        }

        .btn-primary:hover {
          background-color: #2563eb;
        }

        .btn-primary:disabled {
          background-color: #93c5fd;
          cursor: not-allowed;
        }

        .btn-secondary {
          background-color: #e5e7eb;
          color: #374151;
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
        }

        .btn-secondary:hover {
          background-color: #d1d5db;
        }

        .btn-danger {
          background-color: #fee2e2;
          color: #991b1b;
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
        }

        .btn-danger:hover {
          background-color: #fecaca;
        }

        .overviews-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .overview-card {
          border: 1px solid #e5e7eb;
          padding: 1.25rem;
          border-radius: 0.5rem;
          transition: box-shadow 0.2s;
        }

        .overview-card:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .overview-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }

        .overview-info h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .overview-meta {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .overview-actions {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .badge {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          font-size: 0.75rem;
          border-radius: 0.25rem;
        }

        .badge-active {
          background-color: #d1fae5;
          color: #065f46;
        }

        .overview-text {
          color: #4b5563;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .overview-footer {
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: 0.5rem;
        }

        .empty-state {
          text-align: center;
          color: #6b7280;
          padding: 2rem;
        }

        @media (max-width: 640px) {
          .overview-container {
            padding: 1rem;
          }

          .overview-title {
            font-size: 1.5rem;
          }

          .form-section,
          .list-section {
            padding: 1.5rem;
          }

          .overview-card-header {
            flex-direction: column;
            gap: 0.75rem;
          }

          .overview-actions {
            width: 100%;
          }
        }
      `}</style>

      <div className="overview-container">
        <div className="overview-wrapper">
          <header className="overview-header">
            <h1 className="overview-title">Post Updates Manager</h1>
          </header>

          {message.text && (
            <div className={`alert ${message.type}`}>
              <span>{message.text}</span>
              <button className="close-btn" onClick={() => setMessage({ type: '', text: '' })}>
                ×
              </button>
            </div>
          )}

          <section className="form-section">
            <h2 className="overview-subtitle">Create New Post Update</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="company_name" className="form-label">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company_name"
                  className="form-input"
                  value={formData.company_name}
                  onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="author_name" className="form-label">
                  Author Name *
                </label>
                <input
                  type="text"
                  id="author_name"
                  className="form-input"
                  value={formData.author_name}
                  onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-input"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="display_date" className="form-label">
                  Display Date *
                </label>
                <input
                  type="date"
                  id="display_date"
                  className="form-input"
                  value={formData.display_date}
                  onChange={(e) => setFormData({ ...formData, display_date: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="overview_text" className="form-label">
                  Post Content *
                </label>
                <textarea
                  id="overview_text"
                  className="form-textarea"
                  rows={6}
                  value={formData.overview_text}
                  onChange={(e) => setFormData({ ...formData, overview_text: e.target.value })}
                  placeholder="At Wang23 LLC, websites are where businesses connect and grow..."
                  required
                />
                <span className="char-count">{formData.overview_text.length} characters</span>
              </div>

              <div className="form-group">
                <label className="checkbox-group">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={formData.is_active}
                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  />
                  <span className="checkbox-label">Set as active post</span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Creating...' : 'Create Post Update'}
              </button>
            </form>
          </section>

          <section className="list-section">
            <h2 className="overview-subtitle">Existing Post Updates</h2>
            <div className="overviews-list">
              {overviews.length === 0 ? (
                <p className="empty-state">No post updates found.</p>
              ) : (
                overviews.map((overview) => (
                  <div key={overview.id} className="overview-card">
                    <div className="overview-card-header">
                      <div className="overview-info">
                        <h3>{overview.title}</h3>
                        <div className="overview-meta">
                          {formatDate(overview.display_date)} • {overview.author_name}
                        </div>
                      </div>
                      <div className="overview-actions">
                        {overview.is_active ? (
                          <span className="badge badge-active">Active</span>
                        ) : (
                          <button
                            className="btn btn-secondary"
                            onClick={() => handleActivate(overview.id)}
                          >
                            Activate
                          </button>
                        )}
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(overview.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p className="overview-text">
                      {overview.overview_text.substring(0, 150)}
                      {overview.overview_text.length > 150 ? '...' : ''}
                    </p>
                    <div className="overview-footer">
                      Last updated: {new Date(overview.updated_at).toLocaleString()}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PostUpdatesManager;