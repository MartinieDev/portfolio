function PlusIcon({ size = 16 }) {
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
      <line x1="128" y1="40" x2="128" y2="216" />
      <line x1="40" y1="128" x2="216" y2="128" />
    </svg>
  );
}

export default PlusIcon;