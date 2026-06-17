import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  CheckIcon, CheckCircleIcon, XCircleIcon,
  InfoIcon, ShieldIcon, GpsIcon, RocketIcon,
} from '../components/Icons'

const BASE_PRICES = { normal: 45000, pro: 55000 }
const BASE_LIMITS = {
  normal: { drivers: 20, staff: 30, students: 200, name: 'Normal Plan' },
  pro:    { drivers: 30, staff: 50, students: 400, name: 'Pro Plan' },
}

const fmt = n => `₹${n.toLocaleString('en-IN')}`

const NORMAL_FEATURES = [
  '1 Admin + 3 Sub-Admins',
  '20 Drivers + 30 Staff + 200 Students',
  'Real-time GPS Tracking',
  'Daily Travel Reports',
  'Basic Dashboard Access',
  'Emergency Alert System',
  'SMS Notifications (Pay-as-you-go)',
]

const PRO_FEATURES = [
  'Everything in Normal Plan +',
  '2 Admins + 6 Sub-Admins',
  '30 Drivers + 50 Staff + 400 Students',
  'Live Attendance Tracking',
  'QR Code / RFID Integration',
  'Custom Attendance Dashboard',
  'Biometric/NFC Support',
  'API & System Integration',
]

const COMPARISON_ROWS = [
  { label: 'GPS Tracking',           normal: true,  pro: true,  bg: '' },
  { label: 'Staff/Student Mgmt',     normal: true,  pro: true,  bg: 'bg-gray-50' },
  { label: 'Attendance Automation',  normal: false, pro: true,  bg: 'bg-blue-50/60' },
  { label: 'QR / RFID / Biometric',  normal: false, pro: true,  bg: '' },
  { label: 'Custom Reports',         normal: false, pro: true,  bg: 'bg-blue-50/60' },
  { label: 'API / System Integration',normal: false, pro: true, bg: '' },
]

