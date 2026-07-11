import { useState } from 'react'
import { site } from '../content/site'
import Reveal from '../components/Reveal'
import PageTransition from '../components/PageTransition'

// Contact page with a working form — no backend needed.
// Messages are relayed to your inbox (site.email in src/content/site.js)
// by formsubmit.co. The FIRST submission triggers a one-time activation
// email to you; click the link in it and every message after that lands
// straight in your inbox.
export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form))
    if (data._gotcha) return // honeypot field caught a bot
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `Portfolio message from ${data.name}`,
          _captcha: 'false',
        }),
      })
      if (!res.ok) throw new Error('send failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <PageTransition>
      <div className="page">
        <header className="page-header">
          <Reveal>
            <h1 className="h1">
              Contact<span>.</span>
            </h1>
          </Reveal>
        </header>

        <section className="section contact-grid">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: '1.5rem' }}>
              {site.contactHeading}
            </h2>
            <p style={{ color: 'var(--paper-dim)', maxWidth: '40ch', marginBottom: '2.5rem' }}>
              {site.contactBlurb}
            </p>
            <a href={`mailto:${site.email}`} className="underline-link">
              {site.email}
            </a>
            <div style={{ display: 'flex', gap: '1.75rem', marginTop: '2rem' }}>
              {site.socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="underline-link">
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {status === 'sent' ? (
              <div className="form-success">
                <p className="h2">Message sent ✳</p>
                <p style={{ color: 'var(--paper-dim)', marginTop: '1rem' }}>
                  Thanks for reaching out — I’ll get back to you soon.
                </p>
                <button className="btn" style={{ marginTop: '2rem' }} onClick={() => setStatus('idle')}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  Name
                  <input name="name" type="text" required placeholder="Your name" autoComplete="name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
                </label>
                <label>
                  Message
                  <textarea name="message" required rows="6" placeholder="Tell me about your project…" />
                </label>
                {/* invisible honeypot — traps bots, real visitors never see it */}
                <input name="_gotcha" type="text" tabIndex="-1" autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
                <button className="btn solid" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message →'}
                </button>
                {status === 'error' && (
                  <p className="form-error">
                    Hmm, that didn’t go through. Try again, or email me directly at{' '}
                    <a href={`mailto:${site.email}`} className="underline-link">
                      {site.email}
                    </a>
                    .
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </section>
      </div>
    </PageTransition>
  )
}
