import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import FeatureStrip from './components/FeatureStrip';




export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <section style={{ marginTop: '4rem', padding: '2rem' }}>
        <h2 className="text-center mb-4">Explore Our Smart Features</h2>
        <FeatureStrip />
      </section>
    </>
  );
}
