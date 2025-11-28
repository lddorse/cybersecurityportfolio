import React from "react";
import BackButton from '../components/BackButton';

// TicketProjectPage.jsx
// Single-file React component (Tailwind CSS utility classes assumed available)
// Default export: TicketProjectPage

export default function TicketProjectPage() {
  const ticket = {
    id: "#001",
    title: "Unrecognized MFA Challenge at 3am",
    priority: "Medium",
    category: "Other",
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
    <div className="max-w-4xl mx-auto p-6">
        <BackButton />
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">{ticket.title}</h1>
          <p className="text-sm text-gray-500">{ticket.id} • Reported by {ticket.reporter} • {ticket.created}</p>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            {ticket.priority} Priority
          </span>
          <div className="mt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">{ticket.category}</span>
          </div>
        </div>
      </header>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <article className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold">Summary</h2>
            <p className="mt-2 text-gray-700">{ticket.summary}</p>
          </article>

          <article className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold">Investigation / Triage</h2>
            <ol className="mt-3 list-decimal list-inside text-gray-700 space-y-2">
              {ticket.checks.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ol>

            <div className="mt-4">
              <h3 className="font-medium">Timeline</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                {ticket.timeline.map((t, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-20 text-xs text-gray-500">{t.time}</span>
                    <div>
                      <div className="text-sm font-semibold">{t.actor}</div>
                      <div className="text-sm">{t.note}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold">Attachments</h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ticket.attachments.map((a, i) => (
                <div key={i} className="p-3 border rounded flex items-center justify-between">
                  <div>
                    <div className="font-medium">{a.name}</div>
                    <div className="text-xs text-gray-500">{a.type} • {a.size}</div>
                  </div>
                  <button className="px-3 py-1 text-sm rounded bg-gray-100">Preview</button>
                </div>
              ))}
            </div>
          </article>

          <article className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold">Resolution & Next Steps</h2>
            <div className="mt-2 text-gray-700">
              {ticket.resolution ? (
                <p>{ticket.resolution}</p>
              ) : (
                <p className="italic text-gray-500">No resolution recorded yet. Working through investigative checks listed above.</p>
              )}
            </div>

            <div className="mt-4">
              <button className="mr-2 px-4 py-2 rounded bg-blue-600 text-white">Record Resolution</button>
              <button className="px-4 py-2 rounded border">Escalate to SOC</button>
            </div>
          </article>
        </div>

        <aside className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h3 className="font-semibold">Status</h3>
            <div className="mt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800">{ticket.status}</span>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium">Owner</h4>
              <div className="mt-1 text-sm text-gray-700">{ticket.reporter}</div>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium">Quick Actions</h4>
              <div className="mt-2 flex flex-col gap-2">
                <button className="w-full px-3 py-2 rounded border">Add Comment</button>
                <button className="w-full px-3 py-2 rounded border">Add Log Entry</button>
                <button className="w-full px-3 py-2 rounded bg-yellow-50">Mark as False Positive</button>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-white">
            <h3 className="font-semibold">Lessons & Follow-ups</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
              {ticket.lessons.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 border rounded-lg bg-white">
            <h3 className="font-semibold">Tags</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded bg-gray-100">MFA</span>
              <span className="px-2 py-1 text-xs rounded bg-gray-100">Auth-Logs</span>
              <span className="px-2 py-1 text-xs rounded bg-gray-100">Investigation</span>
              <span className="px-2 py-1 text-xs rounded bg-gray-100">User-Education</span>
            </div>
          </div>
        </aside>
      </section>

      <footer className="mt-8 text-sm text-gray-600">
        <div>Portfolio entry: Ticket simulation project for SOC/NOC interview prep.</div>
        <div className="mt-1">Tip: replace placeholder attachments with real logs/screenshots and add a short write-up describing commands/queries used during triage.</div>
      </footer>
    </div>
  );
}
