function VercelIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width={size}
      height={size} // use height, not size
    >
      <path
        style={{
          fillRule: 'nonzero',
          fill: 'currentColor',
          fillOpacity: 1,
        }}
        d="M63.984 17.184 127.964 128H0Zm0 0"
      />
    </svg>
  );
}

export default VercelIcon;
