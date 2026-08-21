# Saiteja Infotech — Website Development Plan

## Goal

Build a modern, responsive demo website for Saiteja Infotech Private Limited
to present to the CEO.

The current WordPress website will NOT be modified during the demo phase.

After CEO review and approval, the team will decide:
- Backend technology
- Database/API requirements
- CMS vs custom application approach
- Production deployment strategy
- Migration/replacement of the existing WordPress website
- Keeping the existing domain name

---

## Phase 1 — Design System

- Establish brand colors
- Select heading and body fonts
- Define typography scale
- Define spacing system
- Create reusable buttons
- Create reusable cards/sections
- Establish responsive breakpoints
- Establish animation/interaction style

## Phase 2 — Core Layout

- Responsive Navbar
- Mobile navigation
- Footer
- Global page layout
- Reusable section components

## Phase 3 — Homepage

- Hero section
- Company branding
- Strong CTA
- Services overview
- Why Saiteja
- Company highlights/statistics
- Mission & Vision preview
- Careers CTA
- Contact CTA

## Phase 4 — Main Pages

- About Us
- Services
- Careers
- Contact

## Phase 5 — Service Pages

Create detailed service sections/pages based on the
company's actual services and existing website content.

Each service should contain:
- Icon/visual
- Short description
- Key benefits/details
- Learn More CTA

## Phase 6 — Final UI/UX & Technical Polish

- Mobile/tablet responsiveness
- Accessibility
- Animations
- Image optimization
- SEO foundations
- Loading performance
- Cross-browser testing
- Final UI consistency

---

## Demo Stage

The website will initially use mock/static data where necessary.

No production deployment or replacement of the existing
WordPress website will happen before CEO approval.

After CEO feedback, requirements will be revised accordingly.

src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   └── SectionHeading.jsx
│
├── layouts/
│   └── MainLayout.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Careers.jsx
│   ├── Contact.jsx
│   └── FAQ.jsx
│
├── data/
│   └── services.js
│
├── App.jsx
├── main.jsx
└── index.css