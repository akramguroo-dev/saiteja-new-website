# Saiteja Infotech Website

Modern company website for Saiteja Infotech Private Limited.

## Current stack

- Frontend: React + Vite
- Backend: Java 21 + Spring Boot 4 + Maven
- Database: MySQL 8
- Local frontend: `http://localhost:5173`
- Local backend: `http://localhost:8080`

The project is currently in development. The frontend and the first backend form flows are implemented locally. AWS deployment and production hardening are still pending.

## Repository structure

```text
saiteja-new-website/
├── docs/
│   ├── DEVELOPMENT_PLAN.md
│   └── PROJECT_HANDOVER.md
├── database/
│   └── schema.sql
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   └── pages/
├── backend/
│   └── website-backend/
│       ├── src/main/java/com/saitejainfotech/website/
│       │   ├── config/
│       │   ├── controller/
│       │   ├── dto/
│       │   ├── entity/
│       │   ├── repository/
│       │   └── service/
│       ├── src/main/resources/
│       │   └── application.properties
│       └── pom.xml
├── package.json
└── README.md
```

## Local development — manual

### Prerequisites

- Node.js/npm
- Java 21
- Maven 3.9+
- MySQL 8
- Git

### 1. Create the database

```sql
CREATE DATABASE saiteja_website;
```

### 2. Set the backend database password

The backend expects the environment variable `DB_PASSWORD`.

Windows Command Prompt:

```bat
set DB_PASSWORD=YOUR_MYSQL_PASSWORD
```

PowerShell:

```powershell
$env:DB_PASSWORD="YOUR_MYSQL_PASSWORD"
```

Do not commit the real password.

### 3. Start Spring Boot

```bat
cd backend\website-backend
mvnw.cmd spring-boot:run
```

If the Maven wrapper is not present:

```bat
mvn spring-boot:run
```

Backend health check:

```text
http://localhost:8080/api/health
```

Expected:

```text
Saiteja website backend is running
```

### 4. Start the frontend

In another terminal:

```bat
cd C:\Users\LENOVO\Desktop\saiteja-new-website
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

## Local development — Docker

**Docker is not part of the current Saiteja Infotech Website project setup.**

The website was developed and tested locally using the manual React/Vite + Spring Boot + MySQL setup described above. No website-specific `Dockerfile` or `docker-compose.yml` is required for the current project.

Do not use the Docker configuration from the company HRMS project as instructions for this website. The HRMS application is a separate project being handled by another team and its Docker setup is unrelated to this repository.

If Docker is introduced for this website in a future phase, the Dockerfiles, compose configuration, environment variables, and commands should be added to this repository and this documentation should be updated at that time.

## Backend environment variables

Current local Spring Boot configuration requires:

| Variable | Purpose | Local example |
|---|---|---|
| `DB_PASSWORD` | MySQL password | set in shell, never commit |
| `SPRING_DATASOURCE_URL` | Optional override for JDBC URL | `jdbc:mysql://localhost:3306/saiteja_website?...` |
| `SPRING_DATASOURCE_USERNAME` | Optional DB username | `root` locally |
| `SPRING_PROFILES_ACTIVE` | Spring profile | `default` |

