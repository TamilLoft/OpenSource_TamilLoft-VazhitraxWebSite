const STEPS = [
  { num: 1, title: 'Install Device', desc: 'Plug-and-play GPS hardware installed in your vehicle in minutes' },
  { num: 2, title: 'Data Sync', desc: 'Real-time location and sensor data transmitted to secure cloud' },
  { num: 3, title: 'Monitor', desc: 'Access live dashboards from web or mobile apps' },
  { num: 4, title: 'Optimize', desc: 'Receive automated reports and efficiency recommendations' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[#f9fafe]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-[#4361ee] px-4 py-1 rounded-full text-sm font-medium mb-3">
            Process
          </span>
          <h2 className="text-4xl font-bold mb-3">How Vazhitrax Works</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Simple implementation with powerful results in just 4 easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map(step => (
            <div
              key={step.num}
              className="bg-white rounded-xl p-7 h-full text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl shadow-md"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4361ee] to-[#3a0ca3] text-white flex items-center justify-center font-bold text-xl mx-auto mb-5">
                {step.num}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
