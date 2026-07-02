# Stalemax Technologies — Website

Premium, full-stack marketing site + admin panel built with Next.js 15 (App Router), TypeScript, MongoDB/Mongoose, NodeMailer, React Hook Form, and Zod. Visual design matches the provided template exactly — no styling was changed.

## 1. Install dependencies

```bash
npm install
```

## 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

- `MONGODB_URI` — your MongoDB connection string (Atlas or self-hosted).
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` — SMTP credentials used by NodeMailer (e.g. a Gmail App Password, or any transactional SMTP provider).
- `COMPANY_EMAIL` — inbox that receives contact and job application notifications.
- `JWT_SECRET` — any long random string, used to sign the admin session cookie.
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — the first admin account. On first login these credentials automatically create the admin user in MongoDB (hashed).

## 3. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 4. Admin panel

The admin panel lives at `/admin` and is **not linked anywhere in the public navigation**. Access it directly:

- `http://localhost:3000/admin/login`

Log in with `ADMIN_EMAIL` / `ADMIN_PASSWORD` from your `.env.local`. From there you can view and update the status of contact enquiries and job applications.

## 5. Content editing

The entire site is data-driven. To change any content, edit the files in `src/data/` — no component code needs to change:

- `siteConfig.ts` — company info, nav links, socials
- `services.ts`, `whyChoose.ts`, `products.ts`, `portfolio.ts`
- `team.ts`, `pricing.ts`, `faq.ts`, `testimonials.ts`
- `technologies.ts`, `achievements.ts`, `process.ts`
- `blogs.ts`, `careers.ts`

## 6. Production build

```bash
npm run build
npm run start
```

## Folder structure

```
src/
  app/            Routes (App Router), API route handlers, admin panel
  components/     layout, sections, forms, ui, admin
  data/           Centralized content/config files
  lib/            db, mailer, auth, validations
  models/         Mongoose schemas
  types/          Shared TypeScript types
public/
  uploads/resumes Uploaded resumes from the careers form (created at runtime)
```
