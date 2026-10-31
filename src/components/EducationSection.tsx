import React from 'react';
import { educationItems } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="page-section active" role="tabpanel">
      <div className="section-header">
        <h2 className="section-title">Educational Background</h2>
        <p className="section-subtitle">Academic milestones and educational institutions</p>
      </div>

      <div className="edu-timeline">
        {educationItems.map((item) => (
          <div key={item.id} className="edu-card">
            <span className="year-badge">
              <i className={item.badgeIcon}></i> {item.typeBadge}
            </span>
            <h3>{item.institution}</h3>
            {item.degree && (
              <p style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '13.5px' }}>
                {item.degree}
              </p>
            )}
            <p style={{ color: 'var(--text-muted)', fontSize: item.degree ? '12.5px' : '13px', marginTop: '4px' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
