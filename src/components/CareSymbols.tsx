// The ISO laundry symbols from the product care card, redrawn as line icons.

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function WashCold({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M2.5 7.5c1.6-1.8 3.2-1.8 4.75 0 1.58 1.8 3.17 1.8 4.75 0 1.58 1.8 3.17 1.8 4.75 0 1.55-1.8 3.15-1.8 4.75 0" />
      <path {...stroke} d="M4 9.5 6 19h12l2-9.5" />
      <text x="12" y="16.6" textAnchor="middle" fontSize="6.2" fontFamily="Inter, sans-serif" fill="currentColor" stroke="none">
        30
      </text>
    </svg>
  )
}

export function TumbleLow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect {...stroke} x="4" y="4" width="16" height="16" />
      <circle {...stroke} cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function NoBleach({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M12 5 21 19H3L12 5Z" />
      <path {...stroke} d="M4.5 4.5l15 15M19.5 4.5l-15 15" />
    </svg>
  )
}

export function NoIron({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M5 17.5h15.5v-1.8c0-4.2-3-6.7-7.4-6.7H8.6l-3.6 8.5Z" />
      <path {...stroke} d="M4 5l17 16M21 5 4 21" />
    </svg>
  )
}
