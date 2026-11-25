# DUMA PAYROLL

**Payroll. People. Precision.**

DUMA PAYROLL is a South African payroll and workforce-management product being built for businesses of every size. It is designed as a standalone product that can later connect securely to DUMA Business / DUMA Fleet.

## Build status

- [x] Initial responsive web-app foundation
- [x] Main payroll navigation and dashboard shell
- [ ] Secure authentication and company workspaces
- [ ] Employee records and role-based access
- [ ] Payroll calculation engine with versioned South African tax rules
- [ ] Payslip generation and employee self-service
- [ ] Leave, attendance, overtime and timesheets
- [ ] SARS reporting support and accountant access
- [ ] Secure DUMA Business integration
- [ ] Android APK packaging and release pipeline

## Important safety boundary

The current interface is a front-end preview with sample figures only. Do not enter real employee, identity, salary, tax or banking information. No production payroll calculations, SARS submissions, authentication or secure cloud storage are implemented yet. Those require a properly secured backend, tested calculations and current official SARS rules.

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server. The app uses plain HTML, CSS and JavaScript; no framework or paid service is required for this first stage.

## Product principles

- Original DUMA branding and workflows; no copying of Sage code or protected assets.
- Mobile-first, accessible and straightforward.
- Sensitive payroll data belongs on a secure backend, never in public source code or browser local storage.
- Tax rules must be effective-dated, independently tested and checked against official South African sources before production use.
