````md
# Saiteja Infotech — Website Development Plan

## 1. Project Goal

Build a modern, responsive, professional website for Saiteja Infotech
Private Limited to replace the limitations of the existing WordPress
website while preserving the company's existing domain.

The project started as a frontend demo intended for internal/CEO review.

The implementation has now progressed beyond the original static demo stage
and includes a React/Vite frontend, Spring Boot backend, MySQL persistence,
and working Contact and Quotation form integrations.

Production deployment and replacement of the existing WordPress website
will happen only after the required business/CEO approval.

---

## 2. Current Technology Stack

### Frontend

- React
- Vite
- React Router
- Tailwind CSS
- Lucide React
- JavaScript

### Backend

- Java 21
- Spring Boot 4
- Maven
- Spring Web
- Spring Data JPA
- Hibernate
- Bean Validation

### Database

- MySQL 8

### Current Local Architecture

```text
React/Vite
    |
    | HTTP/JSON
    v
Spring Boot REST API
    |
    | Spring Data JPA / Hibernate
    v
MySQL 8
````

### Local Development URLs

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:8080`
* Health endpoint: `http://localhost:8080/api/health`

### Docker Status

Docker is NOT currently part of the website project's development setup.

The Docker configuration/work performed for the company's separate HRMS
application belongs to that project and must not be treated as part of this
website repository.

The canonical local setup for this website is:

```text
React/Vite + Spring Boot + MySQL
```

using the manual development path documented in `README.md` and
`PROJECT_HANDOVER.md`.

---

# 3. Development Phases

## Phase 1 — Design System

### Status: Completed

* Establish visual direction and brand styling
* Define primary/secondary colors
* Establish typography
* Define spacing and layout patterns
* Create reusable buttons
* Create reusable section-heading patterns
* Establish responsive layouts
* Establish consistent interaction styling

---

## Phase 2 — Core Layout

### Status: Completed

* Responsive Navbar
* Mobile navigation
* Footer
* Global page layout
* Scroll-to-top behavior
* Reusable UI components
* React Router page structure

---

## Phase 3 — Homepage

### Status: Completed

The homepage includes the major sections required for the initial
company presentation:

* Hero section
* Company branding
* Primary CTA
* Services overview
* Why Saiteja section
* Company highlights/statistics
* Mission & Vision content
* Careers CTA
* Contact CTA

---

## Phase 4 — Main Pages

### Status: Completed

Implemented pages:

* Home
* About Us
* Services
* Careers
* Contact
* FAQ
* Quotation
* Privacy Policy
* Terms

The Contact and Quotation pages are also connected to the backend.

---

## Phase 5 — Service Content

### Status: Completed for Current Demo Scope

Service content and service-specific visual assets have been integrated
for the current website scope.

Current service categories include:

* HR & Staffing
* IT Solutions
* AI & Data Solutions
* Branding & Digital
* Training & Development
* Recruitment

The final production content should still be reviewed against the
company's approved service descriptions and branding materials.

---

# 4. Backend Development

## Phase 6 — Initial Backend Foundation

### Status: Completed

The backend was implemented using Spring Boot and MySQL.

Completed:

* Spring Boot application setup
* Maven project configuration
* Java 21 configuration
* MySQL connection
* Spring Data JPA
* Hibernate database persistence
* Local environment variable configuration
* Health endpoint
* Local CORS configuration

Health endpoint:

```text
GET /api/health
```

Expected response:

```text
Saiteja website backend is running
```

---

## Phase 7 — Quotation System

### Status: Completed for Current Scope

Completed:

* Quotation JPA entity
* Quotation repository
* Quotation service
* Quotation request DTO
* Request validation
* Quotation controller
* `POST /api/quotations`
* MySQL persistence
* Frontend API integration
* Frontend success state
* Frontend error state
* Frontend loading/submitting state
* Form reset after successful submission

Current database table:

```text
quotations
```

---

## Phase 8 — Contact System

### Status: Completed for Current Scope

Completed:

* Contact message JPA entity
* Contact message repository
* Contact message service
* Contact request DTO
* Request validation
* Contact controller
* `POST /api/contact`
* MySQL persistence
* Frontend API integration
* Frontend success state
* Frontend error state
* Frontend loading/submitting state
* Form reset after successful submission

Current database table:

```text
contact_messages
```

---

# 5. Database

## Current Database

```text
saiteja_website
```

Current application-managed tables:

```text
quotations
contact_messages
```

### Quotation

Stores requests submitted through the quotation form.

Main fields:

* `id`
* `name`
* `email`
* `phone`
* `project_type`
* `budget`
* `timeline`
* `project_details`
* `created_at`

### Contact Messages

Stores messages submitted through the Contact page.

Main fields:

