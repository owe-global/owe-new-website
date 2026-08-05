import Hero from "../Hero";
import AboutSection from "../AboutSection";
import Services from "../Services";
import Destinations from "../Destinations";
import EligibilityPredictor from "../EligibilityPredictor";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import ScrollReveal from "../ScrollReveal";

interface HomePageProps {
  onBookClick: (countryName?: string) => void;
  onAssessClick: () => void;
}

export default function HomePage({ onBookClick, onAssessClick }: HomePageProps) {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      
      {/* 1. Hero Banner */}
      <Hero onBookClick={() => onBookClick()} onAssessClick={onAssessClick} />

      {/* 2. About Us Section */}
      <ScrollReveal>
        <AboutSection onLearnMoreClick={() => onBookClick()} />
      </ScrollReveal>

      {/* 3. Services / Solutions Section */}
      <ScrollReveal>
        <Services onBookClick={() => onBookClick()} />
      </ScrollReveal>

      {/* 4. Eligibility Predictor Section */}
      <ScrollReveal>
        <EligibilityPredictor onSuccess={() => onBookClick()} />
      </ScrollReveal>

      {/* 5. Study Destinations */}
      <ScrollReveal>
        <Destinations onBookClick={(country) => onBookClick(country)} />
      </ScrollReveal>

      {/* 6. Our Success Stories */}
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      {/* 7. Contact Us */}
      <ScrollReveal>
        <Contact />
      </ScrollReveal>

    </div>
  );
}
