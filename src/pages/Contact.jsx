import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="section-label">CONTACT US</div>

        <h1>
          Let's start
          <span> a conversation.</span>
        </h1>

        <p>
          Have a question, project, hiring requirement or partnership idea?
          We'd love to hear from you.
        </p>
      </section>

      <section className="contact-main">
        <div className="contact-information">
          <div className="section-label">GET IN TOUCH</div>

          <h2>
            Tell us what
            <span> you're building.</span>
          </h2>

          <p>
            Share a little about what you need and our team can help you
            identify the right next step.
          </p>

          <div className="contact-details">
            <a href="mailto:saitejainfotechprivatelimited@gmail.com">
              <Mail size={20} />
              <div>
                <small>Email</small>
                <span>saitejainfotechprivatelimited@gmail.com</span>
              </div>
            </a>

            <a href="tel:+919999999999">
              <Phone size={20} />
              <div>
                <small>Phone</small>
                <span>Contact number to be confirmed</span>
              </div>
            </a>

            <div>
              <MapPin size={20} />
              <div>
                <small>Office</small>
                <span>Office address to be confirmed</span>
              </div>
            </div>

            <a href="#">
              <MessageCircle size={20} />
              <div>
                <small>WhatsApp</small>
                <span>Connect with our team</span>
              </div>
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>

            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
          </div>

          <label>
            Subject
            <input type="text" placeholder="How can we help?" />
          </label>

          <label>
            Message
            <textarea
              rows="6"
              placeholder="Tell us a little about your requirement..."
            />
          </label>

          <button className="primary-button" type="submit">
            Send Message <ArrowRight size={18} />
          </button>
        </form>
      </section>

      <section className="map-section">
        <div className="map-placeholder">
          <MapPin size={30} />
          <span>Google Maps integration</span>
          <small>
            Replace this placeholder with the approved office location.
          </small>
        </div>
      </section>
    </main>
  )
}

export default Contact