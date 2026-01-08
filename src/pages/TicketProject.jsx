import React from 'react';
import FixedCardLayout from '../components/FixedCardLayout';
import BackButton from '../components/BackButton';

const TicketMFAChallenge = () => {
  return (
    <FixedCardLayout>
      <BackButton />
      
      {/* Ticket Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-sm font-semibold rounded border border-yellow-200 dark:border-yellow-700">
            Medium Priority
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold rounded border border-blue-200 dark:border-blue-700">
            Investigating
          </span>
          <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-sm font-semibold rounded border border-red-200 dark:border-red-700">
            Security Incident
          </span>
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          Unrecognized MFA Challenge at 3am
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400">
          #001 • Reported by Leo Dorsey • 2 days ago
        </p>
      </div>

      {/* Summary */}
      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Summary</h2>
        <p className="text-gray-700 dark:text-gray-300">
          User reports receiving an unexpected MFA code request overnight. Unsure if login attempt was legitimate. 
          No known scheduled tasks. Possible credential compromise.
        </p>
      </section>

      {/* Investigation & Triage Steps */}
      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Investigation & Triage Steps
        </h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Verify MFA logs for originating IP and device</li>
          <li>Check login attempt history and conditional access policies</li>
          <li>Scan for concurrent suspicious activity (email, mailbox rules)</li>
          <li>Reset credentials if evidence of compromise found</li>
          <li>Lock sessions and force re-authentication</li>
        </ol>
      </section>

      {/* Timeline */}
      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Timeline</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 dark:border-blue-600 pl-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">03:12 AM</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">System</p>
            <p className="text-gray-700 dark:text-gray-300">MFA request sent to user</p>
          </div>
          
          <div className="border-l-4 border-blue-500 dark:border-blue-600 pl-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">03:15 AM</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">User</p>
            <p className="text-gray-700 dark:text-gray-300">User received code and reported via helpdesk</p>
          </div>
          
          <div className="border-l-4 border-blue-500 dark:border-blue-600 pl-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">10:02 AM</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Leo Dorsey</p>
            <p className="text-gray-700 dark:text-gray-300">Ticket created in Spiceworks</p>
          </div>
        </div>
      </section>

      {/* Evidence & Attachments */}
      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Evidence & Attachments
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span className="text-blue-600 dark:text-blue-400">📄</span>
            <span>auth-logs-sample.txt <span className="text-sm text-gray-500 dark:text-gray-500">(log, 12KB)</span></span>
          </li>
          <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span className="text-blue-600 dark:text-blue-400">🖼️</span>
            <span>screenshot-mfa-notification.png <span className="text-sm text-gray-500 dark:text-gray-500">(image, 86KB)</span></span>
          </li>
        </ul>
      </section>

      {/* Resolution & Next Steps */}
      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Resolution & Next Steps
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          No resolution recorded yet. Working through investigative checks listed above.
        </p>
      </section>

      {/* Status Info */}
      <section className="mb-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Status</h3>
            <p className="text-gray-700 dark:text-gray-300">Investigating</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Assigned To</h3>
            <p className="text-gray-700 dark:text-gray-300">Leo Dorsey</p>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Lessons Learned
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Consider rate-limiting MFA requests for suspicious geographic origins</li>
          <li>Add user education about unexpected MFA prompts and reporting steps</li>
          <li>Tune conditional access policies to challenge unusual locations/devices</li>
        </ul>
      </section>

      {/* Skills Demonstrated */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Skills Demonstrated
        </h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700">
            Incident Response
          </span>
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700">
            Log Analysis
          </span>
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700">
            MFA Security
          </span>
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700">
            Documentation
          </span>
        </div>
      </section>

      {/* Portfolio Note */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-6 rounded">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Portfolio Note:</strong> This is a simulated helpdesk ticket demonstrating systematic incident 
          response procedures. In a real environment, actual log files and authentication data would be attached 
          and analyzed using SIEM tools like Splunk or Microsoft Sentinel.
        </p>
      </div>
    </FixedCardLayout>
  );
};

export default TicketMFAChallenge;
