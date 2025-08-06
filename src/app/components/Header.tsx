'use client';
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: '#f1f5f9',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      }}
    >
      {/* Logo on the left */}
      <Link href="/">
        <img
          src="logo.png"
          alt=""
          style={{
            height: '80px',
            width: '150px',
            cursor: 'pointer',
          }}
        />
      </Link>

      {/* Navigation links */}
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#1e293b' }}>
          Home
        </Link>
        <Link href="/features" style={{ textDecoration: 'none', color: '#1e293b' }}>
          Features
        </Link>
        <Link href="/about" style={{ textDecoration: 'none', color: '#1e293b' }}>
          About
        </Link>
      </nav>
    </header>
  );
}
