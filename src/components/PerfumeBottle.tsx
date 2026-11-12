import { useId } from "react";

// Ilustrasi botol parfum SVG. Warna cairan mengikuti varian.
interface PerfumeBottleProps {
  name: string; // nama varian, tampil di label botol
  liquidFrom: string;
  liquidTo: string;
  className?: string;
}

export default function PerfumeBottle({
  name,
  liquidFrom,
  liquidTo,
  className,
}: PerfumeBottleProps) {
  // ID unik per instance agar gradien SVG tidak bentrok
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [line1, line2] = name.toUpperCase().split(" ");

  return (
    <svg
      viewBox="0 0 200 320"
      className={className}
      role="img"
      aria-label={`Botol parfum Aurelle ${name} 50 ml`}
    >
      <defs>
        <linearGradient id={`${uid}cap`} x1="0" x2="1">
          <stop offset="0" stopColor="#8a6b2f" />
          <stop offset="0.35" stopColor="#e6d3a8" />
          <stop offset="0.6" stopColor="#c9a96e" />
          <stop offset="1" stopColor="#7a5c25" />
        </linearGradient>
        <linearGradient id={`${uid}liquid`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={liquidFrom} />
          <stop offset="1" stopColor={liquidTo} />
        </linearGradient>
        <linearGradient id={`${uid}glass`} x1="0" x2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id={`${uid}shadow`}>
          <stop offset="0" stopColor="#000" stopOpacity="0.45" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* bayangan dasar */}
      <ellipse cx="100" cy="304" rx="82" ry="10" fill={`url(#${uid}shadow)`} />

      {/* tutup botol */}
      <rect x="76" y="10" width="48" height="52" rx="7" fill={`url(#${uid}cap)`} />
      <rect x="76" y="54" width="48" height="6" fill="#000" opacity="0.18" />
      {/* leher */}
      <rect x="84" y="62" width="32" height="16" fill={`url(#${uid}cap)`} />

      {/* badan kaca */}
      <rect
        x="30"
        y="76"
        width="140"
        height="224"
        rx="24"
        fill="#1a1816"
        stroke="#e6d3a8"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      {/* cairan */}
      <rect
        x="39"
        y="112"
        width="122"
        height="178"
        rx="17"
        fill={`url(#${uid}liquid)`}
      />
      {/* kilau kaca */}
      <rect x="30" y="76" width="140" height="224" rx="24" fill={`url(#${uid}glass)`} />
      <path
        d="M46 110c0-8 5-14 12-14v190c-7 0-12-6-12-14V110z"
        fill="#fff"
        opacity="0.16"
      />

      {/* label */}
      <rect x="60" y="164" width="80" height="94" rx="4" fill="#fbf8f1" />
      <rect
        x="64"
        y="168"
        width="72"
        height="86"
        rx="2"
        fill="none"
        stroke="#c9a96e"
        strokeWidth="0.8"
      />
      <path d="M100 178l4 4-4 4-4-4 4-4z" fill="#c9a96e" />
      <text
        x="100"
        y="204"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="13"
        letterSpacing="3"
        fill="#141311"
      >
        AURELLE
      </text>
      <line x1="80" y1="212" x2="120" y2="212" stroke="#c9a96e" strokeWidth="0.8" />
      <text
        x="100"
        y="226"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="7.5"
        letterSpacing="2"
        fill="#141311"
      >
        {line1}
      </text>
      {line2 && (
        <text
          x="100"
          y="237"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="7.5"
          letterSpacing="2"
          fill="#141311"
        >
          {line2}
        </text>
      )}
      <text
        x="100"
        y="249"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="5.5"
        letterSpacing="1.5"
        fill="#8a6b2f"
      >
        EDP · 50 ML
      </text>
    </svg>
  );
}
