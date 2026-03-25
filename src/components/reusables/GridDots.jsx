const GridDots = ({ rows = 10, cols = 10, size = 6, gap = 2 }) => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

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
        const isTopLeftBlock = row < 2 && col < 2;

        return (
          <div
            key={idx}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: isTopLeftBlock ? (isDark ? '#fff' : '#000') : '#21b87c79',
            }}
          />
        );
      })}
    </div>
  );
};

export default GridDots;
