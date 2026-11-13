
import '../App.css'
import { Link } from 'react-router-dom'
const events = [
  {
    id: 1,
    category: 'Workshop',
    title: 'Web Development Workshop',
    date: 'Nov 15, 2026',
    location: 'Addis Ababa',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    category: 'Meetup',
    title: 'Community Innovation Meetup',
    date: 'Nov 20, 2026',
    location: 'Bishoftu',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    category: 'Concert',
    title: 'Live Music Festival',
    date: 'Nov 28, 2026',
    location: 'Addis Ababa',
    image:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
  },
]

function Home() {
  return (
    <>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">YOUR COMMUNITY. YOUR EVENTS.</span>
            <h1>
              Discover Events<br />
              Around <span>You.</span>
            </h1>
            <p>
              Find workshops, conferences, and community events
              happening near you.
            </p>

            <div className="hero-actions">
              <Link to="/events" className="primary-button">
                Explore Events <span>→</span>
              </Link>
              <a href="#featured" className="secondary-button">
                <span className="play-icon">▶</span> Discover what's happening
              </a>
            </div>
          </div>

          <div className="hero-badge">
            <span className="badge-icon">✦</span>
            <div>
              <strong>Find your next experience</strong>
              <small>Discover · Connect · Participate</small>
            </div>
          </div>
        </section>

        <section className="featured-section" id="featured">
          <div className="section-heading">
            <div>
              <span className="section-label">DON'T MISS OUT</span>
              <h2>Featured Events<span>.</span></h2>
              <p>Explore experiences worth showing up for.</p>
            </div>
            <Link to="/events" className="view-all">
              See all events <span>→</span>
            </Link>
          </div>

          <div className="events-grid">
            {events.map((event) => (
              <article className="event-card" key={event.id}>
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <span className="event-category">{event.category}</span>
                </div>

                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <span>📅 {event.date}</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <Link to={`/events/${event.id}`} className="event-link">
                    View Details <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits">
          <div>
            <span className="benefit-icon">♧</span>
            <span>Join a growing community</span>
          </div>
          <div>
            <span className="benefit-icon">▦</span>
            <span>Discover local events</span>
          </div>
          <div>
            <span className="benefit-icon">☆</span>
            <span>Never miss out</span>
          </div>
        </section>
    </>
  )
}

export default Home
