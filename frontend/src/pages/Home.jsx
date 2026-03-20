import HeroSection from '../components/HeroSection'
import FeatureHighlights from '../components/FeatureHighlights'
import AboutPreview from '../components/AboutPreview'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeatureHighlights />
      <AboutPreview />
    </div>
  )
}