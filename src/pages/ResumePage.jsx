import FixedCardLayout from '../components/FixedCardLayout';
import Hero from '../components/Hero';
import ResumeSection from '../components/ResumeSection';

const ResumePage = () => {
  return (
    <FixedCardLayout>
      <Hero />
      
      {/* Contact Info for Resume */}
      <div className="mb-8 text-center">
        <p className="text-gray-700">
          📧 lddorse@gmail.com • 📱 (217) 530-1373 • 📍 Danville, Illinois
        </p>
        <p className="text-gray-600 text-sm mt-1">
          🔗 leodorsey.com • 💼  • 💻 github.com/lddorse
        </p>
      </div>

      <ResumeSection />

      {/* Print footer */}
      <div className="mt-12 text-center text-sm text-gray-500 print:block hidden">
        <p>References available upon request</p>
      </div>
    </FixedCardLayout>
  );
};

export default ResumePage;