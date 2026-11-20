import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, events, type EventFormat } from '../data/events'

function Events() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All categories')
  const [format, setFormat] = useState<'All formats' | EventFormat>('All formats')
  const [price, setPrice] = useState<'All prices' | 'Free' | 'Paid'>('All prices')

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase()

    return events.filter((event) => {
      const searchableText = `${event.title} ${event.shortDescription} ${event.description} ${event.category} ${event.location}`.toLowerCase()
      const matchesSearch = !query || searchableText.includes(query)
      const matchesCategory = category === 'All categories' || event.category === category
      const matchesFormat = format === 'All formats' || event.format === format
      const matchesPrice = price === 'All prices' || (price === 'Free' ? event.price === 0 : event.price > 0)
      return matchesSearch && matchesCategory && matchesFormat && matchesPrice
    })
  }, [category, format, price, search])

  const clearFilters = () => {
    setSearch('')
    setCategory('All categories')
    setFormat('All formats')
    setPrice('All prices')
  }

  return (
    <section className="events-page">
      <div className="events-hero">
        <span className="section-label">EXPLORE YOUR COMMUNITY</span>
        <h1>Discover Amazing <span>Events.</span></h1>
        <p>Find exciting experiences, meet new people, and be part of something meaningful.</p>
        <label className="events-search" htmlFor="event-search">
          <span aria-hidden="true">⌕</span>
          <input
            id="event-search"
            type="search"
            placeholder="Search events, keywords, or locations..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          {search && <button type="button" className="clear-search" onClick={() => setSearch('')}>Clear</button>}
        </label>
      </div>

      <div className="events-listing">
        <div className="events-listing-heading">
          <div>
            <span className="section-label">FIND YOUR NEXT EXPERIENCE</span>
            <h2>Upcoming Events</h2>
          </div>
          <span className="events-count" aria-live="polite">{filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found</span>
        </div>

        <div className="filter-toolbar" aria-label="Event filters">
          <div className="category-filters">
            {categories.map((item) => (
              <button key={item} type="button" className={category === item ? 'filter-button selected' : 'filter-button'} aria-pressed={category === item} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
          <div className="select-filters">
            <label>Format
              <select value={format} onChange={(event) => setFormat(event.target.value as 'All formats' | EventFormat)}>
                <option>All formats</option><option>Online</option><option>In-person</option>
              </select>
            </label>
            <label>Price
              <select value={price} onChange={(event) => setPrice(event.target.value as 'All prices' | 'Free' | 'Paid')}>
                <option>All prices</option><option>Free</option><option>Paid</option>
              </select>
            </label>
            {(search || category !== 'All categories' || format !== 'All formats' || price !== 'All prices') && (
              <button type="button" className="text-button" onClick={clearFilters}>Clear all filters</button>
            )}
          </div>
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
                  <p className="event-description">{event.shortDescription}</p>
                  <div className="event-meta"><span>📅 {event.date}</span><span>📍 {event.location}</span></div>
                  <Link to={`/events/${event.id}`} className="event-link">View Details <span>→</span></Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-events">
            <span aria-hidden="true">⌕</span>
            <h3>No events found</h3>
            <p>Try a different search term or remove one of the filters.</p>
            <button type="button" className="primary-button" onClick={clearFilters}>Clear filters</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Events
