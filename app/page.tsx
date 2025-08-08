import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TattoosSection } from "@/components/tattoos-section"
import { MusicSection } from "@/components/music-section"
import { ClothingSection } from "@/components/clothing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Tattoos Section */}
      <TattoosSection />

      {/* Music Section */}
      <MusicSection />

      {/* Clothing Section */}
      <ClothingSection />

      {/* Testimonials Section */}
      {/* <TestimonialsSection /> */}

      {/* About Section */}
      <AboutSection />

      {/* Call to Action Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
