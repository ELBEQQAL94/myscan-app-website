'use client';
import React from 'react';

export default function FeatureCarousel() {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src="/disease-profile.jpg"
        alt="Disease Profile"
        style={{
          maxHeight: '400px',
          objectFit: 'cover',
          width: '100%',
          borderRadius: '0.5rem',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: '#fff',
          padding: '1rem',
          borderRadius: '0.5rem',
          maxWidth: '90%',
        }}
      >
        <h3>Disease Profile Creation</h3>
        <p>Tailor your health profile for conditions like diabetes, IBS, or eczema.</p>
      </div>
    </div>
  );
}
