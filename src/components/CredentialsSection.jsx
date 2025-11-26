const CredentialsSection = () => {
  return (
    <div className="bg-gray-100 mt-10 px-4 py-6 rounded-lg shadow text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Credentials</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Education</h3>
        <ul className="space-y-1 pl-4 list-disc text-sm">
          <li>
            <strong>MS in Cybersecurity</strong>, Eastern Illinois University
          </li>
          <li>
            <strong>BS in Art Technology</strong>, Illinois State University
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-1">Certifications</h3>
        <ul className="space-y-1 pl-4 list-disc text-sm">
          <li>CompTIA Security+</li>
        </ul>
      </div>
    </div>
  );
};

export default CredentialsSection;
