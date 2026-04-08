const MONTHS = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const MONTH_IMAGES = [
  "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=800&q=80",
  "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=800&q=80",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
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