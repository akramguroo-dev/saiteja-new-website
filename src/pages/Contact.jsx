import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Button from "../components/Button";
import { CONTACT_DETAILS } from "../data/contact";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const emailSubject = encodeURIComponent(
      subject || "New enquiry from Saiteja Infotech website",
    );

    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${CONTACT_DETAILS.email}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="section-label">CONTACT US</div>

        <h1>
          Let's start
          <span> a conversation.</span>
        </h1>

        <p>
          Have a question, project, hiring requirement or partnership idea? We'd
          love to hear from you.
        </p>
      </section>

      {/* CONTACT CONTENT */}
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
            {/* EMAIL */}
            <a
              href={`mailto:${CONTACT_DETAILS.email}`}
              className="contact-detail-item"
            >
              <Mail size={20} />

              <div>
                <small>Email</small>
                <span>{CONTACT_DETAILS.email}</span>
              </div>
            </a>

            {/* PHONE */}
            <a
              href={`tel:${CONTACT_DETAILS.phone}`}
              className="contact-detail-item"
            >
              <Phone size={20} />

              <div>
                <small>Phone</small>
                <span>{CONTACT_DETAILS.phoneDisplay}</span>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href={CONTACT_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail-item"
            >
              <MessageCircle size={20} />

              <div>
                <small>WhatsApp</small>
                <span>Chat with our team</span>
              </div>
            </a>

            {/* ADDRESS */}
            <a
              href={CONTACT_DETAILS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail-item"
            >
              <MapPin size={20} />

              <div>
                <small>Office</small>
                <span>{CONTACT_DETAILS.address}</span>
              </div>
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <label>
            Subject

            <input
              type="text"
              name="subject"
              placeholder="How can we help?"
              required
            />
          </label>

          <label>
            Message

            <textarea
              name="message"
              rows="6"
              placeholder="Tell us a little about your requirement..."
              required
            />
          </label>

          <Button type="submit">
            Send Message
          </Button>
        </form>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="contact-map">
          <iframe
            title="Saiteja Infotech Office Location"
            src={CONTACT_DETAILS.mapEmbedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}

export default Contact;