# Project Requirements: AI Prompt Sharing & Marketplace Platform

**Project Code:** A10_CAT-0017  
**Platform Objective:** An AI Prompt Sharing & Marketplace Platform allowing users to discover, create, bookmark, review, and manage AI prompts for ChatGPT, Gemini, Claude, Midjourney, etc. Features role-based access control, prompt moderation, analytics dashboards, search & filtering, Stripe payment, and administrative management.

---

## 1. Tech Stack & Architecture
- **Frontend (`/client`):** Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, Recharts, React Toastify, Stripe SDK
- **Backend (`/server`):** Node.js, Express, MongoDB (Native Driver / MongoClient), JWT Authentication, Stripe API, Morgan, CORS, Dotenv

---

## 2. Key Criteria & Guidelines
- **Commit History:** At least 20 meaningful commits on client & at least 12 meaningful commits on server.
- **Security:** Environment variables for MongoDB credentials, JWT secret, Stripe keys, and frontend config.
- **Reload Stability:** Logged-in user must not redirect to login on page refresh; no route reload crashes.
- **Server-Side Logic:** Server-side search, filter, sorting, and pagination (min 2 pages).
- **Aggregation:** At least one feature implemented with MongoDB Aggregation Pipeline.
- **Design:** Recruiter-friendly modern SaaS UI, responsive (Mobile, Tablet, Desktop), consistent typography, proper spacing, modern cards, and Framer Motion animations.

---

## 3. Authentication & Roles (RBAC)
- **Roles:** `User`, `Creator`, `Admin`
- **Registration:** Name, Email, PhotoURL, Password
- **Login:** Email/Password JWT authentication
- **Social Login:** Google OAuth (default role assigned as `User`)
- **Middleware:** Verify JWT and enforce role-based access on private/admin routes.

---

## 4. Pages & Routes Structure

### Public Pages
1. **Home Page (`/`)**:
   - **Navbar:** Logo, Brand Name, Links (Home, All Prompts), Auth buttons (Login, Register), Dashboard & Logout (when logged in).
   - **Hero/Banner:** Modern SaaS AI hero section with search bar, random trending prompt tags, CTA button, Framer Motion.
   - **Featured Prompts:** 6 featured/trending prompts (`cursor.limit(6)`). If guest -> redirects to login on "View Details"; if logged in -> goes to Prompt Details.
   - **Why Choose Us:** Platform benefits showcase.
   - **Top Creators:** Dynamically loaded top creators.
   - **Customer Reviews:** Dynamic review cards with Framer Motion.
   - **Extra Sections:** At least 2 additional relevant sections.
   - **Footer:** Links, branding, copyright.

2. **All Prompts Page (`/prompts`)**:
   - Display public approved prompts.
   - **Prompt Cards:** Title, Category, AI Tool, Copy Count, Creator Name, View Details button.
   - **Server-side Search:** By Title, Tags, AI Tool.
   - **Server-side Filters:** By Category, AI Tool, Difficulty.
   - **Server-side Sorting:** Most Popular (rating), Most Copied, Latest.
   - **Pagination:** Backend-driven pagination.

### Private Pages
3. **Prompt Details Page (`/prompts/:id`)**:
   - Details: Title, Description, Prompt Content, Category, Tags, AI Tool, Difficulty (Beginner / Intermediate / Pro), Usage Instructions, Creator Info, Copy Count, Reviews & Ratings.
   - **Public vs Private (Premium) visibility:**
     - **Public:** Full content visible to logged-in users.
     - **Private (Premium):** Locked/blurred content, copy & review disabled, "Subscribe to Premium" button redirecting to Stripe payment. (Full content unlocked if user has active premium subscription).
   - **Interactions:**
     - **Bookmark Prompt:** Toggle state, prevent duplicate in DB, toast notification.
     - **Copy Prompt:** Copy to clipboard, increment `copyCount`, toast notification.
     - **Review System:** Star rating + comment (Name, Email, Rating, Date, Comment).
     - **Report Prompt Modal:** Reason dropdown (Inappropriate, Spam, Copyright, etc.) + description.

4. **Payment Page (`/payment` or `/subscribe`)**:
   - Stripe integration for one-time **$5** Premium access.
   - Displays plan perks, price, secure checkout.
   - On success: Update user to `Premium`, record transaction (ID, email, amount, date), grant access to private prompts, redirect back.

---

## 5. Dashboards

### A. User Dashboard
- **Add Prompt:** Title, Description, Content, Category, AI Tool, Tags, Difficulty, Thumbnail, Visibility (`Public` / `Private`), `copyCount: 0`, `status: "pending"`. *(Free users limited to 3 prompts)*.
- **My Prompts:** Table of user's prompts with Update, Delete, View Analytics.
- **Saved Prompts:** List of bookmarked prompts with Remove Bookmark, View Details.
- **My Reviews:** List of all reviews submitted by the user.
- **Profile:** Name, Email, Photo, Role, Total Prompts, Subscription badge (`Free` / `Premium`), "Upgrade to Premium" button if free.

### B. Creator Dashboard
- **Creator Analytics Home:** Summary cards (Total Prompts, Total Copies, Total Bookmarks) + Recharts (Total Copies, Prompt Growth).
- **Add Prompt:** Same submission form with pending status for admin moderation.
- **My Prompts:** Table of creator prompts with Update & Delete functionality.

### C. Admin Dashboard
- **All Users:** Table with role management (`user` / `creator` / `admin`) and Delete User.
- **All Prompts:** Table with Approve, Reject (with required feedback), Delete, and Feature Prompt actions.
- **All Payments:** Tabular view of all Stripe transactions.
- **Reported Prompts:** Review reported prompts with actions: Remove Prompt, Warn Creator, Dismiss.
- **Analytics Overview:** Total Users, Total Prompts, Total Reviews, Total Copies.

---

## 6. Extra UI & Edge Cases
- Loading Skeleton & Spinners
- Custom 404 & Error Page
- Responsive Sidebar & Navigation
