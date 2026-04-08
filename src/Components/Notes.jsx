// Notes.jsx - Date specific notes

export default function Notes({ startDate, endDate, notes, onNotesChange }) {

  function formatDate(date) {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  function getPlaceholder() {
    if (startDate && endDate) {
      return `Notes for ${formatDate(startDate)} → ${formatDate(endDate)}...`;
    } else if (startDate) {
      return `Notes for ${formatDate(startDate)}...`;
    }
    return "Write your monthly notes here...";
  }

  return (
    <div className="notes-section">
      <h3 className="notes-title">📝 Notes</h3>

      {/* Date Range Info */}
      {startDate && (
        <div className="date-range-info">
          <span className="range-label">Selected:</span>
          <span className="range-dates">
            {formatDate(startDate)}
            {endDate
              ? ` → ${formatDate(endDate)}`
              : " (select end date)"}
          </span>
        </div>
      )}

      {/* Note saving indicator */}
      {!startDate && (
        <div className="monthly-note-badge">
          📅 Monthly Note
        </div>
      )}

      {/* Notes Textarea */}
      <textarea
        className="notes-textarea"
        placeholder={getPlaceholder()}
        value={notes}
        onChange={(e) => onNotesChange(e.target.value)}
      />

      {/* Clear button */}
      {(startDate || notes) && (
        <button
          className="clear-btn"
          onClick={() => onNotesChange("")}
        >
          Clear Notes
        </button>
      )}
    </div>
  );
}