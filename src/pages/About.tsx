import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <span className="section-label">ABOUT EVENTCONNECT</span>
        <h1>Make room for <span>connection.</span></h1>
        <p>
          EventConnect helps people discover useful, welcoming experiences in
          their community.
        </p>
      </div>

      <div className="about-content">
        <article className="about-card">
          <span className="about-card-icon">⌖</span>
          <h2>Built for local discovery</h2>
          <p>
            Browse workshops, meetups, conferences, and concerts in one clear,
            friendly place.
          </p>
        </article>
        <article className="about-card">
          <span className="about-card-icon">✦</span>
          <h2>Simple by design</h2>
          <p>
            We keep event information easy to scan so you can spend less time
            searching and more time participating.
          </p>
        </article>
        <article className="about-card about-card-wide">
          <div>
            <span className="section-label">READY TO EXPLORE?</span>
            <h2>Find your next experience.</h2>
          </div>
          <Link to="/events" className="primary-button">
            Browse Events <span>→</span>
          </Link>
        </article>
      </div>
    </section>
  )
}

export default About
