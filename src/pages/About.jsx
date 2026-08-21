import {
  ArrowRight,
  Award,
  Eye,
  Target,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const milestones = [
  {
    year: '01',
    title: 'The Beginning',
    description:
      'Saiteja Infotech began with a vision to bring people, technology and business opportunities closer together.',
  },
  {
    year: '02',
    title: 'Growing Capabilities',
    description:
      'Our capabilities expanded across staffing, technology, training and digital solutions.',
  },
  {
    year: '03',
    title: 'Building Partnerships',
    description:
      'We continue to build relationships with organizations and professionals to create meaningful opportunities.',
  },
  {
    year: '04',
    title: 'Looking Ahead',
    description:
      'Our focus remains on creating practical solutions that help businesses and people move forward.',
  },
]

function About() {
  return (
    <main className="about-page">
      {/* PAGE HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="section-label">ABOUT SAITEJA INFOTECH</div>

          <h1>
            People, technology,
            <span> and possibilities.</span>
          </h1>

          <p>
            Saiteja Infotech Private Limited brings together technology,
            talent and business understanding to help organizations solve
            problems and create new opportunities.
          </p>
        </div>

        <div className="about-hero-orbit" aria-hidden="true">
          <div className="about-orbit about-orbit-one" />
          <div className="about-orbit about-orbit-two" />

          <div className="about-orbit-core">
            <span>S</span>
          </div>

          <div className="about-floating-card">
            <Award size={18} />
            <span>
              Technology
              <br />
              with purpose
            </span>
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="about-profile">
        <div className="section-label">WHO WE ARE</div>

        <div className="about-profile-grid">
          <h2>
            More than a service provider.
            <span> A partner for progress.</span>
          </h2>

          <div className="about-profile-copy">
            <p>
              We work at the intersection of people, technology and business.
              Our approach is centered around understanding real challenges
              and creating solutions that are practical, scalable and useful.
            </p>

            <p>
              From connecting organizations with talent to enabling digital
              transformation, we aim to make every engagement meaningful and
              outcome-driven.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="mission-vision-section">
        <div className="section-heading-row">
          <div>
            <div className="section-label">WHAT DRIVES US</div>

            <h2>
              Purpose behind
              <span> every solution.</span>
            </h2>
          </div>

          <p>
            Our mission and vision guide how we build relationships,
            develop capabilities and approach every challenge.
          </p>
        </div>

        <div className="mission-vision-grid">
          <article className="purpose-card purpose-card-dark">
            <div className="purpose-icon">
              <Target size={25} />
            </div>

            <span className="purpose-number">01</span>

            <h3>Our Mission</h3>

            <p>
              To deliver practical technology, talent and business solutions
              that create measurable value for organizations and meaningful
              opportunities for people.
            </p>
          </article>

          <article className="purpose-card">
            <div className="purpose-icon">
              <Eye size={25} />
            </div>

            <span className="purpose-number">02</span>

            <h3>Our Vision</h3>

            <p>
              To become a trusted partner for organizations seeking to grow
              through technology, people and continuous innovation.
            </p>
          </article>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership-section">
        <div className="section-label">LEADERSHIP</div>

        <div className="leadership-grid">
          <div className="leadership-photo">
            <div className="leadership-placeholder">
              <Users size={44} />
              <span>Leadership Profile</span>
            </div>
          </div>

          <div className="leadership-content">
            <span className="leadership-role">
              CHIEF EXECUTIVE OFFICER
            </span>

            <h2>
              Vision that turns
              <span> possibilities into progress.</span>
            </h2>

            <p>
              Our leadership is focused on building a culture where
              technology, people and business work together to create
              sustainable growth.
            </p>

            <p>
              The CEO profile and professional message can be expanded here
              with the approved photograph, name and biography once provided
              by the company.
            </p>

            <Link className="text-link" to="/contact">
              Connect with our team <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <div className="section-heading-row">
          <div>
            <div className="section-label">OUR JOURNEY</div>

            <h2>
              Growing with
              <span> purpose.</span>
            </h2>
          </div>

          <p>
            A growing story shaped by people, partnerships and a commitment
            to creating better solutions.
          </p>
        </div>

        <div className="timeline">
          {milestones.map((milestone, index) => (
            <article
              className="timeline-item"
              key={milestone.year}
            >
              <div className="timeline-marker">
                <span>{milestone.year}</span>
              </div>

              <div className="timeline-content">
                <span>0{index + 1}</span>

                <h3>{milestone.title}</h3>

                <p>{milestone.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div>
          <div className="section-label">LET'S BUILD TOGETHER</div>

          <h2>
            Have a vision?
            <span> Let's move it forward.</span>
          </h2>

          <p>
            Explore how Saiteja Infotech can support your organization's
            next opportunity.
          </p>
        </div>

        <Link className="primary-button" to="/contact">
          Start a Conversation <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  )
}

export default About