* `id`
* `name`
* `email`
* `subject`
* `message`
* `created_at`

A human-readable reference schema is maintained in:

```text
database/schema.sql
```

Before final production handover, an authoritative schema-only dump should
also be generated from the actual MySQL instance.

---

# 6. Testing Completed

## Quotation Flow

Completed tests:

* Valid API request
* Required-field validation
* Invalid email validation
* Database persistence
* Frontend submission
* Frontend form reset
* Success message
* Error handling
* Loading/submitting state

## Contact Flow

Completed tests:

* Valid API request
* Required-field validation
* Invalid email validation
* Database persistence
* Frontend submission
* Frontend form reset
* Success message
* Error handling
* Loading/submitting state

## Backend Health

Verified:

```text
GET /api/health
```

returns the expected backend health response.

---

# 7. Current Project Status

The project is approximately at the previously discussed 85% milestone
for the current website scope.

The initial frontend/demo objective and the first backend form workflows
are complete.

The remaining work is primarily production hardening, additional business
requirements, deployment, and final approval rather than basic application
setup.

---

# 8. Remaining Development Work

## Phase 9 — Backend Hardening

### Status: Pending

### 9.1 Global Exception Handling

Implement a shared Spring Boot exception handler using:

```java
@RestControllerAdvice
```

Goals:

* Consistent API error responses
* Better validation error messages
* Cleaner controller code
* Easier frontend error handling

---

### 9.2 Response DTOs

Review API responses and introduce response DTOs where appropriate instead
of returning JPA entities directly from controllers.

Goals:

* Separate API contracts from database entities
* Prevent accidental exposure of internal fields
* Make future API changes safer

---

### 9.3 Frontend API Configuration

Move API URLs out of hardcoded frontend code.

Current development code uses:

```text
http://localhost:8080
```

This should eventually be replaced with Vite environment configuration,
for example:

```text
VITE_API_BASE_URL
```

The production frontend should use the deployed backend API URL.

---

# 9. Business Functionality Still To Be Decided

## Careers

The Careers page currently exists as a frontend page.

The final business requirement needs to determine whether Careers should
support:

* Job listings
* Job application submissions
* Resume uploads
* Candidate records
* HR/admin management
* Email notifications

These requirements should be confirmed before implementing unnecessary
backend functionality.

---

## Contact and Quotation Notifications

The current system stores Contact and Quotation submissions in MySQL.

A future production requirement may include:

* Email notification to the company
* Confirmation email to the visitor
* Admin dashboard
* Submission management
* Spam protection
* Rate limiting

These should be implemented only according to the final business
requirements.

---

# 10. Security Hardening

## Status: Pending

Before production:

* Create a dedicated MySQL application user
* Do not use the MySQL `root` account
* Move production secrets outside Git
* Use AWS Secrets Manager, Parameter Store, or secure environment variables
* Review CORS configuration
* Restrict database network access
* Add appropriate API rate limiting
* Review input validation
* Review HTTP security headers
* Add authentication/authorization if admin functionality is introduced
* Review logging so sensitive information is never exposed

---

# 11. Database Production Preparation

## Status: Pending

The current local configuration uses:

```properties
spring.jpa.hibernate.ddl-auto=update
```

This is acceptable for the current development stage but should not be
the preferred production database-management strategy.

Before production:

* Establish a controlled migration strategy
* Create the production database
* Create a restricted application database user
* Configure backups
* Verify restore procedures
* Review indexes and constraints
* Generate/document the authoritative production schema

---

# 12. Production Configuration

## Status: Pending

Production configuration should include:

* Production database URL
* Production database username
* Production database password
* Production frontend URL
* Production CORS configuration
* Secure secret management
* Production logging
* Error handling
* Monitoring

The local configuration should remain suitable for local development and
must not contain production credentials.

---

# 13. AWS Deployment Plan

## Status: Planned — Not Yet Deployed

The recommended target architecture is:

```text
                    Company Domain
                          |
                          v
                    HTTPS / DNS
                          |
              +-----------+-----------+
              |                       |
              v                       v
        S3 + CloudFront        Spring Boot API
        React Frontend          EC2 initially
                                      |
                                      v
                                Amazon RDS
                                   MySQL
```

### Frontend

Recommended:

```text
React/Vite
    |
    v
Amazon S3
    |
    v
CloudFront
```

CloudFront should provide CDN delivery and HTTPS for the frontend.

### Backend

Initial production option:

```text
Spring Boot
    |
    v
Amazon EC2
```

A later evolution could move the backend to ECS/containerized
infrastructure if the project requirements justify it.

### Database

Recommended:

```text
Amazon RDS for MySQL
```

RDS is preferred over running MySQL directly on the application server.

---

# 14. AWS Production Checklist

Before deployment:

