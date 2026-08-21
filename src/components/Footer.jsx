import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaYoutube,
} from 'react-icons/fa'
import logo from '../../images/logo (1).jpg'

const footerGroups = [
  {
    title: 'Services',
    links: [
      'Software Development',
      'C2C Staffing Solutions',
      'IT Consulting',
      'Support & Maintenance',
      'Cloud & DevOps',
      'Cybersecurity Solutions',
    ],
  },
  {
    title: 'Support',
    links: [
      'Help Center',
      'FAQ',
      'Contact Us',
      'Technical Support',
      'Privacy Policy',
    ],
  },
  {
    title: 'Company',
    links: [
      'About Us',
      'Our Services',
      'Careers',
      'Blog / Insights',
      'Terms & Conditions',
    ],
  },
]

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-br from-[#0a1128] via-[#101a40] to-[#1e2a5e] px-5 py-12 text-slate-300 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      
      {/* Background decorative elements */}
      <div className="absolute -right-3 top-4 -z-10 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl sm:right-12" />
      <div className="absolute -bottom-20 left-6 -z-10 h-40 w-40 rounded-full bg-indigo-300/10 blur-2xl" />

      {/* Main Footer Grid */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-10 sm:grid-cols-2 sm:gap-x-[1.6rem] sm:gap-y-8 lg:grid-cols-[1.55fr_1fr_1fr_1fr] lg:gap-x-8 lg:gap-y-0">

        {/* Brand Section */}
        <div className="min-w-0 w-full max-w-[360px] sm:col-span-2 lg:col-span-1">
          <a
            href="/"
            className="inline-flex items-center gap-2.5 text-[23px] font-bold tracking-tight text-white"
          >
            <img
              src={logo}
              alt="SaiTeja Infotech logo"
              className="h-24 w-24 rounded-full border border-white/60 object-cover sm:h-28 sm:w-28 lg:h-32 lg:w-32"
            />
          </a>

          <p className="mt-5 text-sm leading-6 text-slate-300 lg:mt-5">
            Empowering businesses with smart IT solutions and skilled
            professionals. Your trusted partner for software development, IT
            consulting, and C2C staffing services.
          </p>

          <p className="mt-5 inline-flex break-all text-sm font-medium leading-6 text-[#22c55e]">
            info@saitejainfotechprivatelimited.com
          </p>

          <p className="mt-3 inline-flex items-center gap-3 text-2xl font-medium leading-6 text-white">
            +91 9686617096
          </p>
        </div>

        {/* Footer Groups */}
        {footerGroups.map((group) => (
          <div
            key={group.title}
            className="min-w-0 w-full lg:col-auto lg:row-start-1"
          >
            <h2 className="m-0 text-xl font-semibold leading-6 text-white sm:text-2xl">
              {group.title}
            </h2>

            <ul className="mt-4 grid gap-2.5 sm:mt-4 lg:mt-5">
              {group.links.map((link) => (
                <li key={link} className="leading-6">
                  <a
                    href="#"
                    className="text-sm leading-6 text-slate-300 transition hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center gap-4 border-t border-white/15 pt-4 text-center text-sm sm:mt-8 sm:gap-4 sm:pt-4 md:mt-14 md:flex-row md:items-center md:justify-between md:text-left lg:mt-14">
        
        {/* Copyright */}
        <p className="text-slate-400">
          © {new Date().getFullYear()} SAITEJA INFOTECH PRIVATE LIMITED. All
          Rights Reserved.
        </p>

        {/* Social Section */}
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <h2 className="text-lg font-semibold text-white sm:mr-1">
            Follow Us On
          </h2>

          <div className="flex items-center justify-center gap-3">

            {/* Facebook */}
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/people/Saiteja-Infotech-Private-Limited/61575798075215/?rdid=ku0EA19rhXPkdnC7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F187iw4f3on%2F"
              aria-label="Facebook"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-slate-950"
            >
              <FaFacebook size={15} />
            </a>

            {/* Instagram */}
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/saiteja-infotech-private-limited/"
              aria-label="Instagram"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#0a1128]"
            >
              <FaInstagram size={15} />
            </a>

            {/* LinkedIn */}
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/saiteja-infotech-private-limited/"
              aria-label="LinkedIn"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#0a1128]"
            >
              <FaLinkedinIn size={15} />
            </a>

            {/* YouTube */}
            <a
              rel="noopener noreferrer"
              href="https://www.youtube.com/@saitejainfotechpvtltd"
              aria-label="YouTube"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#0a1128]"
            >
              <FaYoutube size={15} />
            </a>

            {/* Telegram */}
            <a
              rel="noopener noreferrer"
              href="https://t.me/+RbtUQKbaKD1hYTY"
              aria-label="Telegram"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#0a1128]"
            >
              <FaTelegram size={15} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer