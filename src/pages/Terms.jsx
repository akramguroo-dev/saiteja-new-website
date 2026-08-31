import Button from "../components/Button";

function Terms() {
  return (
    <main className="legal-page">
      {/* HERO */}
      <section className="legal-hero">
        <div className="section-label">TERMS & CONDITIONS</div>

        <h1>
          Clear terms for
          <span> better relationships.</span>
        </h1>

        <p>
          Welcome to our website. By accessing or using our services, you agree
          to comply with and be bound by the following terms and conditions.
          Please read them carefully before using our services.
        </p>
      </section>

      {/* CONTENT */}
      <section className="legal-content-section">
        <div className="legal-content">
          <article className="legal-section">
            <span className="legal-number">01</span>

            <div>
              <h2>Use of Services</h2>

              <p>
                Our services are intended for lawful purposes only. You agree
                not to use our services in any way that may harm our business,
                our clients, or any third party.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">02</span>

            <div>
              <h2>Intellectual Property</h2>

              <p>
                All content, designs, and materials provided by us are
                protected by intellectual property rights. You may not copy,
                reproduce, or distribute any content without prior permission.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">03</span>

            <div>
              <h2>Service Agreement</h2>

              <p>
                All services provided are subject to agreed terms between both
                parties. Project timelines, deliverables, and pricing will be
                defined before the start of any work.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">04</span>

            <div>
              <h2>Payment Terms</h2>

              <p>
                Payments must be made as per the agreed schedule. Delayed
                payments may affect project delivery or service continuity.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">05</span>

            <div>
              <h2>Limitation of Liability</h2>

              <p>
                We are not liable for any indirect or consequential losses
                arising from the use of our services. We ensure best practices
                but cannot guarantee uninterrupted or error-free service at all
                times.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">06</span>

            <div>
              <h2>Privacy</h2>

              <p>
                We respect your privacy and handle your information securely.
                Any personal data shared with us will be used only for
                service-related purposes.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">07</span>

            <div>
              <h2>Changes to Terms</h2>

              <p>
                We reserve the right to update or modify these terms at any
                time. Continued use of our services implies acceptance of the
                updated terms.
              </p>
            </div>
          </article>

          <article className="legal-section">
            <span className="legal-number">08</span>

            <div>
              <h2>Contact Information</h2>

              <p>
                If you have any questions regarding these Terms & Conditions,
                please feel free to contact us.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="legal-cta">
        <div>
          <div className="section-label">NEED CLARIFICATION?</div>

          <h2>
            Let's talk
            <span> it through.</span>
          </h2>

          <p>
            Have a question regarding our Terms & Conditions? Our team is
            available to help.
          </p>
        </div>

        <Button to="/contact">
          Contact Us
        </Button>
      </section>
    </main>
  );
}

export default Terms;