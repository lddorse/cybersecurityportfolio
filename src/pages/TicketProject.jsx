import FixedCardLayout from '../components/FixedCardLayout';

const TicketProject = () => {
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
      <h1 className="text-3xl font-bold mb-4">{ticket.title}</h1>
      
      <div className="mb-4 flex flex-wrap gap-3 items-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
          {ticket.priority} Priority
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800">
          {ticket.status}
        </span>
        <span className="text-sm text-gray-600">{ticket.id} • {ticket.reporter} • {ticket.created}</span>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
      <p>{ticket.summary}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Investigation & Triage Steps</h2>
      <ol className="list-decimal pl-6 space-y-2">
        {ticket.checks.map((check, i) => (
          <li key={i}>{check}</li>
        ))}
      </ol>

      <h2 className="text-xl font-semibold mt-6 mb-2">Timeline</h2>
      <div className="space-y-3">
        {ticket.timeline.map((t, i) => (
          <div key={i} className="flex items-start border-l-2 border-blue-500 pl-4">
            <div className="w-24 flex-shrink-0">
              <span className="text-sm font-medium text-gray-600">{t.time}</span>
            </div>
            <div>
              <div className="font-semibold">{t.actor}</div>
              <div className="text-gray-700">{t.note}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Evidence & Attachments</h2>
      <ul className="list-disc pl-6">
        {ticket.attachments.map((a, i) => (
          <li key={i}>
            <span className="font-medium">{a.name}</span> 
            <span className="text-sm text-gray-600"> ({a.type}, {a.size})</span>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Lessons Learned & Recommendations</h2>
      <ul className="list-disc pl-6 space-y-2">
        {ticket.lessons.map((lesson, i) => (
          <li key={i}>{lesson}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Skills Demonstrated</h2>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Incident Response</span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Log Analysis</span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">MFA Security</span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Threat Investigation</span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Documentation</span>
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded">
        <p className="text-sm text-gray-700">
          <strong>Portfolio Note:</strong> This is a simulated helpdesk ticket demonstrating systematic incident response procedures. 
          In a real environment, actual log files and authentication data would be attached and analyzed using SIEM tools.
        </p>
      </div>
    </FixedCardLayout>
  );
};

export default TicketProject;