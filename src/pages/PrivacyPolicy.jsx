import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../components/Button";

function PrivacyPolicy() {
  return (
    <main className="legal-page">
      {/* HERO */}
      <section className="legal-hero">
        <div className="section-label">PRIVACY POLICY</div>

        <h1>
          Your privacy
          <span> matters to us.</span>
        </h1>

        <p>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you use our website
          and services.
        </p>
      </section>

      {/* CONTENT */}
      <section className="legal-content-section">
        <div className="legal-content">
          <article className="legal-section">
            <span className="legal-number">01</span>

            <div>
              <h2>Information We Collect</h2>

              <p>
                We may collect personal information such as your name, email
                address, phone number, and business details when you contact us
                or use our services.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">02</span>

            <div>
              <h2>How We Use Information</h2>

              <p>
                We use your information to provide services, respond to
                inquiries, improve our offerings, and communicate important
                updates.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">03</span>

            <div>
              <h2>Data Protection</h2>

              <p>
                We implement appropriate security measures to protect your data
                from unauthorized access, misuse, or disclosure.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">04</span>

            <div>
              <h2>Sharing of Information</h2>

              <p>
                We do not sell or share your personal information with third
                parties except when required by law or for service delivery
                purposes.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">05</span>

            <div>
              <h2>Cookies</h2>

              <p>
                Our website may use cookies to enhance user experience and
                analyze website traffic.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">06</span>

            <div>
              <h2>Your Rights</h2>

              <p>
                You have the right to access, update, or request deletion of
                your personal information at any time.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">07</span>

            <div>
              <h2>Changes to Policy</h2>

              <p>
                We may update this Privacy Policy from time to time. Continued
                use of our services means you accept these changes.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">08</span>

            <div>
              <h2>Contact Information</h2>

              <p>
                If you have any questions about this Privacy Policy, please
                contact us.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="legal-cta">
        <div>
          <div className="section-label">HAVE A QUESTION?</div>

          <h2>
            We're here to
            <span> help.</span>
          </h2>

          <p>
            If you have any questions regarding our Privacy Policy, feel free
            to get in touch with our team.
          </p>
        </div>

        <Button to="/contact">
          Contact Us
        </Button>
      </section>
    </main>
  );
}

export default PrivacyPolicy;