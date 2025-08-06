'use client';
import React from 'react';

const features = [
  {
    image: '/screenallergie.jpg',
    title: 'Disease Profile',
    description: 'Customize your health settings for conditions like diabetes or IBS.',
  },
  {
    image: '/screenallergie.jpg',
    title: 'Allergy Alerts',
    description: 'Get instant warnings for allergens like gluten, nuts, and dairy.',
  },
  {
    image: '/screenallergie.jpg',
    title: 'Haram Scan',
    description: 'Detect non-halal ingredients like gelatin and alcohol instantly.',
  },
];

export default function FeatureStrip() {
  return (
    <div style={{ padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          gap: '1.5rem',
          paddingBottom: '1rem',
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 auto',
              scrollSnapAlign: 'start',
              width: '300px',
              minWidth: '300px',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              backgroundColor: 'rgba(197, 196, 196, 0.1)',
              textAlign: 'center',
              padding: '1.5rem 1rem',
            }}
          >
            <img
              src={feature.image}
              alt={feature.title}
              style={{
                width: '150px',
                height: 'auto',
                margin: '0 auto 1rem',
                display: 'block',
                borderRadius: '0.75rem',
                border: '1px solid black',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              }}
            />
            <h4 style={{ marginBottom: '0.5rem', color: '#88e3a5' }}>{feature.title}</h4>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
