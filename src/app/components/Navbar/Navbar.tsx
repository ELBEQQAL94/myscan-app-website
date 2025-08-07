'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      {/* Logo on the left */}
      <Link href="/">
        <img src="logo.png" alt="App logo" className={styles.logo} />
      </Link>

      {/* Navigation links */}
      <nav className={styles.navLinks}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/features" className={styles.link}>
          Features
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
      </nav>
    </header>
  );
}
