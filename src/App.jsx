import { ArrowRight, Sparkles, Users, Code2, ShieldCheck, BrainCircuit } from 'lucide-react'
import './index.css'

const services = [
  {
    icon: Users,
    title: 'HR & Staffing',
    description: 'Flexible workforce solutions designed to connect businesses with the right talent.',
  },
  {
    icon: Code2,
    title: 'IT Solutions',
    description: 'Modern software and technology solutions built around your business needs.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Data',
    description: 'Turn data and intelligent technology into practical business outcomes.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'Security-focused solutions that help protect your digital operations.',
  },
]

function App() {
  return (
    <main>
      {/* Temporary navigation — teammate's Navbar will replace this */}
      <header className="site-header">
        <a className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>
            <strong>Saiteja</strong>
            <small>INFOTECH</small>
          </span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Let's Talk <ArrowRight size={16} />
        </a>
      </header>

      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={15} />
            Technology • Talent • Transformation
          </div>

          <h1>
            Building what’s next
            <span> for ambitious businesses.</span>
          </h1>

          <p>
            Saiteja Infotech Private Limited delivers technology, staffing,
            and digital solutions that help organizations move forward with confidence.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#services">
              Explore Services <ArrowRight size={18} />
            </a>

            <a className="secondary-button" href="#contact">
              Start a Conversation
            </a>
          </div>

          <div className="hero-trust">
            <span>01</span>
            <p>Technology-driven solutions</p>
            <span>02</span>
            <p>People-focused execution</p>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-main">
            <div className="orb-core">
              <span>S</span>
            </div>
          </div>

          <div className="floating-card card-top">
            <span className="status-dot" />
            Digital innovation
          </div>

          <div className="floating-card card-bottom">
            <strong>∞</strong>
            <span>Possibilities<br />start here.</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section" id="about">
        <div className="section-label">WHO WE ARE</div>

        <div className="intro-grid">
          <h2>
            One partner.
            <br />
            <span>Multiple possibilities.</span>
          </h2>

          <div>
            <p>
              We combine technology, talent and business understanding to
              create solutions that are practical, scalable and built for
              real-world impact.
            </p>

            <a className="text-link" href="#contact">
              Discover Saiteja Infotech <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="section-heading-row">
          <div>
            <div className="section-label">WHAT WE DO</div>
            <h2>Solutions built around <span>your goals.</span></h2>
          </div>

          <p>
            From people and processes to technology and security,
            our capabilities are designed to work together.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article className="service-card" key={title}>
              <div className="service-number">0{index + 1}</div>

              <div className="service-icon">
                <Icon size={24} strokeWidth={1.7} />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>

              <a href="#contact" aria-label={`Learn more about ${title}`}>
                Learn more <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="vision-section">
        <div className="vision-box">
          <div>
            <div className="section-label">OUR APPROACH</div>
            <h2>
              Technology should
              <span> create momentum.</span>
            </h2>
          </div>

          <p>
            We believe the best solutions are not simply impressive —
            they solve problems, empower people and create measurable
            progress for the organizations behind them.
          </p>
        </div>
      </section>

      {/* CAREERS */}
      <section className="careers-section" id="careers">
        <div className="careers-content">
          <div className="section-label">JOIN THE JOURNEY</div>

          <h2>
            Your next opportunity
            <span> could start here.</span>
          </h2>

          <p>
            Work with people who are building technology, solving problems
            and shaping what comes next.
          </p>

          <a className="primary-button" href="#contact">
            Explore Careers <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-card">
          <div>
            <div className="section-label">LET'S CONNECT</div>
            <h2>Have a challenge?</h2>
            <p>
              Let's talk about how Saiteja Infotech can help turn your
              next idea into something real.
            </p>
          </div>

          <a className="primary-button" href="mailto:saitejainfotechprivatelimited@gmail.com">
            Contact Us <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Temporary footer — teammate's Footer will replace this */}
      <footer className="temporary-footer">
        <strong>Saiteja Infotech Private Limited</strong>
        <span>Technology • Talent • Transformation</span>
      </footer>
    </main>
  )
}

export default App