import type { SVGProps } from "react";

// Kumpulan ikon SVG inline (tanpa dependensi tambahan).
type IconProps = SVGProps<SVGSVGElement>;

const stroke = (props: IconProps): IconProps => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
  ...props,
});

export const MenuIcon = (props: IconProps) => (
  <svg {...stroke(props)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg {...stroke(props)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg {...stroke(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const GemIcon = (props: IconProps) => (
  <svg {...stroke(props)}>
    <path d="M6 4h12l3 5-9 11L3 9l3-5z" />
    <path d="M3 9h18M9 4l3 5 3-5M12 9v11" />
  </svg>
);

export const BoxIcon = (props: IconProps) => (
  <svg {...stroke(props)}>
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M5 12v8h14v-8M12 8v12" />
    <path d="M12 8c-1.5-4-6-4-5 0 .4 1.4 3 1 5 0zM12 8c1.5-4 6-4 5 0-.4 1.4-3 1-5 0z" />
  </svg>
);

export const ShieldIcon = (props: IconProps) => (
  <svg {...stroke(props)}>
    <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </svg>
);

export const StarIcon = (props: IconProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8L12 2.5z" />
  </svg>
);

export const SparkleIcon = (props: IconProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />
  </svg>
);

export const ChevronDownIcon = (props: IconProps) => (
  <svg {...stroke(props)}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...stroke(props)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...stroke(props)}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const WhatsAppIcon = (props: IconProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.52.146-.181.194-.301.297-.497.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.483.709.309 1.262.494 1.694.628.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.696.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const InstagramIcon = (props: IconProps) => (
  <svg {...stroke(props)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const TikTokIcon = (props: IconProps) => (
  <svg {...stroke(props)}>
    <path d="M15 3v11a4 4 0 1 1-4-4" />
    <path d="M15 3c.3 2.4 1.9 4 4.5 4.2" />
  </svg>
);

export const YouTubeIcon = (props: IconProps) => (
  <svg {...stroke(props)}>
    <rect x="2.5" y="5" width="19" height="14" rx="4" />
    <path d="M10 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
  </svg>
);
