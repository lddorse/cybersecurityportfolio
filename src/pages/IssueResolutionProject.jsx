import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";

const IssueResolutionProject = () => {
  return (
    <FixedCardLayout>
      <BackButton />
      
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Issue Resolution and Root Cause Analysis
      </h1>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Summary</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Investigated recurring system issues, identified root causes using log analysis and stakeholder interviews, 
          and implemented long-term fixes. Demonstrated skills in incident tracking, RCA methodology, 
          and post-incident documentation.
        </p>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Objectives</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Investigate recurring technical failures</li>
          <li>Identify root causes using log and behavioral data</li>
          <li>Implement long-term solutions and document for prevention</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Tools & Techniques</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Syslog, journalctl, Windows Event Viewer, Splunk</li>
          <li>5 Whys, Fishbone Diagram, RCA Templates</li>
          <li>Helpdesk ticketing system, IT stakeholder interviews</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Screenshots</h2>
        <div className="space-y-4">
          <div>
            <img src="/images/Log_Analysis_Screenshot.png" alt="Log Analysis Screenshot" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Log Analysis Screenshot</p>
          </div>
          <div>
            <img src="/images/RCA_Template_Screenshot.png" alt="RCA Template Screenshot" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">RCA Template Screenshot</p>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <a href="/images/LeoDorsey_IssueResolution_RootCauseAnalysis.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">Download Report (PDF)</a>
          </li>
        </ul>
      </section>
    </FixedCardLayout>
  );
};

export default IssueResolutionProject;
