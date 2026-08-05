import Destinations from "../Destinations";
import EligibilityPredictor from "../EligibilityPredictor";

interface DestinationsPageProps {
  onBookClick: (country: string) => void;
  onAssessSuccess: () => void;
}

export default function DestinationsPage({ onBookClick, onAssessSuccess }: DestinationsPageProps) {
  return (
    <div className="py-12 bg-white">
      {/* Country Destinations Component */}
      <Destinations onBookClick={onBookClick} />

      {/* Interactive Eligibility Predictor Section */}
      <div id="assess" className="border-t border-slate-100 mt-20 pt-12 scroll-mt-24">
        <EligibilityPredictor onSuccess={onAssessSuccess} />
      </div>
    </div>
  );
}
