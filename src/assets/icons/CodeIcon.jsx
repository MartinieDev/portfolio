function CodeIcon({ size = 16 }) {
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
      <polyline points="96 48 32 128 96 208" />
      <polyline points="160 48 224 128 160 208" />
    </svg>
  );
}

export default CodeIcon;
