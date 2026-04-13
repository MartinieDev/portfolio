import { useMemo } from 'react';

function ContributionLineChart({ weeks }) {
  console.log(weeks);

  // Convert weekly data into totals
  const data = useMemo(() => {
    return weeks.map((week) =>
      week.contributionDays.reduce(
        (sum, day) => sum + day.contributionCount,
        0,
      ),
    );
  }, [weeks]);

  // FIXED SCALE (0–100)
  const max = 100;

  const width = 600;
  const height = 300;
  const padding = 50;

  // Generate points for line
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * (width - padding * 2) + padding;

    const y =
      height - padding - (Math.min(val, 100) / 100) * (height - padding * 2);

    return `${x},${y}`;
  });

  return (
    <div className="linechart-wrapper">
      <div className="chart-header">
        <p className="chart-title">Weekly Contribution Trend</p>

        <p className="chart-subtitle">Total commits per week over time</p>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="linechart-svg">
        {/* GRID LINES */}
        {[0, 25, 50, 75, 100].map((value, i) => {
          const y = height - padding - (value / 100) * (height - padding * 2);

          return (
            <line
              key={i}
              x1={padding}
              y1={y}
              x2={width - padding}
              y2={y}
              stroke="var(--muted)"
              strokeWidth="0.5"
              opacity="0.25"
            />
          );
        })}

        {/* Y AXIS */}
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="var(--border)"
          strokeWidth="1"
        />

        {/* X AXIS */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="var(--border)"
          strokeWidth="1"
        />

        {/* Y LABELS */}
        {[0, 25, 50, 75, 100].map((value, i) => {
          const y = height - padding - (value / 100) * (height - padding * 2);

          return (
            <text
              key={i}
              x={padding - 10}
              y={y + 4}
              textAnchor="end"
              fontSize="15"
              fill="var(--text)"
            >
              {value}
            </text>
          );
        })}

        {/* LINE */}
        <polyline
          fill="none"
          stroke="var(--level-4)"
          strokeWidth="2"
          points={points.join(' ')}
        />

        {/* DOTS */}
        {points.map((p, i) => {
          const [x, y] = p.split(',');

          return <circle key={i} cx={x} cy={y} r="4" fill="var(--level-4)" />;
        })}
      </svg>

      <p className="chart-insight">
        Peak activity: {Math.max(...data)} commits in a week
      </p>
    </div>
  );
}

export default ContributionLineChart;
