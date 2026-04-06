function NetlifyIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
    >
      <path
        d="M12 0 24 8v8l-12 8-12-8V8z"
        style={{
          fill: "#00C7B7",
        }}
      />
    </svg>
  );
}

export default NetlifyIcon;