export default function PlanPage() {
  const [plan, setPlan]         = useState('normal')
  const [drivers, setDrivers]   = useState(0)
  const [staff, setStaff]       = useState(0)
  const [students, setStudents] = useState(0)

  const basePrice = BASE_PRICES[plan]
  const limit     = BASE_LIMITS[plan]

  const driverBlocks  = Math.ceil(Math.max(0, drivers)  / 5)
  const staffBlocks   = Math.ceil(Math.max(0, staff)    / 10)
  const studentBlocks = Math.ceil(Math.max(0, students) / 15)

  const driverCost  = driverBlocks  * 500
  const staffCost   = staffBlocks   * 500
  const studentCost = studentBlocks * 500
  const totalCost   = basePrice + driverCost + staffCost + studentCost

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />

      {/* Page Hero */}
      <section
        className="pt-28 pb-12 text-center"
        style={{ background: 'linear-gradient(135deg, rgba(67,97,238,0.08) 0%, rgba(58,12,163,0.08) 100%)' }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-[#4361ee]/10 text-[#4361ee] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <GpsIcon size={15} />
            Smart Fleet Management
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h1>
          <p className="text-gray-500 text-lg">
            Annual subscription with flexible scaling — pick what fits your institution.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Pricing Cards */}
        <section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Normal Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Normal Plan</h3>
                    <p className="text-gray-500 text-sm mt-1">Basic tracking &amp; management</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#4361ee]">₹45,000</div>
                    <div className="text-gray-500 text-sm">per year</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 list-none p-0">
                  {NORMAL_FEATURES.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckIcon size={14} className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block w-full py-3 px-4 bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] text-white text-center font-medium rounded-xl transition duration-200 no-underline hover:opacity-90 hover:-translate-y-0.5"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-400 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
              <div className="absolute top-0 right-0 bg-orange-400 text-white px-4 py-1 text-xs font-semibold rounded-bl-xl tracking-wide">
                POPULAR
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Pro Plan</h3>
                    <p className="text-gray-500 text-sm mt-1">Advanced tracking + attendance</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-orange-500">₹55,000</div>
                    <div className="text-gray-500 text-sm">per year</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 list-none p-0">
                  {PRO_FEATURES.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckIcon size={14} className="text-orange-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">
                        {f === 'Everything in Normal Plan +' ? <strong>{f}</strong> : f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white text-center font-medium rounded-xl transition duration-200 no-underline hover:-translate-y-0.5"
                >
                  Upgrade Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Comparison */}
        <section className="py-12">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-50 text-[#4361ee] px-4 py-1 rounded-full text-sm font-medium mb-3">
              Compare
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Plan Comparison</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#4361ee]/5 to-[#3a0ca3]/5">
                    <th className="py-4 px-6 text-left font-semibold text-gray-700">Features</th>
                    <th className="py-4 px-6 text-center font-semibold text-gray-700">
                      <div className="text-sm">Normal Plan</div>
                      <div className="text-[#4361ee] font-bold text-base">₹45,000/yr</div>
                    </th>
                    <th className="py-4 px-6 text-center font-semibold text-gray-700">
                      <div className="text-sm">Pro Plan</div>
                      <div className="text-orange-500 font-bold text-base">₹55,000/yr</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {COMPARISON_ROWS.map(row => (
                    <tr key={row.label} className={row.bg}>
                      <td className="py-4 px-6 font-medium text-gray-700">{row.label}</td>
                      <td className="py-4 px-6 text-center">
                        {row.normal
                          ? <CheckCircleIcon size={22} className="text-green-500 inline" />
                          : <XCircleIcon    size={22} className="text-red-400 inline" />}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.pro
                          ? <CheckCircleIcon size={22} className="text-green-500 inline" />
                          : <XCircleIcon    size={22} className="text-red-400 inline" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50">
                    <td className="py-5 px-6" />
                    <td className="py-5 px-6 text-center">
                      <a href="#contact" className="inline-block py-2 px-6 border-2 border-[#4361ee] text-[#4361ee] font-medium rounded-lg hover:bg-[#4361ee] hover:text-white transition duration-200 no-underline text-sm">
                        Get Started
                      </a>
                    </td>
                    <td className="py-5 px-6 text-center">
                      <a href="#contact" className="inline-block py-2 px-6 bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] text-white font-medium rounded-lg hover:opacity-90 transition duration-200 no-underline text-sm">
                        Upgrade Now
                      </a>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>

        {/* Custom Plan Calculator */}
        <section className="py-12">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-50 text-[#4361ee] px-4 py-1 rounded-full text-sm font-medium mb-3">
              Calculator
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Custom Plan Builder</h2>
            <p className="text-gray-500 mt-2">Price your exact requirements</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Plan Toggle */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Select Plan Type</label>
                <div className="flex rounded-xl overflow-hidden border border-gray-200">
                  {['normal', 'pro'].map(p => (
                    <button
                      key={p}
                      onClick={() => setPlan(p)}
                      className={`flex-1 py-3 px-4 text-center cursor-pointer border-none transition-all font-medium text-sm ${
                        plan === p
                          ? p === 'normal'
                            ? 'bg-[#4361ee] text-white'
                            : 'bg-orange-500 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      } ${p === 'pro' ? 'border-l border-gray-200' : ''}`}
                    >
                      <div>{p === 'normal' ? 'Normal' : 'Pro'}</div>
                      <div className="text-xs opacity-80">{fmt(BASE_PRICES[p])}/yr</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              {[
                { key: 'drivers',  label: 'Additional Drivers',  base: limit.drivers,  val: drivers,  set: setDrivers,  unit: 'drivers' },
                { key: 'staff',    label: 'Additional Staff',    base: limit.staff,    val: staff,    set: setStaff,    unit: 'staff' },
                { key: 'students', label: 'Additional Students', base: limit.students, val: students, set: setStudents, unit: 'students' },
              ].map(({ key, label, base, val, set, unit }) => {
                const blocks = key === 'drivers' ? driverBlocks : key === 'staff' ? staffBlocks : studentBlocks
                const cost   = blocks * 500
                return (
                  <div className="mb-6" key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {label}{' '}
                      <span className="text-gray-400 font-normal">(Base: {base} included)</span>
                    </label>
                    <div className="flex rounded-xl border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-[#4361ee] transition-all">
                      <input
                        type="number"
                        min="0"
                        value={val}
                        onChange={e => set(Math.max(0, parseInt(e.target.value) || 0))}
                        className="flex-1 py-2.5 px-4 outline-none border-none text-sm bg-white"
                      />
                      <span className="bg-gray-50 px-4 flex items-center text-gray-500 text-sm border-l border-gray-200">
                        {unit}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs mt-1.5 text-gray-500">
                      <span>{blocks} block{blocks !== 1 ? 's' : ''}</span>
                      <span className="font-medium text-[#4361ee]">+ {fmt(cost)}</span>
                    </div>
                  </div>
                )
              })}

              <div className="bg-blue-50 p-4 rounded-xl text-sm text-[#4361ee] flex items-start gap-2.5">
                <InfoIcon size={16} className="shrink-0 mt-0.5" />
                <span>Each block (5 drivers / 10 staff / 15 students) costs ₹500/year</span>
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 h-fit lg:sticky lg:top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Your Custom Plan</h3>

              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-gray-700">{limit.name}</span>
                <span className="text-2xl font-bold text-[#4361ee]">{fmt(basePrice)}</span>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { label: 'Additional Drivers',  cost: driverCost },
                  { label: 'Additional Staff',    cost: staffCost },
                  { label: 'Additional Students', cost: studentCost },
                ].map(({ label, cost }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-gray-500">{label}</span>
                    <span className={`font-medium ${cost > 0 ? 'text-[#4361ee]' : 'text-gray-400'}`}>
                      {cost > 0 ? `+ ${fmt(cost)}` : 'Included'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-100">
                <span className="font-bold text-gray-900">Total Annual Cost</span>
                <span className="text-2xl font-bold text-[#4361ee]">{fmt(totalCost)}</span>
              </div>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] text-white text-center font-medium rounded-xl transition duration-200 no-underline mb-4 hover:opacity-90 hover:-translate-y-0.5"
              >
                <RocketIcon size={16} />
                Get Your Custom Plan
              </a>

              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldIcon size={13} />
                <span>Includes 1 year license and basic support</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="py-16 rounded-2xl text-white text-center my-8"
          style={{ background: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)' }}
        >
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Fleet Management?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join 500+ schools and businesses using VazhiTrax for reliable tracking and attendance automation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a
                href="https://vazhitrax.tamilloft.in/app/"
                className="py-3 px-6 bg-white text-[#4361ee] font-semibold rounded-xl hover:bg-gray-50 transition duration-200 no-underline"
              >
                Request Demo
              </a>
              <a
                href="https://tamilloft.in/view/contact.html"
                className="py-3 px-6 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition duration-200 no-underline"
              >
                Contact Sales
              </a>
            </div>
            <div className="text-sm opacity-75">Trusted by educational institutions nationwide</div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
