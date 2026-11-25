# DUMA — Business Operating System

**One business. One connected workspace.**

DUMA is being developed as a modular business super app for African businesses. The goal is to bring essential operations into one system while keeping company data private and access controlled.

## DUMA modules

- **DUMA MONEY** — income, expenses, cash flow and financial records.
- **DUMA FLEET** — vehicles, drivers, maintenance and fleet costs.
- **DUMA PAYROLL** — employees, payroll, payslips, leave and HR.
- **DUMA BUSINESS** — stock, sales, customers and suppliers.
- **DUMA FREIGHT** — loads, deliveries and logistics.
- **DUMA INTELLIGENCE** — consolidated reports and business insights.

Shared workspace services will include company profiles, branches, people and roles, documents, notifications, audit history and settings.

## Current build status

- [x] Responsive DUMA super-app command-centre shell
- [x] Navigation for all six core modules
- [x] Initial PWA manifest and offline shell
- [ ] Secure authentication and isolated company workspaces
- [ ] Shared API/backend and database
- [ ] Role-based permissions and audit trail
- [ ] Working module features and shared records
- [ ] South African payroll rules and independently tested calculations
- [x] Capacitor Android packaging configuration and GitHub Actions workflow added
- [ ] First Android APK build verified and released

## Important

This repository currently contains a front-end foundation only. Module screens are not yet connected to a production backend. Do not enter real employee, identity, salary, tax, banking, customer or other confidential business information. No live payments, SARS submissions, continuous vehicle tracking, secure cloud backup or production authentication are implemented.

Sensitive data must be handled by a secured backend with encryption, company-level data isolation, role-based access, audit logs, backups and tested recovery. Tax calculations must use verified, effective-dated South African rules. Financial transfers and regulated payment features require appropriate licensed partners and compliance.

## Run locally

Open `index.html` in a browser, or serve this directory using a static web server. The first-stage shell uses plain HTML, CSS and JavaScript.

## Product principles

- Original DUMA design and workflows; no copying of Sage or other proprietary code or branding.
- Mobile-first, clear and practical.
- Build real working features in stages; never label a planned feature as live.
- One shared source of truth, with permissions enforced for every company and module.
- Never store secrets or real customer data in this public repository.
