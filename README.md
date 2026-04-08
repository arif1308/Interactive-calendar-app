# Interactive Calendar App

A polished, interactive wall calendar component built with React + Vite.

## Features
- 🗓️ Wall calendar aesthetic with hero image
- 📅 Day range selector (start & end date)
- 📝 Date-specific notes with localStorage persistence
- 🎨 Responsive design (Desktop & Mobile)
- 🔴 SAT/SUN highlighted in red
- 📌 Wall hanger UI effect

## Tech Stack
- React 18
- Vite
- CSS3 (Flexbox & Grid)

## Notes Feature

Each date or date range has its own separate note:

- **Single Date Note** — Click any date and write a note for that specific day
- **Date Range Note** — Select a start date and end date, then write a note for that entire range
- **Monthly Note** — If no date is selected, note is saved for the whole month
- **Auto Save** — Notes are automatically saved in localStorage, so they persist even after page refresh

## How to Use Notes

1. **Single date note** — Click any date on the calendar, then type your note
2. **Date range note** — Click a start date, then click an end date, then type your note
3. **Switch between dates** — Click a different date and the note will change to that date's note
4. **Go back** — Click the same date again and your previous note will reappear
5. **Monthly note** — Don't select any date and write a general note for the whole month

## Run Locally

```bash
npm install
npm run dev
```

## Live Demo
[Click Here](https://interactive-calendar-app.vercel.app)

## Author
Arif Siddique
