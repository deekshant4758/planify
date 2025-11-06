# 🗓️ Plainify: A Modern Calendly Alternative for Effortless Scheduling

![Next.js](https://img.shields.io/badge/Next.js-Framework-000000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-UI_Design-38B2AC?logo=tailwindcss)
![JWT](https://img.shields.io/badge/JWT-Auth_Token-FFB347?logo=jsonwebtokens)
![Clerk](https://img.shields.io/badge/Clerk-User_Authentication-6A5ACD?logo=clerk)

---

## Project Overview

**Plainify** is a clean, modern, and secure scheduling platform inspired by Calendly — built to simplify the way users create, manage, and share booking links.  
It enables professionals to schedule meetings seamlessly through interactive dashboards, secure authentication, and intuitive UI components.

Developed as part of a full-stack development project (May 2025 – August 2025), **Plainify** integrates **Next.js**, **PostgreSQL**, and **Clerk** for a complete, production-ready scheduling experience.

---

## The Challenge

Scheduling meetings across teams, clients, and time zones often leads to:
- 🔁 Endless back-and-forth emails  
- ⏰ Time clashes due to inconsistent availability  
- 🔐 Security issues with traditional booking systems  
- 🧱 Fragmented UI/UX due to disjointed tools  

These issues motivated the creation of **Plainify** — a unified, developer-friendly, and elegant scheduling alternative to existing tools.

---

## My Solution

**Plainify** bridges the gap between usability and reliability. It provides:
- 🔗 **Personalized Booking Links** – Share your availability instantly.  
- 📅 **Event Management System** – Create, update, and cancel meetings in real-time.  
- 🔐 **Secure Authentication** – Managed via **Clerk** and **JWT tokens**.  
- 🧩 **Modular Dashboards** – Intuitive UI with reusable React components.  
- 🗄️ **Database Integration** – Prisma ORM ensures smooth migrations and scalability.  

This combination results in a high-performance, scalable scheduling platform that’s easy to maintain and extend.

---

## Key Technical Components

| Component | Implementation | Impact |
|------------|----------------|---------|
| **Frontend Framework** | Next.js (App Router) + React | Lightning-fast rendering and modular structure |
| **Authentication** | Clerk + JWT | Seamless, secure user sessions |
| **Database ORM** | Prisma ORM | Schema management and migrations |
| **Database** | PostgreSQL | Reliable and relational data storage |
| **Styling** | Tailwind CSS | Responsive and consistent UI |
| **API Communication** | Axios | Efficient HTTP client for backend interaction |

---

## System Architecture

```mermaid
graph TD
A[User] --> B[Clerk Authentication]
B --> C[Next.js Frontend (App Router)]
C --> D[API Routes with JWT Validation]
D --> E[Prisma ORM]
E --> F[(PostgreSQL Database)]
C --> G[React Components + Tailwind UI]
```

---
## Project Structure

```bash

├── .env
├── .gitignore
├── actions/
│   ├── availability.js  bookings.js  dashboard.js
│   ├── events.js  meetings.js  users.js
├── app/
│   ├── (auth)/[sign-in|sign-up]/layout.js
│   ├── (main)/
│   │   ├── availability/  dashboard/  events/  meetings/
│   │   ├── layout.jsx  page.jsx
│   ├── [username]/[eventId]/
│   ├── globals.css  layout.js  page.jsx  not-found.jsx
│   └── lib/validators.js
├── components/
│   ├── ui/ (buttons, cards, inputs, etc.)
│   ├── create-event.jsx  event-card.jsx  header.jsx  user-menu.jsx
├── hooks/use-fetch.js
├── lib/ (checkUser.js, prisma.js, utils.js)
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/ (logo.png, poster.png, etc.)
├── middleware.js  next.config.mjs  tailwind.config.js
├── package.json  postcss.config.mjs  jsconfig.json
└── README.md
```
---
## 🌱 Environment Variables

Before running the project, create a `.env` file in the root directory with the following:

```bash
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/plainify"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

⚠️ **Make sure your PostgreSQL instance is running and accessible before migrating the schema.**

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/deekshant4758/planify
cd plainify
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Database
Push your Prisma schema to PostgreSQL:
```bash
npx prisma migrate dev --name init
```

(Optional) To visualize your data:
```bash
npx prisma studio
```

### 4️⃣ Run the Application

**Development Mode**
```bash
npm run dev
```
Access at 👉 [http://localhost:3000](http://localhost:3000)

**Production Build**
```bash
npm run build
npm start
```

---

## ☁️ Deployment
Plainify can be deployed effortlessly on:

- 🌐 **Vercel** (Recommended for Next.js)
- ☁️ **Render**
- 🚀 **Railway**

> 💡 Add all environment variables from your `.env` file to the respective platform’s dashboard before deployment.

---

## 🔮 Future Enhancements

- 🗓️ Calendar sync (Google / Outlook integration)  
- 📧 Automated email notifications and reminders  
- 👥 Team availability and shared calendars  
- 📊 Booking analytics dashboard  
- 🌍 Timezone-aware scheduling  

---

## 👨‍💻 Author
**Deekshant Gupta**  
_B.Tech (AIML) | Full Stack Developer_

🔗 [LinkedIn](https://www.linkedin.com/in/deekshant-gupta-986774202/)  
📧 deekshant2003@gmail.com  

---

## 🧾 License
This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute with attribution.

---

🕓 Developed **May 2025 – August 2025** as a full-stack project to create a modern, modular, and secure scheduling alternative to Calendly.
