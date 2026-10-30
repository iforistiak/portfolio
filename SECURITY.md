# Security Policy & Code Protection Specification

## Security Level: Tier-4 Strict Proprietary & Hardened Architecture

**Owner:** Md. Istiak Islam (`iforistiak@gmail.com`)  
**Repository Status:** Protected & Proprietary — All Rights Reserved

### 1. Active Security Controls
- **XSS & Injection Prevention:** All dynamic DOM rendering passes through strict HTML entity escaping (`escapeHtml`) and protocol whitelist verification (`https:` / `http:` only).
- **HTTP Security Headers:** Server responses enforce `X-Content-Type-Options: nosniff`, `X-XSS-Protection: 1; mode=block`, `Referrer-Policy: strict-origin-when-cross-origin`, and strict `Permissions-Policy`.
- **External Link Isolation:** All outbound links enforce `rel="noopener noreferrer"` to prevent `window.opener` tabnabbing.
- **Anti-Copy & Asset Protection:** Client-side protection blocks unauthorized image dragging, right-click context scraping, page saving (`Ctrl+S`), and source inspection shortcuts (`Ctrl+U`, `F12`, `Ctrl+Shift+I`).
- **Form Submission Rate Guard:** Appointment and newsletter forms validate email syntax and enforce submission cooldowns to prevent automated spam.

### 2. Usage & Licensing Restrictions
This project is governed by a **Proprietary All-Rights-Reserved License** (see [`LICENSE`](./LICENSE)):
- **No Unauthorized Copying:** Do not copy, clone, or redistribute any code or images without written permission.
- **No Business or Corporate Use:** Strictly prohibited for commercial, corporate, agency, or client deployments.
- **No Practice Replication:** Do not clone or republish this codebase for personal practice or template sharing.

### 3. Reporting a Vulnerability
If you discover a security issue, please report it privately to **iforistiak@gmail.com**.
