function FramerIcon({ size = 20 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#0055FF" d="M3 3h18L12 21 3 3z" />
      <path fill="#00AAFF" d="M3 3l9 18V3H3z" />
      <path fill="#88DDFF" d="M12 3v18l9-18H12z" />
    </svg>
  );
}

export default FramerIcon;
