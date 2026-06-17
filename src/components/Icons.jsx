// Stroke-based icon base
function S({ size = 20, className = '', viewBox = '0 0 24 24', sw = 1.5, children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  )
}

// Fill-based icon base
function F({ size = 20, className = '', viewBox = '0 0 24 24', children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="currentColor"
      className={className}
    >
      {children}
    </svg>
  )
}

/* ─── Navigation ──────────────────────────────────────────────── */

export function RocketIcon({ size = 20, className = '' }) {
  return (
    <S size={size} className={className}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </S>
  )
}

export function MenuIcon({ size = 22, className = '' }) {
  return (
    <S size={size} className={className} sw={2}>
      <line x1="4" x2="20" y1="6"  y2="6"  />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </S>
  )
}

export function CloseIcon({ size = 22, className = '' }) {
  return (
    <S size={size} className={className} sw={2}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </S>
  )
}

export function ArrowRightIcon({ size = 15, className = '' }) {
  return (
    <S size={size} className={className} sw={2}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </S>
  )
}

/* ─── Features ────────────────────────────────────────────────── */

export function GpsIcon({ size = 24, className = '' }) {
  return (
    <S size={size} className={className}>
      <path d="M4 10a7.31 7.31 0 0 0 10 10Z" />
      <path d="m9 15 3-3" />
      <path d="M17 13a6 6 0 0 0-6-6" />
      <path d="M21 13A10 10 0 0 0 11 3" />
    </S>
  )
}

export function GaugeIcon({ size = 24, className = '' }) {
  return (
    <S size={size} className={className}>
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 12 9 9" />
      <circle cx="12" cy="12" r="2" />
      <path d="M7.05 7.05 5.64 5.64" />
      <path d="M2 12h2" />
      <path d="M12 2v2" />
    </S>
  )
}

export function UserCheckIcon({ size = 24, className = '' }) {
  return (
    <S size={size} className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </S>
  )
}

export function GasPumpIcon({ size = 24, className = '' }) {
  return (
    <S size={size} className={className}>
      <path d="M11 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
      <path d="M13 9h4a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0V8l-4-4" />
      <path d="M4 9h7" />
    </S>
  )
}

export function BellIcon({ size = 24, className = '' }) {
  return (
    <S size={size} className={className}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </S>
  )
}

export function RouteIcon({ size = 24, className = '' }) {
  return (
    <S size={size} className={className}>
      <circle cx="6"  cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5"  r="3" />
    </S>
  )
}

/* ─── Use Cases ───────────────────────────────────────────────── */

export function SchoolIcon({ size = 24, className = '' }) {
  return (
    <S size={size} className={className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </S>
  )
}

export function BusIcon({ size = 24, className = '' }) {
  return (
    <S size={size} className={className}>
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7"  cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </S>
  )
}

export function BuildingIcon({ size = 24, className = '' }) {
  return (
    <S size={size} className={className}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" />
      <path d="M12 10h.01" /><path d="M16 10h.01" /><path d="M8 10h.01" />
      <path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 14h.01" />
    </S>
  )
}

/* ─── Dashboard Preview ───────────────────────────────────────── */

export function ExpandIcon({ size = 15, className = '' }) {
  return (
    <S size={size} className={className}>
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </S>
  )
}

export function MapIcon({ size = 15, className = '' }) {
  return (
    <S size={size} className={className}>
      <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" />
      <path d="M9 3v15" />
      <path d="M15 6v15" />
    </S>
  )
}

export function LayersIcon({ size = 15, className = '' }) {
  return (
    <S size={size} className={className}>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </S>
  )
}

/* ─── Footer ──────────────────────────────────────────────────── */

export function EnvelopeIcon({ size = 15, className = '' }) {
  return (
    <S size={size} className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </S>
  )
}

export function PhoneIcon({ size = 15, className = '' }) {
  return (
    <S size={size} className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.36 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.29 6.29l1.06-1.3a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </S>
  )
}

export function MapPinIcon({ size = 15, className = '' }) {
  return (
    <S size={size} className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </S>
  )
}

export function HeartIcon({ size = 14, className = '' }) {
  return (
    <F size={size} className={className}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </F>
  )
}

export function FacebookIcon({ size = 16, className = '' }) {
  return (
    <F size={size} className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </F>
  )
}

export function TwitterXIcon({ size = 16, className = '' }) {
  return (
    <F size={size} className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </F>
  )
}

export function LinkedInIcon({ size = 16, className = '' }) {
  return (
    <F size={size} className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </F>
  )
}

export function InstagramIcon({ size = 16, className = '' }) {
  return (
    <F size={size} className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </F>
  )
}

/* ─── Plan Page ───────────────────────────────────────────────── */

export function CheckIcon({ size = 15, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function CheckCircleIcon({ size = 20, className = '' }) {
  return (
    <F size={size} className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z" />
    </F>
  )
}

export function XCircleIcon({ size = 20, className = '' }) {
  return (
    <F size={size} className={className}>
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
    </F>
  )
}

export function InfoIcon({ size = 16, className = '' }) {
  return (
    <F size={size} className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </F>
  )
}

export function ShieldIcon({ size = 14, className = '' }) {
  return (
    <F size={size} className={className}>
      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
    </F>
  )
}
