import { useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    question: 'What services does Saiteja Infotech provide?',
    answer:
      'Saiteja Infotech provides services across staffing, recruitment, IT solutions, branding, training and digital capabilities.',
  },
  {
    question: 'How can I discuss a business requirement?',
    answer:
      'You can contact our team through the contact form, email or other official communication channels listed on our website.',
  },
  {
    question: 'Does Saiteja Infotech provide recruitment services?',
    answer:
      'Yes. Recruitment and staffing are among the key capabilities presented by Saiteja Infotech.',
  },
  {
    question: 'Can I apply for an internship or job?',
    answer:
      'Yes. Visit our Careers section to explore current opportunities and submit your profile.',
  },
  {
    question: 'Can organizations partner with Saiteja Infotech?',
    answer:
      'Yes. Organizations can contact our team to discuss staffing, technology, training or other potential partnerships.',
  },
  {
    question: 'How can I contact the company?',
    answer:
      'You can use the Contact page to send an enquiry and access the company contact details.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <main className="faq-page">
      <section className="faq-hero">
        <div className="section-label">FAQ</div>

        <h1>
          Questions?
          <span> Let's clear them up.</span>
        </h1>

        <p>
          Find answers to some of the questions people commonly ask about
          Saiteja Infotech and our services.
        </p>
      </section>

      <section className="faq-content">
        <div className="faq-intro">
          <div className="section-label">NEED TO KNOW</div>

          <h2>
            Answers without
            <span> the complexity.</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <article className={`faq-item ${isOpen ? 'open' : ''}`} key={faq.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>
                    <small>0{index + 1}</small>
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <ArrowDown size={20} />
                  ) : (
                    <ArrowRight size={20} />
                  )}
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="faq-cta">
        <div>
          <div className="section-label">STILL HAVE QUESTIONS?</div>

          <h2>
            We're happy to
            <span> help.</span>
          </h2>
        </div>

        <a className="primary-button" href="/contact">
          Contact Us <ArrowRight size={18} />
        </a>
      </section>
    </main>
  )
}

export default FAQ