* Create/use AWS resources under company ownership
* Configure IAM access securely
* Create RDS MySQL
* Create restricted application DB user
* Configure RDS networking/security groups
* Deploy Spring Boot backend
* Configure backend environment variables
* Store secrets securely
* Configure production CORS
* Build React frontend with production API URL
* Upload frontend build to S3
* Configure CloudFront
* Configure HTTPS
* Configure company DNS/domain
* Configure logging and monitoring
* Configure database backups
* Test backend health endpoint
* Test Contact submission
* Test Quotation submission
* Verify database persistence
* Perform production smoke tests

---

# 15. Existing WordPress Website Migration

## Status: Pending Business Approval

The existing company domain currently points to the older WordPress website.

The new website should NOT replace the existing production website until
the required CEO/business approval has been received.

After approval:

1. Confirm final website content.
2. Confirm production backend requirements.
3. Complete AWS deployment.
4. Test the production application.
5. Configure DNS/domain routing.
6. Replace the existing WordPress destination with the new application.
7. Verify HTTPS.
8. Verify all important pages.
9. Verify Contact and Quotation submissions.
10. Monitor the site after cutover.

The existing company domain should be retained if that remains the approved
business decision.

---

# 16. Final UI/UX and Production QA

## Status: Pending

Before production launch:

### Responsive Testing

* Desktop
* Laptop
* Tablet
* Mobile

### Browser Testing

* Chrome
* Edge
* Firefox
* Safari where applicable

### Accessibility

* Keyboard navigation
* Form labels
* Focus states
* Color contrast
* Semantic HTML
* Image alt text

### Performance

* Image optimization
* JavaScript bundle review
* Loading performance
* Caching
* Core Web Vitals review

### SEO

* Page titles
* Meta descriptions
* Open Graph metadata
* Sitemap
* Robots configuration
* Canonical URLs
* Search-engine indexing review

### Functional Testing

* Navigation
* Contact form
* Quotation form
* External links
* WhatsApp link
* Phone/email links
* Map
* All page routes

---

# 17. Documentation and Handover

## Status: Completed for Current Stage

The project documentation has been updated to make the repository
maintainable by another developer.

### README

`README.md` documents:

* Project purpose
* Technology stack
* Repository structure
* Manual local setup
* Environment variables
* Current functionality
* Remaining work
* AWS deployment plan

### Project Handover

```text
docs/PROJECT_HANDOVER.md
```

Documents:

* Application architecture
* Local setup
* Backend structure
* Frontend structure
* Database structure
* API endpoints
* Completed testing
* Current status
* Remaining work
* AWS plan
* Production considerations

### Database Documentation

```text
database/schema.sql
```

contains a human-readable database reference.

# 18. Final Definition of Done

The website project can be considered production-ready when:

* [x] Frontend structure is implemented
* [x] Main website pages are implemented
* [x] Responsive UI is implemented
* [x] Contact page is implemented
* [x] Quotation page is implemented
* [x] Spring Boot backend is implemented
* [x] MySQL persistence is implemented
* [x] Contact API is implemented
* [x] Quotation API is implemented
* [x] Request validation is implemented
* [x] Local frontend/backend integration is working
* [x] Documentation is updated
* [x] Database structure is documented
* [ ] Global API exception handling
* [ ] Response DTO review
* [ ] Frontend environment-based API URL
* [ ] Final Careers backend requirements
* [ ] Email/notification requirements
* [ ] Production database user
* [ ] Production database migration strategy
* [ ] Production secrets management
* [ ] Production CORS
* [ ] Production monitoring/logging
* [ ] AWS infrastructure
* [ ] Frontend deployment
* [ ] Backend deployment
* [ ] RDS deployment
* [ ] Domain/DNS cutover
* [ ] Final production QA
* [ ] CEO/business approval for production replacement

---

# 19. Important Project Notes

### This website is separate from the HRMS project

The company's HRMS application is a separate project being worked on by
another team.

Any Docker configuration, Dockerfiles, Compose files, or infrastructure
changes associated with HRMS must not be assumed to belong to this website.

This website's canonical local development environment is currently:

```text
React/Vite
+
Spring Boot
+
MySQL
```

with manual local startup.

### Production has not been deployed

AWS architecture and deployment instructions in this document represent
the planned production architecture.

They must not be interpreted as evidence that the application is already
deployed to AWS.

### Business approval is required before domain cutover

The existing WordPress website should remain in place until the company
approves the new website for production replacement.

---

# 21. Related Documentation

* `README.md` — project overview and developer quick-start
* `docs/DEVELOPMENT_PLAN.md` — development roadmap and project status
* `docs/PROJECT_HANDOVER.md` — detailed developer handover
* `database/schema.sql` — human-readable database schema

````
