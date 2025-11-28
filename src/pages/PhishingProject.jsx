import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";
const PhishingProject = () => {
    return (
<FixedCardLayout>                    <BackButton />
        <h1 className="text-3xl font-bold mb-4">Phishing Simulation and User Awareness Training</h1>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
          <p>
            Simulated phishing attacks using Gophish to evaluate user susceptibility, tracked engagement metrics, and
            developed training content to reduce risk. Demonstrated skills in social engineering awareness, reporting,
            and user education strategies.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Objectives</h2>
          <ul className="list-disc pl-6">
            <li>Test user awareness and behavior under phishing simulations</li>
            <li>Track open, click, and credential submission rates</li>
            <li>Deliver effective training to reduce human risk</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Tools & Technologies</h2>
          <ul className="list-disc pl-6">
            <li>Gophish, Mailtrap, Google Forms</li>
            <li>HTML email templates, Slide decks</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Screenshots</h2>
          <img src="/images/Sample_Phishing_Email.png" alt="Gophish Dashboard" className="my-4" />
          <img src="/images/Phishing_Training_Slide.png" alt="Phishing Training Slide" className="my-4" />
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Resources</h2>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="/images/LeoDorsey_PhishingSimulationAndTraining.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Download Report (PDF)
              </a>
            </li>
          </ul>
          </FixedCardLayout>
    );
  };
  
  export default PhishingProject;
  