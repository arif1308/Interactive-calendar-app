// CalendarGrid.jsx - Date grid with day range selection

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function CalendarGrid({ month, year, startDate, endDate, onDateClick }) {

  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const totalDays = new Date(year, month + 1, 0).getDate();

  function isInRange(day) {
    if (!startDate || !endDate) return false;
    const d = new Date(year, month, day);
    return d > startDate && d < endDate;
  }

  function isStart(day) {
    if (!startDate) return false;
    const d = new Date(year, month, day);
    return d.toDateString() === startDate.toDateString();
  }

  function isEnd(day) {
    if (!endDate) return false;
    const d = new Date(year, month, day);
    return d.toDateString() === endDate.toDateString();
  }

  function isToday(day) {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  }

  // Day index 0=MON ... 5=SAT, 6=SUN
  function isWeekend(dayIndex) {
    return dayIndex === 5 || dayIndex === 6;
  }

  const cells = [];

  // Empty cells
  for (let i = 0; i < startOffset; i++) {
    cells.push(<div key={`empty-${i}`} className="cal-cell empty" />);
  }

  // Date cells
  for (let day = 1; day <= totalDays; day++) {
    const cellIndex = (startOffset + day - 1) % 7;
    let className = "cal-cell";
    if (isToday(day)) className += " today";
    if (isStart(day)) className += " range-start";
    if (isEnd(day)) className += " range-end";
    if (isInRange(day)) className += " in-range";
    if (isWeekend(cellIndex)) className += " weekend";

    cells.push(
      <div
        key={day}
        className={className}
        onClick={() => onDateClick(new Date(year, month, day))}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="calendar-grid-wrap">
      {/* Day headers */}
      <div className="day-headers">
        {DAYS.map((d, i) => (
          <div
            key={d}
            className={`day-header ${i >= 5 ? "weekend-header" : ""}`}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Date grid */}
      <div className="cal-grid">
        {cells}
      </div>
    </div>
  );
}