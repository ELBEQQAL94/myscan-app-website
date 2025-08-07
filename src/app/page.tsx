// page.tsx
import styles from './page.module.css';
import HeroSection from './components/HeroSection/HeroSection';
import FeatureSection from './components/FeatureSection/FeatureSection';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <FeatureSection />
      </main>
    </div>
  );
}
