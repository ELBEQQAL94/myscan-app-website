import React from 'react';

export default function HeroSection() {
  return (
    <section
      style={{
        margin: '2rem',
        padding: '2rem',
        backgroundColor: '#059669',
        borderRadius: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '50px',
      }}
    >
      {/* Left: Image */}
      <div
        style={{
          flex: '1 1 40%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="/scanscreen.jpg"
          alt="App Screenshot"
          style={{
            maxWidth: '30%',
            height: 'auto',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        />
      </div>

      {/* Right: Text content */}
      <div
        style={{
          flex: '1 1 50%',
          color: '#fff',
          paddingLeft: '2rem',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Stay Healthy. Stay Radiant
        </h2>
        <p style={{ fontSize: '1rem', color: '#f6f7f8', marginBottom: '1rem' }}>
          With Revela, every label becomes clear. Discover what your food and cosmetics are really made of, and choose what’s right for your health and glow.
        </p>

        {/* App Store Badge */}
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/google_play_Store_badge.png"
            alt="Download on the App Store"
            style={{ height: '45px' }}
          />
        </a>
      </div>
    </section>
  );
}
