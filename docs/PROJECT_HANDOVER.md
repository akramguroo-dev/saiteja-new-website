# Saiteja Infotech Website — Project Handover

## 1. Purpose

This document is for the next developer/maintainer taking over the Saiteja Infotech website.

The project consists of:

- React/Vite frontend
- Java/Spring Boot backend
- MySQL database

The application is currently functional locally for the implemented Contact and Quotation backend flows. Production deployment has not yet been completed.

## 2. How the pieces map together

```text
React/Vite
   |
   | HTTP JSON
   v
Spring Boot REST API
   |
   | Spring Data JPA / Hibernate
   v
MySQL
```

Current API endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Backend health check |
| POST | `/api/quotations` | Save quotation request |
| POST | `/api/contact` | Save contact message |

## 3. Manual local setup

### Database

```sql
CREATE DATABASE saiteja_website;
```

Set:

```text
DB_PASSWORD=<local MySQL password>
```

Start backend:

```bat
cd backend\website-backend
mvnw.cmd spring-boot:run
```

Start frontend in another terminal:

```bat
npm install
npm run dev
```

Expected local URLs:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8080`
- Health: `http://localhost:8080/api/health`

## 4. Docker status

Docker is **not currently configured or required for this website project**. The website was developed and tested using the manual local setup:

- React/Vite frontend running on `localhost:5173`
- Spring Boot backend running on `localhost:8080`
- MySQL running locally on port `3306`

There is no canonical website-specific `Dockerfile` or `docker-compose.yml` to use for local development at this stage.

**Important:** the company HRMS application is a separate project being worked on by another team. Its Docker setup, Dockerfiles, compose files, and local workarounds must **not** be treated as part of this website project's setup.

If Docker is introduced for the website later, add the configuration to this repository first and update this document and the README with the exact commands and environment requirements.

## 5. Spring Boot environment variables

Current important variable:

```text
DB_PASSWORD
```

The application resolves it through:

```properties
spring.datasource.password=${DB_PASSWORD}
```

Potential deployment variables:

```text
DB_PASSWORD
SPRING_DATASOURCE_URL
SPRING_DATASOURCE_USERNAME
SPRING_PROFILES_ACTIVE
```

Never document or commit the real values.

## 6. Folder structure

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
└── backend/
    └── website-backend/
        ├── src/main/java/com/saitejainfotech/website/
        │   ├── config/
        │   ├── controller/
        │   ├── dto/
        │   ├── entity/
        │   ├── repository/
        │   └── service/
        ├── src/main/resources/
        └── pom.xml
```

Backend package responsibilities:

- `controller`: HTTP endpoints
- `dto`: request/transport objects and validation
- `entity`: JPA database models
- `repository`: Spring Data database access
- `service`: business/application logic
- `config`: application configuration such as CORS

## 7. Database structure

### `quotations`

Stores requests submitted through the quotation form.

Main fields:

- `id`
- `name`
- `email`
- `phone`
- `project_type`
- `budget`
- `timeline`
- `project_details`
- `created_at`

### `contact_messages`

Stores messages submitted through the Contact page.

Main fields:

- `id`
- `name`
- `email`
- `subject`
- `message`
- `created_at`

Use the actual MySQL dump as the authoritative source for exact SQL types and indexes.

## 8. Testing already completed

### Quotation

- Valid request persisted successfully.
- Validation rejects missing/invalid required fields.
- Browser form submits and resets on success.
- Frontend displays success/error states.

### Contact

- Valid Thunder Client request returned HTTP 201 and persisted a row.
- Invalid request returned HTTP 400.
- Browser form submission persisted successfully and reset after success.
- Loading/disabled UI was verified during diagnostic testing and the artificial delay was removed afterward.

## 9. Current status

### Completed

- Frontend page structure and shared components
- Contact page
- Quotation page
- Contact API
- Quotation API
- MySQL persistence
- DTO validation
- Local CORS
- Backend health endpoint
- Local integration testing

### Remaining

- Global exception handling
- Response DTOs where appropriate
- Environment-based frontend API URL
- Remaining business workflows
- Production authentication if admin functionality is introduced
- Email notifications if required
- Production DB user/secrets
- DB migration strategy
- Production CORS
- AWS deployment
- Domain/DNS cutover
- Final production QA and monitoring

## 10. AWS plan

Preferred architecture:

```text
Route 53 / existing DNS
        |
        v
CloudFront + S3
        |
        | API calls
        v
Spring Boot backend
(EC2 initially, or ECS later)
        |
        v
Amazon RDS MySQL
```

Security requirements:

- HTTPS everywhere
- RDS private/non-public where possible
- restricted security groups
- dedicated DB application user
- AWS-managed secrets
- least-privilege IAM
- backups enabled
- monitoring/logging enabled

The architecture is a plan, not a statement that deployment is complete.

## 11. Final GitHub handover checklist

Run from repository root:

```bash
git status
git diff
git diff --cached
git log --oneline --decorate -10
git remote -v
```

Then verify:

- no real credentials
- no `.env` with secrets
- no `node_modules`
- no build artifacts
- no IDE-specific files
- no Docker configuration copied from the separate HRMS project
- README and handover docs are current

After review:

```bash
git add README.md docs/PROJECT_HANDOVER.md database/schema.sql
git commit -m "docs: complete project handover documentation"
git push origin main
```

## 12. Database export

From a machine with MySQL client tools:

```bash
mysqldump -u root -p --no-data saiteja_website > database/saiteja_website_schema.sql
```

This is the preferred handover artifact because it represents the actual database schema.

Do not commit a full data dump without explicit company approval.

## 13. Known local-only considerations

During development, local environment adjustments were used to run the website locally. Database credentials are supplied through environment variables and must not be committed. The current website project does not include a Docker setup.

Also keep the website repository separate from the company's HRMS project: any HRMS Docker files, compose files, or local Docker workarounds belong to that separate project and are not part of this handover.

Before final handover, distinguish clearly between:

1. canonical committed configuration;
2. local-only workarounds;
3. production configuration that has not yet been implemented.

This prevents the next developer from assuming a local workaround is part of the production architecture.
