import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";
const IssueResolutionProject = () => {
    return (
        <FixedCardLayout>
                  <BackButton />

          <h1 className="text-3xl font-bold mb-4">Issue Resolution and Root Cause Analysis</h1>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
          <p>
            Investigated recurring system issues, identified root causes using log analysis and stakeholder interviews, 
            and implemented long-term fixes. Demonstrated skills in incident tracking, RCA methodology, 
            and post-incident documentation.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Objectives</h2>
          <ul className="list-disc pl-6">
            <li>Investigate recurring technical failures</li>
            <li>Identify root causes using log and behavioral data</li>
            <li>Implement long-term solutions and document for prevention</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Tools & Techniques</h2>
          <ul className="list-disc pl-6">
            <li>Syslog, journalctl, Windows Event Viewer, Splunk</li>
            <li>5 Whys, Fishbone Diagram, RCA Templates</li>
            <li>Helpdesk ticketing system, IT stakeholder interviews</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Screenshots</h2>
          <img src="/images/Log_Analysis_Screenshot.png" alt="Log Analysis Screenshot" className="my-4" />
          <img src="/images/RCA_Template_Screenshot.png" alt="RCA Template Screenshot" className="my-4" />
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Resources</h2>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="/images/LeoDorsey_IssueResolution_RootCauseAnalysis.pdf"
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
  
  export default IssueResolutionProject;
  