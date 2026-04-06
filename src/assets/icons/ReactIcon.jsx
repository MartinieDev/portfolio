function ReactIcon({ size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      stroke="#61DAFB"
      strokeWidth="12"
    >
      <circle cx="128" cy="128" r="12" fill="#61DAFB" />

      <ellipse cx="128" cy="128" rx="90" ry="36" />
      <ellipse
        cx="128"
        cy="128"
        rx="90"
        ry="36"
        transform="rotate(60 128 128)"
      />
      <ellipse
        cx="128"
        cy="128"
        rx="90"
        ry="36"
        transform="rotate(120 128 128)"
      />
    </svg>
  );
}

export default ReactIcon;
