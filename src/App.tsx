
function App() {
  return (
    <>
      <header>
        <nav aria-label="Main navigation">
          <a href="/">EventConnect</a>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section aria-labelledby="hero-title">
          <h1 id="hero-title">Discover Events Around You</h1>
          <p>
            Find workshops, conferences, and community events
            happening near you.
          </p>
          <a href="/events">Explore Events</a>
        </section>

        <section aria-labelledby="featured-title">
          <h2 id="featured-title">Featured Events</h2>

          <article>
            <h3>Web Development Workshop</h3>
            <p>Date: November 15, 2026</p>
            <p>Location: Addis Ababa</p>
            <a href="/events/1">View Details</a>
          </article>

          <article>
            <h3>Community Innovation Meetup</h3>
            <p>Date: November 20, 2026</p>
            <p>Location: Bishoftu</p>
            <a href="/events/2">View Details</a>
          </article>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 EventConnect. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
