import dashboardImg from '../img/ui/dashbord.png'
import { ExpandIcon, MapIcon, LayersIcon } from './Icons'

export default function DashboardPreview() {
  return (
    <section
      id="pricing"
      className="py-20 mx-4 my-16 rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Interactive Dashboard</h2>
          <p className="text-lg text-white/80">See your fleet management made simple</p>
        </div>

        <div className="flex justify-center">
          <div className="w-full lg:w-10/12">
            <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
              <img src={dashboardImg} alt="Vazhitrax Dashboard" className="w-full block" />
            </div>

            <div className="text-center mt-6 flex justify-center gap-3 flex-wrap">
              {[
                { Icon: ExpandIcon, label: 'Fullscreen' },
                { Icon: MapIcon,    label: 'Live View' },
                { Icon: LayersIcon, label: 'Layers' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  className="inline-flex items-center gap-1.5 border border-white/50 text-white text-sm px-4 py-1.5 rounded-full hover:bg-white/10 transition-all cursor-pointer bg-transparent"
                >
                  <Icon size={14} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
