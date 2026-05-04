export default function Logo({ width = 160 }) {
  const height = Math.round(width / 4)
  return (
    <svg width={width} height={height} viewBox="0 0 400 100">
      <text x="10" y="65" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="white">Site</text>
      <text x="110" y="65" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="#2dd4bf">Spark</text>
      <g transform="translate(245, 15)">
        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="#2dd4bf">
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite"/>
        </path>
      </g>
      <text x="270" y="65" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="white">Web</text>
    </svg>
  )
}
