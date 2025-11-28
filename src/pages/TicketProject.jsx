import React from "react";
import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from '../components/BackButton';

export default function TicketProjectPage() {
  const ticket = {
    id: "#001",
    title: "Unrecognized MFA Challenge at 3am",
    priority: "Medium",
    category: "Security Incident",
    reporter: "Leo Dorsey",
    created: "2 days ago",
    summary:
      "User reports receiving an unexpected MFA code request overnight. Unsure if login attempt was legitimate. No known scheduled tasks. Possible credential compromise.",
    status: "Investigating",
    timeline: [
      { time: "03:12 AM", actor: "System", note: "MFA request sent to user" },
      { time: "03:15 AM", actor: "User", note: "User received code and reported via helpdesk" },
      { time: "10:02 AM", actor: "Leo Dorsey", note: "Ticket created in Spiceworks" }
    ],
    checks: [
      "Verify MFA logs for originating IP and device",
      "Check login attempt history and conditional access policies",
      "Scan for concurrent suspicious activity (email, mailbox rules)",
      "Reset credentials if evidence of compromise found",
      "Lock sessions and force re-authentication"
    ],
    resolution: null,
    attachments: [
      { name: "auth-logs-sample.txt", type: "log", size: "12KB" },
      { name: "screenshot-mfa-notification.png", type: "image", size: "86KB" }
    ],
    lessons: [
      "Consider rate-limiting MFA requests for suspicious geographic origins",
      "Add user education about unexpected MFA prompts and reporting steps",
      "Tune conditional access policies to challenge unusual locations/devices"
    ]
  };

  return (
    <FixedCardLayout>
      <div className="max-w-4xl mx-auto">
        <BackButton />
        
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-4">{ticket.title}</h1>
          <div className="flex flex-wrap gap-3 items-center mb-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              {ticket.priority} Priority
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800">
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
                {ticket.resolution ? (
                  <p>{ticket.resolution}</p>
                ) : (
                  <p className="italic text-gray-600">
                    No resolution recorded yet. Working through investigative checks listed above.
                  </p>
                )}
              </div>
            </article>
          </div>

          <aside className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Status</h2>
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800">
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
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">Incident Response</span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">Log Analysis</span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">MFA Security</span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">Documentation</span>
              </div>
            </div>
          </aside>
        </section>

        <footer className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="text-sm text-gray-700">
            <strong>Portfolio Note:</strong> This is a simulated helpdesk ticket demonstrating systematic 
            incident response procedures. In a real environment, actual log files and authentication data 
            would be attached and analyzed using SIEM tools like Splunk or Microsoft Sentinel.
          </p>
        </footer>
      </div>
    </FixedCardLayout>
  );
}