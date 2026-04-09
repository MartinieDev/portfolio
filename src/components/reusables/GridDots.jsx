const GridDots = ({ rows = 10, cols = 10, size = 7, gap = 4 }) => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  console.log(isDark);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
        gridTemplateRows: `repeat(${rows}, ${size}px)`,
        gap: `${gap}px`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, idx) => {
        const row = Math.floor(idx / cols);
        const col = idx % cols;

        // Check if dot is inside the top-left 2x2 square
        const isTopLeftBlock = row < 3 && col < 3;

        return (
          <div
            key={idx}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: isTopLeftBlock ? (isDark ? '#ffffff' : '#545151') : '#0caa9285',
            }}
          />
        );
      })}
    </div>
  );
};

export default GridDots;
