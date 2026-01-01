export default function LitHubLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="40"
      height="40"
      className="inline-block mr-2"
    >
      {/* Background circle */}
      <circle cx="100" cy="100" r="95" fill="#ec4899" opacity="0.1" />

      {/* Left book */}
      <rect x="50" y="60" width="35" height="80" fill="#ec4899" rx="3" />
      <line x1="67.5" y1="60" x2="67.5" y2="140" stroke="#ffffff" strokeWidth="2" />

      {/* Center/Hub circle */}
      <circle cx="100" cy="100" r="15" fill="#ec4899" />
      <circle cx="100" cy="100" r="10" fill="#ffffff" opacity="0.3" />

      {/* Right book */}
      <rect x="115" y="60" width="35" height="80" fill="#3b82f6" rx="3" />
      <line x1="132.5" y1="60" x2="132.5" y2="140" stroke="#ffffff" strokeWidth="2" />

      {/* Top accent - page/light */}
      <path
        d="M 100 40 L 110 50 L 100 50 Z"
        fill="#fbbf24"
        opacity="0.8"
      />

      {/* Text below logo */}
      <text
        x="100"
        y="165"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        fill="#1f2937"
        fontFamily="Arial, sans-serif"
      >
        LitHub
      </text>
    </svg>
  );
}
