import {
  GpsIcon, GaugeIcon, UserCheckIcon,
  GasPumpIcon, BellIcon, RouteIcon, ArrowRightIcon,
} from './Icons'

const FEATURES = [
  { Icon: GpsIcon,       title: 'Live GPS Tracking',     desc: 'Real-time bus location with route replay history and geofencing alerts.' },
  { Icon: GaugeIcon,     title: 'Driver Analytics',      desc: 'Monitor speed, idle time, harsh braking, and driving behavior patterns.' },
  { Icon: UserCheckIcon, title: 'Automated Attendance',  desc: 'RFID or app-based student/employee check-ins with digital records.' },
  { Icon: GasPumpIcon,   title: 'Fuel Reports',          desc: 'Track mileage, cost per km, and identify fuel efficiency opportunities.' },
  { Icon: BellIcon,      title: 'Smart Alerts',          desc: 'Instant notifications for delays, emergencies, or route deviations.' },
  { Icon: RouteIcon,     title: 'Route Optimization',    desc: 'AI-powered suggestions to reduce travel time and fuel consumption.' },
]

const DELAYS = ['delay-1', 'delay-2', 'delay-3', 'delay-1', 'delay-2', 'delay-3']

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade">
          <span className="inline-block bg-blue-50 text-[#4361ee] px-4 py-1 rounded-full text-sm font-medium mb-3">
            Features
          </span>
          <h2 className="text-4xl font-bold mb-3">Powerful Fleet Management Tools</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Everything you need to manage your fleet efficiently and reduce operational costs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <div key={title} className={`animate-fade ${DELAYS[i]}`}>
              <div className="bg-white rounded-xl p-6 h-full transition-all duration-300 hover:-translate-y-2.5 hover:shadow-xl border border-black/5 shadow-md group">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-blue-50 text-[#4361ee] transition-colors group-hover:bg-[#4361ee] group-hover:text-white">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{desc}</p>
                <a href="#" className="text-[#4361ee] no-underline inline-flex items-center gap-1.5 font-medium text-sm hover:gap-2.5 transition-all">
                  Learn more <ArrowRightIcon size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
