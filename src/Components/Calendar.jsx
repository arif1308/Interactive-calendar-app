// Calendar.jsx - Main component

import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import Notes from "./Notes";

export default function Calendar() {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Notes ab object hai — har date/range ka alag note
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("calendar-notes-v2");
    return saved ? JSON.parse(saved) : {};
  });

  // Current selection ka unique key
  function getKey() {
    if (startDate && endDate) {
      return `${startDate.toDateString()}_${endDate.toDateString()}`;
    } else if (startDate) {
      return startDate.toDateString();
    }
    return `monthly_${month}_${year}`;
  }

  // Notes save karo
  function handleNotesChange(val) {
    const key = getKey();
    const updated = { ...notes, [key]: val };
    setNotes(updated);
    localStorage.setItem("calendar-notes-v2", JSON.stringify(updated));
  }

  function handlePrev() {
    if (month === 0) {
      setMonth(11);
      setYear(y => y - 1);
    } else {
      setMonth(m => m - 1);
    }
  }

  function handleNext() {
    if (month === 11) {
      setMonth(0);
      setYear(y => y + 1);
    } else {
      setMonth(m => m + 1);
    }
  }

  // Date range selection logic
  function handleDateClick(date) {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else if (date.toDateString() === startDate.toDateString()) {
        // Same date click — deselect
        setStartDate(null);
        setEndDate(null);
      } else {
        setEndDate(date);
      }
    }
  }

  return (
    <div className="calendar-card">
      <CalendarHeader
        month={month}
        year={year}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <div className="calendar-body">
        <CalendarGrid
          month={month}
          year={year}
          startDate={startDate}
          endDate={endDate}
          onDateClick={handleDateClick}
        />

        <Notes
          startDate={startDate}
          endDate={endDate}
          notes={notes[getKey()] || ""}
          onNotesChange={handleNotesChange}
        />
      </div>
    </div>
  );
}