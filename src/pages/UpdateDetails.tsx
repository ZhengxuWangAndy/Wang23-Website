import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { UPDATE_DATA } from '../data/UpdateData';
import '../styles/UpdateDetails.css';
import { jsPDF } from 'jspdf';

const UpdateDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const update = UPDATE_DATA.find((u) => u.id === Number(id));

  if (!update) {
    return (
      <div className="update-details-container">
        <h2>Update not found</h2>
        <Link to="/updates" className="back-link">← Back to Updates</Link>
      </div>
    );
  }

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(update.title, 10, 20);
    doc.setFontSize(12);
    doc.text(`By ${update.author} | ${update.date}`, 10, 30);
    doc.text(`Tags: ${update.tags.join(', ')}`, 10, 40);
    doc.text('----------------------------------------', 10, 50);
    doc.text(update.content, 10, 60, { maxWidth: 180 });
    doc.save(`${update.title}.pdf`);
  };

  return (
    <div className="update-details-page">
      {/* Header Section */}
      <div className="update-details-header">
        <div className="update-details-header-content">
          <p className="update-details-date">{update.date}</p>
          <h1 className="update-details-title">{update.title}</h1>
          <p className="update-details-author">By {update.author}</p>

          <div className="update-details-tags">
            {update.tags.map((tag, index) => (
              <span key={index} className="update-tag">{tag}</span>
            ))}
          </div>

          
        </div>
      </div>

      {/* Body Section */}
      <div className="update-details-body">
        <div className="update-details-image-placeholder"></div>
        <p className="update-details-tagline">Short article tagline ...</p>

        <h3 className="update-details-subheading">The Concept</h3>
        <p className="update-details-content">{update.content}</p>

        <p className="update-details-footer">
          What started as just a small idea... *insert more article text*
        </p>
        {/* Buttons Side by Side */}
          <div className="button-group">
           
            <Link to="/updates" className="back-button">
              Back to Updates
            </Link>
          </div>
      </div>
      
    </div>
    
  );
};

export default UpdateDetails;
