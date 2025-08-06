import React from 'react';
import styles from './CustomShape.module.css';

export default function FeatureSection() {
  return (
    <section
      style={{
        position: 'relative',
        margin: '2rem',
        padding: '2rem',
        borderRadius: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden', // ensures the shape doesn't spill out
      }}
    >
      {/* Custom background shape */}
      <div className={styles.customShapeBackground}></div>

      {/* Left: Image with overlay */}
      <div
        style={{
          position: 'relative',
          flex: '1 1 40%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <img
          src="/Woman_in_grocery_store.jpg"
          alt="Woman in grocery store"
          style={{
            maxWidth: '80%',
            height: 'auto',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        />
        <img
          src="/scanproductscreen.jpg"
          alt="App scanning screenshot"
          style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '100px',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            border: '2px solid white',
          }}
        />
      </div>

      {/* Right: Text content */}
      <div
        style={{
          flex: '1 1 50%',
          paddingLeft: '2rem',
          color: '#1e293b',
          zIndex: 1,
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Food & Cosmetics Scanning{' '}
          <span style={{ color: '#059669' }}>Features</span>
        </h2>
        <ul style={{ fontSize: '1rem', lineHeight: '1.8', paddingLeft: '1rem' }}>
          <li>Instant barcode scanning for ingredient breakdown</li>
          <li>Highlight harmful additives and allergens</li>
          <li>Cosmetic product analysis for skin compatibility</li>
          <li>Personalized health recommendations</li>
          <li>Track and compare product safety over time</li>
        </ul>
      </div>
    </section>
  );
}
