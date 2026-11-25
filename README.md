# DUMA BUSINESS

**One platform. Every industry. Every department.**  
**Built for Africa. Ready for the world.**

DUMA BUSINESS is planned as one modular operating platform for businesses, institutions and public organisations. It shares a common identity, organisation, permissions, documents, workflow, reporting and security foundation, with specialised industry editions.

## Master platform modules

- DUMA Command Centre
- DUMA AI
- DUMA Money & Accounting
- DUMA Payroll & HR
- DUMA Retail & POS
- DUMA Stock & Procurement
- DUMA CRM & Customers
- DUMA Fleet
- DUMA Freight & Logistics
- DUMA Projects & Contracts
- DUMA Documents
- DUMA Intelligence & Business Radar
- DUMA Education
- DUMA Health administration
- DUMA Municipal
- DUMA Agriculture
- DUMA Hospitality
- DUMA Assets & Maintenance
- DUMA Marketplace & Staff Marketplace
- DUMA Communications & Training Academy
- DUMA Security & Core Lock
- DUMA Open API & Integrations
- DUMA Global
- DUMA Automation & Voice
- DUMA Customer & Employee Portals

## Industry editions

Retail/wholesale, professional services, transport/logistics, education, healthcare administration, municipal/government, agriculture, construction/engineering, hospitality/food, manufacturing and non-profit organisations.

## Pricing direction

- Starter: R0
- Growth: R99/month
- Professional: R299/month
- Enterprise: custom
- Planned seven-day Professional trial. No automatic charge without explicit consent.

Pricing, module entitlements, AI allowances and operational costs must be validated before commercial launch.

## Android build

This repository uses Capacitor 7 and GitHub Actions to build a debug APK.

1. Open the **Actions** tab in GitHub.
2. Select **Build DUMA Android APK**.
3. Select **Run workflow** if it is not already running automatically.
4. Open the completed run and download the `DUMA-Android-APK` artifact.

The artifact is a debug APK for testing, not a signed Play Store release.

## Current status and important limitations

The current app is a navigable front-end foundation and Android packaging project. The module catalogue and industry editions are represented in the app, but the modules are not yet connected to production services.

Not implemented or verified yet: production authentication, tenant-isolated cloud database, server-enforced role permissions, payroll calculations, SARS submissions, live payment processing, production DUMA AI, municipal integrations, medical/clinical records, continuous GPS, cloud backup, marketplace transactions and external API integrations.

Do not enter real employee, identity, salary, banking, medical, tax, customer or other confidential data into this preview.

## Security principles

DUMA CORE LOCK is a planned layered security architecture, not a guarantee against every attack. It will require MFA, least privilege, server-side authorisation, tenant isolation, encryption, protected branches, reviewed releases, dependency scanning, audit logs, monitored integrations, encrypted backups, tested restoration and independent security testing. No software can promise zero cyber risk.

## Development principles

- Build one shared platform, not disconnected duplicate apps.
- Keep industry editions configurable and role-aware.
- Enforce access permissions on the server, never only in the interface.
- Keep sensitive actions behind approval and confirmation.
- Mark planned capabilities honestly until implemented and tested.
- Do not store secrets or production data in this public repository.
