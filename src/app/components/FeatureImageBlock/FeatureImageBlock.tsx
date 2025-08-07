import styles from './FeatureImageBlock.module.css';

export default function FeatureImageBlock({ src }: { src: string }) {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt="Feature" className={styles.featureImage} />
      <div className={styles.imageGlow} />
    </div>
  );
}
