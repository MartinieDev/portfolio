import { useState } from 'react';
import { gitData } from '../../../../data/gitActivities';

const LEVEL_COLORS = gitData.LEVEL_COLORS;
const DAYS = gitData.DAYS;
const MONTHS = gitData.MONTHS;

function getLevel(count) {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

function ContributionGraph({ weeks }) {
  const [tooltip, setTooltip] = useState(null);

  const totalContributions = weeks
    .flatMap((week) => week.contributionDays)
    .reduce((acc, curVal) => acc + curVal.contributionCount, 0);

  const startDate = weeks.flatMap((week) => week.contributionDays)[0].date;
  const date = new Date(startDate);

  const getMonth = date.toLocaleString('en-US', { month: 'long' });
  const getYear = date.getFullYear();

  // Build month labels
  const monthLabels = [];
  const seenMonths = new Set(); // ← add this

  weeks.forEach((week, wi) => {
    const firstDay = week.contributionDays[0];
    if (!firstDay) return;
    const date = new Date(firstDay.date);
    const monthKey = `${date.getFullYear()}-${date.getMonth()}`;

    if (date.getDate() <= 7 && !seenMonths.has(monthKey)) {
      seenMonths.add(monthKey); // ← mark as seen
      monthLabels.push({ week: wi, label: MONTHS[date.getMonth()] });
    }
  });

  const cellSize = 13;
  const gap = 3;

  return (
    <div className="graph-wrapper" style={{ width: '100%' }}>
      {/* Title */}
      <div className="card-title-container">
        <p className="card-title">
          <span>⌥</span> GITHUB ACTIVITY
        </p>

        <p>
          <a href="https://github.com/martiniedev" className="git-username">
            @Martins-Jay
          </a>
        </p>
      </div>

      {/* Header */}
      <div className="graph-header">
        <span className="graph-total">
          <span className="graph-total-number">
            {totalContributions.toLocaleString()}
          </span>
          {` contributions since ${getMonth} ${getYear}`}
        </span>
      </div>

      {/* Graph */}
      <div className="graph-scroll">
        <div className="graph-inner" style={{ padding: '1rem' }}>
          {/* Month labels */}
          <div className="month-row">
            <div style={{ width: 30 }} />
            {weeks.map((_, wi) => {
              const label = monthLabels.find((m) => m.week === wi);
              return (
                <div
                  key={wi}
                  className="month-label"
                  style={{ width: cellSize + gap, paddingBottom: '.3rem' }}
                >
                  {label ? label.label : ''}
                </div>
              );
            })}
          </div>

          <div className="graph-body">
            {/* Day labels */}
            <div className="day-labels">
              {DAYS.map((d, i) =>
                i % 2 === 1 ? (
                  <div
                    key={d}
                    className="day-label"
                    style={{ height: cellSize + gap, paddingRight: '.3rem' }}
                  >
                    {d}
                  </div>
                ) : (
                  <div key={d} style={{ height: cellSize + gap }} />
                ),
              )}
            </div>

            {/* Cells */}
            <div className="cells-grid">
              {weeks.map((week, wi) => (
                <div key={wi} className="week-col">
                  {week.contributionDays.map((day, di) => {
                    const level = getLevel(day.contributionCount);
                    return (
                      <div
                        key={di}
                        className="contrib-cell"
                        style={{
                          width: cellSize,
                          height: cellSize,
                          background: LEVEL_COLORS[level],
                          borderRadius: '0.2rem',
                        }}
                        onMouseEnter={(e) =>
                          setTooltip({
                            x: e.clientX,
                            y: e.clientY,
                            count: day.contributionCount,
                            date: new Date(day.date).toLocaleDateString(
                              'en-US',
                              {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              },
                            ),
                          })
                        }
                        onMouseLeave={() => setTooltip(null)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="graph-tooltip"
          style={{ left: tooltip.x + 12, top: tooltip.y - 36 }}
        >
          <strong>{`${tooltip.count} ${tooltip.count < 2 ? 'contribution' : 'contributions'}`} </strong> · {tooltip.date}
        </div>
      )}
    </div>
  );
}

export default ContributionGraph;
