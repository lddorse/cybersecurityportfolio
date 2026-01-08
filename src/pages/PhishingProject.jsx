import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";

const PhishingProject = () => {
  return (
    <FixedCardLayout>
      <BackButton />
      
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Phishing Simulation and User Awareness Training
      </h1>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Summary</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Simulated phishing attacks using Gophish to evaluate user susceptibility, tracked engagement metrics, and
          developed training content to reduce risk. Demonstrated skills in social engineering awareness, reporting,
          and user education strategies.
        </p>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Objectives</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Test user awareness and behavior under phishing simulations</li>
          <li>Track open, click, and credential submission rates</li>
          <li>Deliver effective training to reduce human risk</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Tools & Technologies</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Gophish, Mailtrap, Google Forms</li>
          <li>HTML email templates, Slide decks</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Screenshots</h2>
        <div className="space-y-4">
          <div>
            <img src="/images/Sample_Phishing_Email.png" alt="Sample Phishing Email" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Sample Phishing Email</p>
          </div>
          <div>
            <img src="/images/Phishing_Training_Slide.png" alt="Phishing Training Slide" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Phishing Training Slide</p>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <a href="/images/LeoDorsey_PhishingSimulationAndTraining.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">Download Report (PDF)</a>
          </li>
        </ul>
      </section>
    </FixedCardLayout>
  );
};

export default PhishingProject;
