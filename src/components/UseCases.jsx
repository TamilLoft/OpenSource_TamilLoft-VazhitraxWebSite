import { SchoolIcon, BusIcon, BuildingIcon, ArrowRightIcon } from './Icons'

const USE_CASES = [
  { Icon: SchoolIcon,   title: 'Schools & Colleges',  desc: 'Parent alerts, student safety logs, and automated attendance' },
  { Icon: BusIcon,      title: 'Transport Fleets',    desc: 'Driver performance scoring and fuel savings analytics' },
  { Icon: BuildingIcon, title: 'Corporate Shuttles',  desc: 'Employee shuttle ETAs and occupancy reports' },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-[#4361ee] px-4 py-1 rounded-full text-sm font-medium mb-3">
            Industries
          </span>
          <h2 className="text-4xl font-bold mb-3">Who Uses Vazhitrax?</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Trusted by organizations across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USE_CASES.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-xl shrink-0 text-[#4361ee] transition-colors group-hover:bg-[#4361ee] group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <a href="#" className="text-[#4361ee] no-underline font-medium text-sm inline-flex items-center gap-1.5">
                    Learn more <ArrowRightIcon size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
