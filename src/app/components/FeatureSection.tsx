import React from 'react';

export default function FeatureSection() {
  return (
    <section
    style={{
      padding: '3rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      background: 'linear-gradient(to bottom, #ffffff, #f0fdf4)', // ← Add this line
      borderRadius: '16px', // Optional: soft rounded edges
    }}
  >
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem', color: '#1e293b' }}>
        Explore Our <span style={{ color: '#059669' }}>Smart Features</span>
      </h2>

      {/* Feature Block 1 — Image Left */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          marginBottom: '3rem',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
  <div style={{ flex: '1 1 40%', position: 'relative', textAlign: 'center' }}>
  <img
    src="/screenallergie.jpg"
    alt="Scan smarter"
    style={{
      width: '180px',
      height: 'auto',
      borderRadius: '24px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
      border: '2px solid black',
      objectFit: 'cover',
      transform: 'rotate(+5deg)',
      position: 'relative',
      zIndex: 2,
    }}
  />
  <div
    style={{
      position: 'absolute',
      bottom: '-50px', // ⬅️ More space below the image
      left: '46%',
      transform: 'translateX(-50%)',
      width: '160px',
      height: '30px',
      backgroundColor: 'rgb(250, 232, 229)', // soft green
      borderRadius: '50%',
      filter: 'blur(3px)', // ⬅️ Slightly less blur for a tighter shape
      zIndex: 1,
    }}
  />
</div>


        <div
  style={{
    flex: '1 1 50%',
    color: '#1e293b',
    backgroundColor: '#f9fafb', // Light gray background
    padding: '1.5rem',
    borderRadius: '40px', // ⬅️ smoother corners
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }}
>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src="/leaficon.png" alt="Health icon" style={{ width: '50px', height: '50px' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', margin: 0 }}>
              Scan smarter, live better.
            </h3>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            We help you avoid foods and products that may trigger or worsen conditions like{' '}
            <span style={{ color: '#059669', fontWeight: 'bold' }}>diabetes</span>,{' '}
            <span style={{ color: '#059669', fontWeight: 'bold' }}>hypertension</span>, or{' '}
            <span style={{ color: '#059669', fontWeight: 'bold' }}>gluten intolerance</span>.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginTop: '1rem' }}>
            Your <span style={{ color: '#049222', fontWeight: 'bold' }}>safety</span> shouldn’t be guesswork.
            Our scanner makes it easy to avoid products that don’t suit you.
          </p>
        </div>
      </div>

      {/* Feature Block 2 — Image Right */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'stretch',
          marginBottom: '3rem',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '1 1 40%', position: 'relative', textAlign: 'center' }}>
  <img
    src="/screenallergie.jpg"
    alt="Scan smarter"
    style={{
      width: '180px',
      height: 'auto',
      borderRadius: '24px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
      border: '2px solid black',
      objectFit: 'cover',
      transform: 'rotate(+5deg)',
      position: 'relative',
      zIndex: 2,
    }}
  />
  <div
    style={{
      position: 'absolute',
      bottom: '-50px', // ⬅️ More space below the image
      left: '46%',
      transform: 'translateX(-50%)',
      width: '160px',
      height: '30px',
      backgroundColor: 'rgb(250, 232, 229)', // soft green
      borderRadius: '50%',
      filter: 'blur(3px)', // ⬅️ Slightly less blur for a tighter shape
      zIndex: 1,
    }}
  />
</div>


        <div
  style={{
    flex: '1 1 50%',
    color: '#1e293b',
    backgroundColor: '#f9fafb', // Light gray background
    padding: '1.5rem',
    borderRadius: '40px', // ⬅️ smoother corners
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }}
>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src="/leaficon.png" alt="Health icon" style={{ width: '50px', height: '50px' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', margin: 0 }}>
              Scan smarter, live better.
            </h3>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            We help you avoid foods and products that may trigger or worsen conditions like{' '}
            <span style={{ color: '#059669', fontWeight: 'bold' }}>diabetes</span>,{' '}
            <span style={{ color: '#059669', fontWeight: 'bold' }}>hypertension</span>, or{' '}
            <span style={{ color: '#059669', fontWeight: 'bold' }}>gluten intolerance</span>.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginTop: '1rem' }}>
            Your <span style={{ color: '#049222', fontWeight: 'bold' }}>safety</span> shouldn’t be guesswork.
            Our scanner makes it easy to avoid products that don’t suit you.
          </p>
        </div>
      </div>

      {/* Feature Block 3 — Image Left */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          marginBottom: '3rem',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '1 1 40%', position: 'relative', textAlign: 'center' }}>
  <img
    src="/screenallergie.jpg"
    alt="Scan smarter"
    style={{
      width: '180px',
      height: 'auto',
      borderRadius: '24px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
      border: '2px solid black',
      objectFit: 'cover',
      transform: 'rotate(+5deg)',
      position: 'relative',
      zIndex: 2,
    }}
  />
  <div
    style={{
      position: 'absolute',
      bottom: '-50px', // ⬅️ More space below the image
      left: '46%',
      transform: 'translateX(-50%)',
      width: '160px',
      height: '30px',
      backgroundColor: 'rgb(250, 232, 229)', // soft green
      borderRadius: '50%',
      filter: 'blur(3px)', // ⬅️ Slightly less blur for a tighter shape
      zIndex: 1,
    }}
  />
</div>


        <div
  style={{
    flex: '1 1 50%',
    color: '#1e293b',
    backgroundColor: '#f9fafb', // Light gray background
    padding: '1.5rem',
    borderRadius: '40px', // ⬅️ smoother corners
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }}
>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src="/leaficon.png" alt="Health icon" style={{ width: '50px', height: '50px' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', margin: 0 }}>
              Scan smarter, live better.
            </h3>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            We help you avoid foods and products that may trigger or worsen conditions like{' '}
            <span style={{ color: '#059669', fontWeight: 'bold' }}>diabetes</span>,{' '}
            <span style={{ color: '#059669', fontWeight: 'bold' }}>hypertension</span>, or{' '}
            <span style={{ color: '#059669', fontWeight: 'bold' }}>gluten intolerance</span>.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginTop: '1rem' }}>
            Your <span style={{ color: '#049222', fontWeight: 'bold' }}>safety</span> shouldn’t be guesswork.
            Our scanner makes it easy to avoid products that don’t suit you.
          </p>
        </div>
      </div>

      {/* Feature Block 4 — Image Right */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'stretch',
          marginBottom: '3rem',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '1 1 40%', position: 'relative', textAlign: 'center' }}>
  <img
    src="/screenallergie.jpg"
    alt="Scan smarter"
    style={{
      width: '180px',
      height: 'auto',
      borderRadius: '24px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
      border: '2px solid black',
      objectFit: 'cover',
      transform: 'rotate(+5deg)',
      position: 'relative',
      zIndex: 2,
    }}
  />
  <div
    style={{
      position: 'absolute',
      bottom: '-50px', // ⬅️ More space below the image
      left: '46%',
      transform: 'translateX(-50%)',
      width: '160px',
      height: '30px',
      backgroundColor: 'rgb(250, 232, 229)', // soft green
      borderRadius: '50%',
      filter: 'blur(3px)', // ⬅️ Slightly less blur for a tighter shape
      zIndex: 1,
    }}
  />
</div>


        <div
  style={{
    flex: '1 1 50%',
    color: '#1e293b',
    backgroundColor: '#f9fafb', // Light gray background
    padding: '1.5rem',
    borderRadius: '40px', // ⬅️ smoother corners
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    
  }}
>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src="/leaficon.png" alt="Health icon" style={{ width: '50px', height: '50px' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', margin: 0 }}>
              Scan smarter, live better.
            </h3>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
             We help you avoid foods and products that may trigger or worsen conditions like{' '}
            <span style={{ color: '#059669', fontWeight: 'bold' }}>diabetes</span>,{' '}
            <span style={{ color: '#059669', fontWeight: 'bold' }}>hypertension</span>, or{' '}
            <span style={{ color: '#059669', fontWeight: 'bold' }}>gluten intolerance</span>.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginTop: '1rem' }}>
            Your <span style={{ color: '#049222', fontWeight: 'bold' }}>safety</span> shouldn’t be guesswork.
            Our scanner makes it easy to avoid products that don’t suit you.
          </p>
        </div>
      </div>
    </section>
  );
}
