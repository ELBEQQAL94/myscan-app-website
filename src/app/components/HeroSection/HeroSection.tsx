import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      {/* Left: Image */}
      <div className={styles.imageWrapper}>
        <img
          src="/scanscreen.jpg"
          alt="App Screenshot"
          className={styles.heroImage}
        />
      </div>

      {/* Right: Text content */}
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>Stay Healthy. Stay Radiant</h2>
        <p className={styles.description}>
          With Revela, every label becomes clear. Discover what your food and cosmetics are really made of, and choose what’s right for your health and glow.
        </p>

        {/* App Store Badge */}
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/google_play_Store_badge.png"
            alt="Download on the App Store"
            className={styles.storeBadge}
          />
        </a>
      </div>
    </section>
  );
}
