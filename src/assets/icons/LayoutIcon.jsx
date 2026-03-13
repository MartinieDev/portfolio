function LayoutIcon({ size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      stroke="currentColor"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="32" y="48" width="192" height="160" rx="12" />
      <line x1="32" y1="96" x2="224" y2="96" />
      <line x1="96" y1="96" x2="96" y2="208" />
    </svg>
  );
}

export default LayoutIcon;
