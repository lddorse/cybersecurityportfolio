import React from "react";
import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";

export default function TicketProjectPage004() {
  const ticket = {
    id: "#004",
    title: "Slow WiFi / High Latency in East Wing",
    priority: "Medium",
    category: "Network Performance",
    reporter: "Leo Dorsey",
    created: "2 days ago",
    summary:
      "Three users reported slow WiFi speeds between 11am–1pm. Video calls were stuttering while wired connections were unaffected. Issue likely related to congestion or AP interference.",
    status: "Resolved",
    timeline: [
      { time: "11:05 AM", actor: "Users", note: "Initial reports of slow WiFi and call issues" },
      { time: "11:22 AM", actor: "Leo Dorsey", note: "Checked AP metrics and user signal data" },
      { time: "11:40 AM", actor: "Leo Dorsey", note: "Reassigned clients and adjusted WiFi channels" },
      { time: "12:15 PM", actor: "System", note: "Latency returned to normal levels" }
    ],
    checks: [
      "Confirm scope of affected area (WiFi only, East Wing only)",
      "Review AP client load and channel utilization",
      "Check for overlapping channels or interference",
      "Run speed test and latency checks at multiple spots",
      "Validate post-change performance and user experience"
    ],
    resolution:
      "Rebalanced client load between APs, changed channel assignments to prevent overlap, reduced channel width for improved stability, and applied bandwidth shaping during peak hours. Latency dropped from ~380ms to ~22ms.",
    attachments: [
      { name: "ap-metrics-report.txt", type: "log", size: "18KB" },
      { name: "wifi-heatmap-mock.png", type: "image", size: "210KB" }
    ],
    lessons: [
      "East Wing needs an additional AP to support peak device count",
      "Quarterly WiFi heatmap surveys recommended",
      "Add automatic alerts for APs exceeding 35 connected clients"
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
              <div className="text-gray-700">{ticket.resolution}</div>
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
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">WiFi Diagnostics</span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">Network Troubleshooting</span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">Root Cause Analysis</span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">Documentation</span>
              </div>
            </div>
          </aside>
        </section>

        <footer className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="text-sm text-gray-700">
            <strong>Portfolio Note:</strong> This simulated network troubleshooting ticket demonstrates analysis of AP load, channel overlap, and wireless performance tuning. Real environments would use enterprise dashboards such as UniFi, Meraki, or Cisco Prime for validation.
          </p>
        </footer>
      </div>
    </FixedCardLayout>
  );
}
