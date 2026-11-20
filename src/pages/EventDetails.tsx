import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getEventById } from '../data/events'

type Registration = { name: string; email: string }
type FormErrors = Partial<Record<keyof Registration, string>>

function EventDetails() {
  const { eventId } = useParams()
  const event = eventId ? getEventById(eventId) : undefined
  const [form, setForm] = useState<Registration>({ name: '', email: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  if (!event) {
    return (
      <section className="details-page not-found">
        <span className="section-label">EVENT NOT FOUND</span>
        <h1>We could not find that event.</h1>
        <p>The event may have been removed or the link may be incorrect.</p>
        <Link to="/events" className="primary-button">Back to events</Link>
      </section>
    )
  }

  const registrationKey = `eventconnect-registration-${event.id}`
  const isRegistered = Boolean(localStorage.getItem(registrationKey))

  const validate = () => {
    const nextErrors: FormErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Enter your full name.'
    if (!form.email.trim()) nextErrors.email = 'Enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = 'Enter a valid email address.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (submitEvent: FormEvent<HTMLFormElement>) => {
    submitEvent.preventDefault()
    if (!validate()) return
    localStorage.setItem(registrationKey, JSON.stringify({ name: form.name.trim(), email: form.email.trim() }))
    setSubmitted(true)
  }

  return (
    <section className="details-page">
      <Link to="/events" className="back-link">← Back to all events</Link>
      <div className="details-layout">
        <div>
          <img className="details-image" src={event.image} alt={event.title} />
          <div className="details-copy">
            <span className="event-category static-category">{event.category}</span>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
          </div>
        </div>
        <aside className="registration-panel">
          <h2>Event information</h2>
          <dl className="details-list">
            <div><dt>Date</dt><dd>{event.date}</dd></div>
            <div><dt>Time</dt><dd>{event.startTime} – {event.endTime}</dd></div>
            <div><dt>Location</dt><dd>{event.location} ({event.format})</dd></div>
            <div><dt>Organizer</dt><dd>{event.organizer}</dd></div>
            <div><dt>Price</dt><dd>{event.price === 0 ? 'Free' : `$${event.price}`}</dd></div>
          </dl>
          <div className="demo-note">{event.registrationNote}</div>
          {isRegistered || submitted ? (
            <div className="success-message" role="status">
              <strong>You are registered for this demo event.</strong>
              <span>Confirmation saved on this device for demonstration purposes.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h2>Register for this event</h2>
              <label htmlFor="name">Full name</label>
              <input id="name" value={form.name} onChange={(inputEvent) => setForm({ ...form, name: inputEvent.target.value })} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
              {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" value={form.email} onChange={(inputEvent) => setForm({ ...form, email: inputEvent.target.value })} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
              <button type="submit" className="primary-button">Register (demo)</button>
            </form>
          )}
        </aside>
      </div>
    </section>
  )
}

export default EventDetails
