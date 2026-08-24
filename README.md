# Saiteja Infotech Website

A modern frontend redesign of the **Saiteja Infotech Private Limited** company website.

This version was developed as a new website experience focused on improving the overall UI, UX, visual consistency, page structure, and presentation of the company's services and capabilities.

> **Current Status:** Frontend demo version — approved direction for further development and refinement.

---

## Live Demo

**Saiteja Infotech Website:** `saiteja-new-website.vercel.app`

---

## Overview

The project is a modern multi-page company website built with React and Vite.

The current version focuses primarily on the frontend experience, including:

* Modern responsive UI
* Consistent design system across pages
* Multi-page navigation using React Router
* Reusable components
* Centralized service data
* FAQ interactions
* Contact form UI
* Privacy Policy and Terms placeholder pages
* Aurora Glass visual theme

The website is currently deployed as a demo while additional content, branding assets, and functionality are being finalized.

---

## Pages

The current website includes the following pages:

* Home
* About Us
* Services
* Careers
* FAQ
* Contact Us
* Privacy Policy
* Terms & Conditions

---

## Features

### Modern Responsive Design

The website is designed to provide a consistent experience across desktop and smaller screen sizes.

### Aurora Glass Visual Theme

The current version uses an Aurora Glass-inspired visual design featuring:

* Animated aurora gradients
* Glassmorphism-inspired cards
* Gradient hero text
* Glowing interactive elements
* Modern visual hierarchy

The project structure and component classes remain independent from the visual theme, allowing the design to be updated by modifying the global stylesheet.

### Reusable Components

Common UI elements are organized into reusable components.

Current shared components include:

* `Navbar`
* `Footer`
* `Button`
* `SectionHeading`

### Centralized Service Data

Service information is maintained separately inside the `data` directory and reused across relevant pages.

This helps keep service content consistent and reduces duplication.

### React Router Navigation

The application uses client-side routing to navigate between the different website pages.

### Interactive FAQ

The FAQ page includes expandable questions and answers using React state.

### Contact Interface

The Contact page currently provides:

* Email contact information
* Phone placeholder
* Office location placeholder
* WhatsApp placeholder
* Contact form interface
* Google Maps integration placeholder

Backend form processing and final contact information will be added in a future development phase.

---

## Tech Stack

* React
* Vite
* React Router DOM
* Lucide React
* CSS
* Tailwind CSS integration

---

## Project Structure

```text
src/
├── components/
│   ├── Button.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── SectionHeading.jsx
│
├── data/
│   └── services.js
│
├── layouts/
│   └── MainLayout.jsx
│
├── pages/
│   ├── About.jsx
│   ├── Careers.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   ├── Home.jsx
│   ├── PrivacyPolicy.jsx
│   ├── Services.jsx
│   └── Terms.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## Installation and Local Development

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project

```bash
cd <project-folder>
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The application will then be available through the local development URL provided by Vite.

---

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The current demo version is deployed using Vercel.

The deployed version is intended for demonstration, review, and continued development before the final production website replaces the existing company website.

---

## Current Placeholders

Some content and assets are intentionally represented as placeholders in the current demo version.

These include:

* Final company logo
* Official brand assets
* CEO photograph
* Leadership information
* Confirmed contact number
* Confirmed office address
* WhatsApp integration
* Google Maps location

These items will be updated once the appropriate company information and assets are finalized.

---

## Future Development

The next stages of development may include:

### Content and Branding

* Add the finalized company logo
* Add official company branding assets
* Add approved leadership photographs and information
* Update service and company content where required

### Backend Functionality

* Implement contact form submission
* Add backend integration
* Configure enquiry handling
* Add form validation and response handling

### External Integrations

* WhatsApp integration
* Google Maps integration
* Official social media links

### Production Deployment

* Final website testing
* Domain configuration
* Migration from the existing WordPress website
* Production deployment using the company's official domain

---

## Project Status

The current version represents the first major frontend redesign and demonstration version of the Saiteja Infotech website.

The frontend structure, pages, reusable components, and visual direction have been established. Further development will focus on refining content, integrating official branding assets, implementing required backend functionality, and preparing the website for production deployment.

---

## License

This project was developed for **Saiteja Infotech Private Limited**.

All company-related content, branding, and assets belong to their respective owners.
