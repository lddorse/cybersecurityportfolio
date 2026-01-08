const Hero = () => {
  return (
    <section className="mb-10">
      {/* Terminal prompt badge - centered above */}
      <div className="text-center mb-4">
        <div className="inline-block px-3 py-1 bg-slate-900 text-green-400 font-mono text-xs rounded border border-slate-700">
          <span className="text-green-500">leo@security</span>
          <span className="text-slate-400">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-slate-400">$</span> whoami
        </div>
      </div>

      {/* Main content - split left/right */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Left side - Name and title */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">Leo D. Dorsey</h1>
          
          <h2 className="text-xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-bold">
              Cybersecurity
            </span>{' '}
            <span className="text-gray-600">Technician</span>
          </h2>

          <p className="text-gray-700 mb-4 max-w-md">
            I design and implement security solutions including self-hosted infrastructure monitoring, automated compliance tools, and web applications. Skilled in threat analysis, security hardening, and bridging technical security with practical business needs.
          </p>
        </div>

        {/* Right side - Badges */}
        <div className="flex flex-col gap-2 md:mt-8">
          <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded border border-blue-200 font-medium text-sm">
            🔐 Security Controls
          </span>
          <span className="px-4 py-2 bg-green-50 text-green-700 rounded border border-green-200 font-medium text-sm">
            🛡️ Risk Assessment
          </span>
          <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded border border-purple-200 font-medium text-sm">
            🔍 Threat Analysis
          </span>
          <span className="px-4 py-2 bg-red-50 text-red-700 rounded border border-red-200 font-medium text-sm">
            📋 Compliance
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
