const MONTHS = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const MONTH_IMAGES = [
  "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=800&q=80", // Jan - mountains
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", // Feb - snow
  "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=800&q=80", // Mar - spring
  "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80", // Apr - flowers
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80", // May - green
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", // Jun - beach
  "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80", // Jul - summer
  "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&q=80", // Aug - sunset
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", // Sep - autumn
  "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=800&q=80", // Oct - fall
  "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=800&q=80", // Nov - foggy
  "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800&q=80", // Dec - winter
];

export default function CalendarHeader({ month, year, onPrev, onNext }) {
  return (
    <div className="calendar-header">

      {/* Wall Hanger - sabse upar */}
      <div className="wall-hanger">
        <div className="hanger-nail" />
        <div className="hanger-rings">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="ring" />
          ))}
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-image-wrap">
        <img
          src={MONTH_IMAGES[month]}
          alt={`${MONTHS[month]} ${year}`}
          className="hero-image"
        />
        <div className="hero-diagonal" />
        <div className="hero-overlay">
          <span className="hero-year">{year}</span>
          <span className="hero-month">{MONTHS[month].toUpperCase()}</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="header-nav">
        <button onClick={onPrev} className="nav-btn">&#8592;</button>
        <h2 className="header-title">{MONTHS[month]} {year}</h2>
        <button onClick={onNext} className="nav-btn">&#8594;</button>
      </div>
    </div>
  );
}