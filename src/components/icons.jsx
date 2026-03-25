function Svg({ children, ...props }) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      {children}
    </svg>
  );
}

const icons = {
  brain: (
    <Svg>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M5.6 6.2l2.8 2.8" />
      <path d="M15.6 16.2l2.8 2.8" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="M5.6 17.8l2.8-2.8" />
      <path d="M15.6 7.8l2.8-2.8" />
      <circle cx="12" cy="12" r="3.3" />
    </Svg>
  ),
  screen: (
    <Svg>
      <rect x="4" y="4" width="16" height="12" rx="2" />
      <path d="M9 20h6" />
      <path d="M12 16v4" />
    </Svg>
  ),
  grid: (
    <Svg>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <path d="M13 16.5h7" />
      <path d="M16.5 13v7" />
    </Svg>
  ),
  cloud: (
    <Svg>
      <path d="M7 19a4 4 0 1 1 0-8 5 5 0 0 1 9.5-1.5A3.5 3.5 0 1 1 18 19H7Z" />
      <path d="M9 14h6" />
    </Svg>
  ),
  content: (
    <Svg>
      <path d="M4 7.5C4 6.12 5.12 5 6.5 5h11C18.88 5 20 6.12 20 7.5v9c0 1.38-1.12 2.5-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
      <path d="M8 10h8" />
      <path d="M8 14h5" />
    </Svg>
  ),
  team: (
    <Svg>
      <circle cx="9" cy="8" r="3" />
      <path d="M4.5 19a4.5 4.5 0 0 1 9 0" />
      <circle cx="17" cy="9" r="2.2" />
      <path d="M14.8 18.2a3.6 3.6 0 0 1 5 0" />
    </Svg>
  ),
  startup: (
    <Svg>
      <path d="M12 3l4.5 7.5H7.5L12 3Z" />
      <path d="M8.2 12.5H15.8L12 21l-3.8-8.5Z" />
    </Svg>
  ),
  enterprise: (
    <Svg>
      <path d="M4 20V7l8-3 8 3v13" />
      <path d="M9 20v-6h6v6" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
    </Svg>
  ),
  operator: (
    <Svg>
      <path d="M12 5a7 7 0 1 0 7 7" />
      <path d="M12 1v4" />
      <path d="M18.4 3.6l-2.8 2.8" />
      <path d="M23 12h-4" />
    </Svg>
  ),
  product: (
    <Svg>
      <path d="M4 8.5L12 4l8 4.5L12 13 4 8.5Z" />
      <path d="M4 15.5L12 20l8-4.5" />
      <path d="M12 13v7" />
    </Svg>
  ),
  automation: (
    <Svg>
      <path d="M5 12h5l2-6 3 12 2-6h2" />
    </Svg>
  ),
  dedicated: (
    <Svg>
      <path d="M5 18V7.5A2.5 2.5 0 0 1 7.5 5H16.5A2.5 2.5 0 0 1 19 7.5V18" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
    </Svg>
  ),
  linkedin: (
    <Svg>
      <path d="M8 10v8" />
      <path d="M8 6h.01" />
      <path d="M12 18v-4.5a2.5 2.5 0 0 1 5 0V18" />
      <path d="M12 10v8" />
    </Svg>
  ),
  x: (
    <Svg>
      <path d="M5 5l14 14" />
      <path d="M19 5L5 19" />
    </Svg>
  ),
  github: (
    <Svg>
      <path d="M9 19c-4 1.2-4-2-6-2" />
      <path d="M15 21v-3.5a3 3 0 0 0-.9-2.2c3-.3 6.1-1.5 6.1-6.8A5.3 5.3 0 0 0 18.8 5A4.9 4.9 0 0 0 18.7 1S17.6.7 15 2.5a13.3 13.3 0 0 0-6 0C6.4.7 5.3 1 5.3 1a4.9 4.9 0 0 0-.1 4A5.3 5.3 0 0 0 3.8 8.5c0 5.3 3.1 6.5 6.1 6.8A3 3 0 0 0 9 17.5V21" />
    </Svg>
  )
};

export default function Icon({ name }) {
  return icons[name] ?? null;
}
