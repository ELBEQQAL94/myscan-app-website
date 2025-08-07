import styles from './FeatureContentBlock.module.css';

export default function FeatureContentBlock() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.titleRow}>
        <img src="/leaficon.png" alt="Health icon" className={styles.icon} />
        <h3 className={styles.title}>Scan smarter, live better.</h3>
      </div>
      <p className={styles.description}>
        We help you avoid foods and products that may trigger or worsen conditions like{' '}
        <span className={styles.highlight}>diabetes</span>,{' '}
        <span className={styles.highlight}>hypertension</span>, or{' '}
        <span className={styles.highlight}>gluten intolerance</span>.
      </p>
      <p className={styles.description}>
        Your <span className={styles.safety}>safety</span> shouldn’t be guesswork.
        Our scanner makes it easy to avoid products that don’t suit you.
      </p>
    </div>
  );
}
