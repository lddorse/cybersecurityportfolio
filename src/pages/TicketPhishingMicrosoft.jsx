import React from "react";
import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from '../components/BackButton';

export default function TicketPhishingMicrosoft() {
  const ticket = {
    id: "#003",
    title: "Possible Phishing Email — \"Verify Your Microsoft Account\"",
    priority: "High",
    category: "Security Incident",
    reporter: "Leo Dorsey",
    created: "3 hours ago",
    summary:
      "User forwarded a suspicious email claiming their Microsoft account requires immediate verification or will be suspended. Email includes a link requesting login credentials. Investigating for phishing indicators and potential credential compromise.",
    status: "Resolved",
    timeline: [
      { time: "08:45 AM", actor: "User", note: "Forwarded suspicious email to IT security" },
      { time: "08:50 AM", actor: "Leo Dorsey", note: "Ticket created, began phishing analysis" },
      { time: "09:15 AM", actor: "Leo Dorsey", note: "Analyzed email headers and malicious link" },
      { time: "09:45 AM", actor: "Leo Dorsey", note: "Confirmed phishing attempt, blocked sender domain" },
      { time: "10:30 AM", actor: "Leo Dorsey", note: "Created user awareness alert and documented IOCs" }
    ],
    checks: [
      "Inspect email headers for spoofed sender and suspicious originating IP",
      "Analyze embedded links for URL redirection and credential harvesting pages",
      "Check sender domain against threat intelligence databases",
      "Verify if user clicked link or entered credentials",
      "Scan user's mailbox for similar phishing emails",
      "Review email gateway logs for other recipients",
      "Add IOCs (indicators of compromise) to blocklist"
    ],
    resolution: "Confirmed phishing attempt. Email originated from spoofed domain 'micr0soft-verify[.]com' (note the zero). Link redirected to credential harvesting page mimicking Microsoft login. User did NOT click the link. Blocked sender domain in email gateway, added IOCs to threat intel feed, and sent organization-wide security awareness reminder about verifying sender authenticity.",
    attachments: [
      { name: "phishing-email-headers.txt", type: "log", size: "6KB" },
      { name: "malicious-url-analysis.pdf", type: "document", size: "78KB" },
      { name: "fake-login-page-screenshot.png", type: "image", size: "142KB" }
    ],
    lessons: [
      "Users need regular training on identifying phishing red flags (urgent language, suspicious links)",
      "Implement email authentication (SPF, DKIM, DMARC) to reduce spoofing",
      "Consider adding email banner warnings for external senders",
      "Maintain updated threat intelligence feeds for proactive blocking",
      "Encourage users to report suspicious emails instead of deleting them"
    ]
  };

  return (
    <FixedCardLayout>
      <div className="max-w-4xl mx-auto">
        <BackButton />
        
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-4">{ticket.title}</h1>
          <div className="flex flex-wrap gap-3 items-center mb-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
              {ticket.priority} Priority
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              {ticket.status}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
              {ticket.category}
            </span>
          </div>
          <p className="text-sm text-gray-600">{ticket.id} • Reported by {ticket.reporter} • {ticket.created}</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <article>
              <h2 className="text-xl font-semibold mb-2">Summary</h2>
              <p className="text-gray-700">{ticket.summary}</p>
            </article>

            <article>
              <h2 className="text-xl font-semibold mb-2">Investigation & Triage Steps</h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                {ticket.checks.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ol>
            </article>

            <article>
              <h2 className="text-xl font-semibold mb-2">Timeline</h2>
              <div className="space-y-3">
                {ticket.timeline.map((t, i) => (
                  <div key={i} className="flex items-start border-l-2 border-blue-500 pl-4">
                    <span className="w-20 flex-shrink-0 text-sm font-medium text-gray-600">{t.time}</span>
                    <div>
                      <div className="font-semibold text-gray-800">{t.actor}</div>
                      <div className="text-gray-700">{t.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article>
              <h2 className="text-xl font-semibold mb-2">Evidence & Attachments</h2>
              <ul className="list-disc pl-6 space-y-2">
                {ticket.attachments.map((a, i) => (
                  <li key={i}>
                    <span className="font-medium">{a.name}</span>
                    <span className="text-sm text-gray-600"> ({a.type}, {a.size})</span>
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h2 className="text-xl font-semibold mb-2">Resolution & Next Steps</h2>
              <div className="text-gray-700">
                <p>{ticket.resolution}</p>
              </div>
            </article>
          </div>

          <aside className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Status</h2>
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800">
                  {ticket.status}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-1">Assigned To</h3>
                <div className="text-gray-700">{ticket.reporter}</div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Lessons Learned</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {ticket.lessons.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Skills Demonstrated</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">Phishing Analysis</span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">Email Security</span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">User Awareness</span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">Threat Hunting</span>
              </div>
            </div>
          </aside>
        </section>

        <footer className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="text-sm text-gray-700">
            <strong>Portfolio Note:</strong> This simulated ticket demonstrates phishing email analysis methodology. 
            Analysis tools include email header inspection, URL sandbox analysis (urlscan.io, VirusTotal), and threat intelligence platforms.
          </p>
        </footer>
      </div>
    </FixedCardLayout>
  );
}