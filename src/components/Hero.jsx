export default function Hero() {
  return (
    <section
      className="pt-36 pb-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(rgba(135,184,248,0.5), rgba(11,109,255,0.5))' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Text */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-col">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Smart <span className="text-gradient">Fleet Tracking</span> Made Simple
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Real-time GPS tracking, driver analytics, and automated attendance in one powerful platform.
              </p>
              <div className="mb-6">
                <div className="border-l-4 border-[#4361ee] pl-3 ml-2">
                  <p className="m-0 font-bold text-sm">Your Fleet, Under Control — The Smart Way</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://bus-tracker.tamilloft.in/"
                  className="bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] text-white px-6 py-2.5 rounded-full font-medium no-underline hover:-translate-y-0.5 hover:shadow-lg transition-all inline-block"
                >
                  Get Free Demo
                </a>
                <a
                  href="#features"
                  className="border border-[#4361ee] text-[#4361ee] px-6 py-2.5 rounded-full font-medium no-underline hover:bg-[#4361ee] hover:text-white transition-all inline-block"
                >
                  Explore Features
                </a>
              </div>
            </div>
          </div>

          {/* SVG Illustration */}
          <div className="w-full lg:w-1/2 px-4 mt-10 lg:mt-0">
            <div className="floating">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full">
                <defs>
                  <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4361ee" />
                    <stop offset="100%" stopColor="#3a0ca3" />
                  </linearGradient>
                </defs>
                <rect x="100" y="100" width="600" height="400" rx="20" fill="url(#heroGradient)" opacity="0.1" />
                <rect x="150" y="150" width="500" height="300" rx="15" fill="white" stroke="url(#heroGradient)" strokeWidth="2" />
                <path d="M150,180 L650,180" stroke="#4361ee" strokeWidth="2" strokeDasharray="5,5" />
                <circle cx="170" cy="165" r="8" fill="#f72585" />
                <circle cx="200" cy="165" r="8" fill="#4895ef" />
                <circle cx="230" cy="165" r="8" fill="#4cc9f0" />
                <rect x="170" y="200" width="460" height="230" rx="10" fill="#f8f9fa" />
                <path d="M170,230 L630,230 M170,260 L630,260 M170,290 L630,290 M170,320 L630,320 M170,350 L630,350 M170,380 L630,380 M170,410 L630,410" stroke="#dee2e6" strokeWidth="1" />
                <rect x="180" y="240" width="120" height="20" rx="4" fill="#4895ef" opacity="0.7" />
                <rect x="180" y="280" width="80" height="20" rx="4" fill="#4895ef" opacity="0.7" />
                <rect x="180" y="320" width="150" height="20" rx="4" fill="#4895ef" opacity="0.7" />
                <rect x="180" y="360" width="100" height="20" rx="4" fill="#4895ef" opacity="0.7" />
                <circle cx="300" cy="250" r="40" fill="white" stroke="#4361ee" strokeWidth="2" />
                <path d="M300,230 L300,270 M270,250 L330,250" stroke="#4361ee" strokeWidth="2" />
                <circle cx="450" cy="250" r="40" fill="white" stroke="#4361ee" strokeWidth="2" />
                <path d="M430,250 L470,250 M450,230 L450,270" stroke="#4361ee" strokeWidth="2" />
                <circle cx="550" cy="250" r="40" fill="white" stroke="#4361ee" strokeWidth="2" />
                <path d="M530,230 L570,270 M530,270 L570,230" stroke="#4361ee" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
