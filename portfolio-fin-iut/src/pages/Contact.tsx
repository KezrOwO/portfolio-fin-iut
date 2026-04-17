import { useState } from 'react'
import CV from '../assets/CV.pdf'

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://formspree.io/f/mlgabejd', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setFormStatus('success')
        setFormMessage('Message envoyé avec succès ! Je te recontacterai rapidement.')
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
        setFormMessage('Une erreur est survenue. Essaie de me contacter directement par email.')
      }
    } catch {
      setFormStatus('error')
      setFormMessage('Erreur de connexion. Essaie de me contacter directement par email.')
    }
  }

  return (
    <section id="contact" className="contact-page">
      <header className="contact-page__hero">
        <p className="eyebrow">Discutons</p>
        <h1>Contact</h1>
        <p className="intro-text">
          Je suis actuellement à la recherche d'un stage de 14 à 18 semaines à partir de mai 2026,
          et ouvert aux opportunités de collaboration. N'hésite pas à me contacter !
        </p>
      </header>

      <div className="contact-container">
        <section className="contact-form-section">
          <h2>Envoie-moi un message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Ton nom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="ton.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Stage • Collaboration • Question"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Décris ton projet, l'opportunité ou ta question..."
              />
            </div>

            <button
              type="submit"
              className="contact-form__submit"
              disabled={formStatus === 'loading'}
            >
              {formStatus === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
            </button>

            {formStatus === 'success' && (
              <p className="form-feedback form-feedback--success">{formMessage}</p>
            )}
            {formStatus === 'error' && (
              <p className="form-feedback form-feedback--error">{formMessage}</p>
            )}
          </form>
        </section>

        <section className="contact-info">
          <h2>Me contacter directement</h2>

          <div className="contact-methods">
            <a href="mailto:gengembreleo@gmail.com" className="contact-method">
              <span className="contact-method__icon">✉️</span>
              <div>
                <p className="contact-method__label">Email</p>
                <p className="contact-method__value">gengembreleo@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/léo-gengembre-524564329/"
              target="_blank"
              rel="noreferrer"
              className="contact-method"
            >
              <span className="contact-method__icon">💼</span>
              <div>
                <p className="contact-method__label">LinkedIn</p>
                <p className="contact-method__value">Léo Gengembre</p>
              </div>
            </a>

            <a
              href="https://github.com/KezrOwO"
              target="_blank"
              rel="noreferrer"
              className="contact-method"
            >
              <span className="contact-method__icon">💻</span>
              <div>
                <p className="contact-method__label">GitHub</p>
                <p className="contact-method__value">@KezrOwO</p>
              </div>
            </a>
          </div>

          <div className="contact-cv">
            <h3>Mon CV</h3>
            <a href={CV} download="CV_Leo_Gengembre.pdf" className="contact-cv__link">
              📄 Télécharger mon CV
            </a>
            <p className="contact-cv__note">
              Format PDF • À jour • Contient mes compétences, formations et expériences
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}