Current `application.properties` uses:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/saiteja_website?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=${DB_PASSWORD}
spring.jpa.hibernate.ddl-auto=update
```

For production, do not use the MySQL `root` account and do not rely on `ddl-auto=update`.

## Implemented functionality

### Frontend

- React/Vite website structure
- Shared navbar/footer/layout components
- Reusable button component
- Home, About, Services, Careers, Contact, FAQ, Quotation, Privacy Policy and Terms pages
- Contact information links and map
- Quotation form
- Contact form
- Frontend loading, success and error states for the forms

### Backend

- Spring Boot application
- MySQL connection through Spring Data JPA
- Health endpoint: `GET /api/health`
- Quotation persistence
- Quotation request validation
- Quotation API: `POST /api/quotations`
- Contact-message persistence
- Contact request validation
- Contact API: `POST /api/contact`
- Local CORS configuration for the React development server

### Database

Current application-managed tables:

- `quotations`
- `contact_messages`

See `database/schema.sql` for a human-readable schema reference. For a production handover, also generate an authoritative dump from the actual MySQL instance with `mysqldump`.

## Remaining work / approximate completion

The project is approximately at the previously discussed ~85% milestone for the current website scope. The remaining work is primarily production/backend hardening and deployment rather than the initial form functionality.

### Remaining

1. Add a shared Spring Boot exception handler (`@RestControllerAdvice`) for consistent validation/API errors.
2. Consider response DTOs instead of returning JPA entities directly.
3. Move frontend API URLs to Vite environment variables; remove hardcoded `localhost:8080`.
4. Decide and implement the remaining backend requirements, especially Careers submissions/admin workflows if required by the final scope.
5. Add production authentication/authorization for any future admin endpoints.
6. Add email/notification handling if the business requires email alerts for Contact/Quotation submissions.
7. Add production database user instead of `root`.
8. Replace `ddl-auto=update` with a controlled migration strategy before production.
9. Add production secrets through AWS environment/secrets management.
10. Configure production CORS for the real domain.
11. Add production logging/monitoring and error handling.
12. Build and deploy frontend/backend/database infrastructure on AWS.
13. Point the existing company domain to the new production frontend after CEO/business approval.
14. Perform final end-to-end, mobile, security and production smoke tests.

## AWS deployment plan

Recommended target architecture:

```text
User
  |
  v
Company domain / HTTPS
  |
  +--> Frontend hosting
  |      AWS S3 + CloudFront
  |
  +--> Backend API
         AWS EC2 / ECS
              |
              v
         Amazon RDS MySQL
```

A simpler first production deployment can use a single EC2 instance for the Spring Boot backend while the frontend is hosted through S3 + CloudFront. RDS is preferred over running MySQL directly on the EC2 host.

### Production checklist

- Create AWS account/resources under the company's ownership.
- Create RDS MySQL database and restricted application user.
- Deploy Spring Boot backend.
- Store `DB_PASSWORD` and other secrets in AWS Secrets Manager or Parameter Store.
- Configure security groups so RDS is not publicly exposed.
- Configure backend CORS for the production frontend domain.
- Build React frontend with the production API base URL.
- Host frontend through S3 + CloudFront.
- Configure HTTPS.
- Configure the company's existing domain/DNS.
- Test `/api/health`, Contact submission, Quotation submission and DB persistence.
- Add backups, monitoring and operational documentation.

Do not treat the AWS architecture above as already deployed; it is the planned target.

## Git handover

Before considering the repository complete:

```bash
git status
git diff
git diff --cached
git log --oneline --decorate -10
git remote -v
```

Confirm no passwords, `.env` files containing secrets, build output, `node_modules`, IDE files, or unrelated HRMS/Docker files are tracked.

Then:

```bash
git add .
git commit -m "docs: complete project handover documentation"
git push origin main
```

Only push after reviewing the staged files. GitHub specifically warns against committing passwords/API keys/secrets.

## Database handover

The `database/schema.sql` file is a documentation/reference schema. The authoritative database export should be generated from the actual MySQL instance:

```bash
mysqldump -u root -p --no-data saiteja_website > database/saiteja_website_schema.sql
```

This exports table definitions without application data.

To export both schema and data when explicitly required:

```bash
mysqldump -u root -p saiteja_website > database/saiteja_website.sql
```

Treat full data dumps as sensitive and do not commit them unless the company explicitly approves it.

## Important security notes

- Never commit `DB_PASSWORD`.
- Never commit `.env` files containing real credentials.
- Do not use MySQL `root` in production.
- Do not expose RDS/MySQL publicly.
- Use HTTPS in production.
- Keep production secrets outside Git.
- Review `.gitignore` before the final push.
