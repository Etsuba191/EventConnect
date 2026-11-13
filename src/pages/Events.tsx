
import { useState } from 'react'
import { Link } from 'react-router-dom'

const events = [
  {
    id: 1,
    category: 'Workshop',
    title: 'Web Development Workshop',
    date: 'Nov 15, 2026',
    location: 'Addis Ababa',
    description: 'Learn modern web development and build practical skills.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    category: 'Meetup',
    title: 'Community Innovation Meetup',
    date: 'Nov 20, 2026',
    location: 'Bishoftu',
    description: 'Connect with creative minds and explore new ideas.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    category: 'Concert',
    title: 'Live Music Festival',
    date: 'Nov 28, 2026',
    location: 'Addis Ababa',
    description: 'Enjoy an unforgettable live music experience.',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    category: 'Conference',
    title: 'Technology and Future Conference',
    date: 'Dec 05, 2026',
    location: 'Addis Ababa',
    description: 'Explore technology trends and meet industry professionals.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    category: 'Workshop',
    title: 'UI/UX Design Masterclass',
    date: 'Dec 10, 2026',
    location: 'Bishoftu',
    description: 'Discover the principles of creating better digital experiences.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    category: 'Meetup',
    title: 'Young Entrepreneurs Meetup',
    date: 'Dec 15, 2026',
    location: 'Addis Ababa',
    description: 'Share ideas, network, and discover new opportunities.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
  },
]

const categories = [
  'All Events',
  'Workshop',
  'Meetup',
  'Concert',
  'Conference',
]

function Events() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All Events')

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      category === 'All Events' || event.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <section className="events-page">
      <div className="events-hero">
        <span className="section-label">EXPLORE YOUR COMMUNITY</span>
        <h1>Discover Amazing <span>Events.</span></h1>
        <p>
          Find exciting experiences, meet new people, and be part
          of something meaningful.
        </p>

        <div className="events-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search events or locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="events-listing">
        <div className="events-listing-heading">
          <div>
            <span className="section-label">FIND YOUR NEXT EXPERIENCE</span>
            <h2>Upcoming Events</h2>
          </div>
          <span className="events-count">
            {filteredEvents.length} Events Found
          </span>
        </div>

        <div className="category-filters">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? 'filter-button selected' : 'filter-button'}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {filteredEvents.length > 0 ? (
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <article className="event-card" key={event.id}>
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <span className="event-category">{event.category}</span>
                </div>

                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p className="event-description">{event.description}</p>

                  <div className="event-meta">
                    <span>📅 {event.date}</span>
                    <span>📍 {event.location}</span>
                  </div>

                  <Link
                    to={`/events/${event.id}`}
                    className="event-link"
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-events">
            <span>⌕</span>
            <h3>No events found</h3>
            <p>Try another search or select a different category.</p>
            <button
              className="primary-button"
              onClick={() => {
                setSearch('')
                setCategory('All Events')
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Events
