import BackButton from '../../components/BackButton';
import FixedCardLayout from '../../components/FixedCardLayout';

const TicketPhishingMicrosoft = () => {
  return (
    <FixedCardLayout>
      <div className="max-w-4xl mx-auto">
        <BackButton />

        <h1 className="text-3xl font-bold mb-4">
          Ticket #5 — Possible Phishing Email (“Verify Your Microsoft Account”)
        </h1>

        <p className="text-gray-700 mb-6">
          A user reported an email asking them to “verify your Microsoft account” by clicking a link. 
          The sender domain and link behavior appeared suspicious, prompting a full phishing investigation.
        </p>

        <div className="space-y-8">

          {/* Summary */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p>
              A potentially malicious email was forwarded by a user. The message urged urgent verification 
              of their Microsoft login. Initial review identified indicators of phishing, including 
              mismatched sender domain, urgent language, and a questionable hyperlink.
            </p>
          </section>

          {/* Triage */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Initial Triage</h2>
            <ul className="list-disc pl-6">
              <li>Category: <strong>Phishing / User Awareness</strong></li>
              <li>Priority: <strong>Medium</strong></li>
              <li>Reported by: <strong>Leo Dorsey</strong></li>
              <li>Indicators:
                <ul className="list-disc pl-6 mt-1">
                  <li>Urgent call-to-action</li>
                  <li>Unfamiliar/non-Microsoft sender domain</li>
                  <li>Masked link with suspicious redirect</li>
                  <li>No corresponding alert in Microsoft Admin Center</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Investigation */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Investigation</h2>

            <h3 className="font-semibold mt-3">1. Email Header Review</h3>
            <ul className="list-disc pl-6">
              <li>SPF: Failed</li>
              <li>DKIM: Not aligned</li>
              <li>DMARC: Failed</li>
            </ul>

            <h3 className="font-semibold mt-3">2. Link Analysis</h3>
            <p>
              Hovering revealed a redirect to a non-Microsoft <code>.xyz</code> domain. 
              Sandbox inspection showed a cloned Microsoft login page commonly used in 
              credential harvesting.
            </p>

            <h3 className="font-semibold mt-3">3. Microsoft Admin Center Check</h3>
            <ul className="list-disc pl-6">
              <li>No security notifications requiring account verification</li>
              <li>No password reset events</li>
              <li>No inbound mail rule or tenant configuration changes</li>
            </ul>

            <h3 className="font-semibold mt-3">4. User Account Review</h3>
            <ul className="list-disc pl-6">
              <li>No unfamiliar Azure AD sign-ins</li>
              <li>No abnormal MFA push attempts</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
            <p>
              This email was a <strong>credential phishing attempt</strong> designed to imitate 
              Microsoft account verification workflows. The sender domain, link behavior, and 
              sandbox results confirmed malicious intent.
            </p>
          </section>

          {/* Actions */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Actions Taken</h2>
            <ul className="list-disc pl-6">
              <li>Quarantined the phishing email across all mailboxes</li>
              <li>Added sender domain and originating IP to blocklist</li>
              <li>Submitted URL sample to Microsoft for threat intel review</li>
              <li>Provided follow-up security awareness to the reporting user</li>
              <li>Verified no unauthorized sign-ins occurred</li>
            </ul>
          </section>

          {/* Recommendations */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Recommendations & Lessons Learned</h2>
            <ul className="list-disc pl-6">
              <li>Encourage hovering over links before clicking</li>
              <li>Do not verify accounts via unexpected emails</li>
              <li>Increase DMARC enforcement level if not configured</li>
              <li>Provide periodic phishing education, especially around Microsoft-branded lures</li>
            </ul>
          </section>
        </div>
      </div>
    </FixedCardLayout>
  );
};

export default TicketPhishingMicrosoft;
