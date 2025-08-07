import { FC } from 'react';
import styles from './FeatureSection.module.css';
import FeatureImageBlock from '../FeatureImageBlock/FeatureImageBlock';
import FeatureContentBlock from '../FeatureContentBlock/FeatureContentBlock';

export default function FeatureSection() {
  return (
    <section className={styles.sectionContainer} >
      <h2 className={styles.sectionTitle}>
        Explore Our <span className={styles.highlight}>Smart Features</span>
      </h2>

      {/* Feature Block 1 — Image Left */}
      <div className={styles.featureBlock}>
  <FeatureImageBlock src="/screenallergie.jpg" />
  <FeatureContentBlock />
</div>




      {/* Feature Block 2 — Image Right */}
      
      <div className={`${styles.featureBlock} ${styles.reverse}`}>
  <FeatureImageBlock src="/screenallergie.jpg" />
  <FeatureContentBlock />
</div>



      {/* Feature Block 3 — Image Left */}

      <div className={styles.featureBlock}>
  <FeatureImageBlock src="/screenallergie.jpg" />
  <FeatureContentBlock />
</div>

           {/* Feature Block 4 — Image Right */}

           <div className={`${styles.featureBlock} ${styles.reverse}`}>
  <FeatureImageBlock src="/screenallergie.jpg" />
  <FeatureContentBlock />
</div>

    </section>
  );
}
