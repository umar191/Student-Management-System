# 🎓 Student Management System



A full-stack, aesthetically modern web application designed for administrators to efficiently manage student records. Built with a robust robust backend (Node.js/Express/MySQL) and a stunning frontend (Next.js/React/Tailwind CSS), featuring a fiery blue and dark black UI theme.

---

## ✨ Key Features

### 🔐 Authentication & Security
- **Secure Registration & Login:** Password hashing using `bcryptjs` and session management using JWT (JSON Web Tokens).
- **Access & Refresh Tokens:** Implements a dual-token strategy. Short-lived Access Tokens (15m) ensure high security, while Refresh Tokens (7d) provide a seamless user experience.
- **Forgot & Reset Password:** Integrated with `nodemailer` to securely email password reset links with expiring tokens using cryptographic hashes.

### 👥 Student Directory Management
- **Full CRUD Operations:** Seamlessly Create, Read, Update, and Delete student records in real-time.
- **Form Validation:** Client and server-side validation to ensure students are entered with a Full Name, Email, Course, and Admission Year.

### 🎨 Modern UI/UX Design
- **Fiery Blue & Dark Theme:** A premium, custom design utilizing deep zinc backgrounds (`#09090b`) with vivid sky-blue (`#0ea5e9`) gradients and glowing accents.
- **Framer Motion Animations:** Smooth entry cascades, spring animations, and interactive hover effects (`scale: 1.05`) on all buttons and cards.
- **Lucide React Icons:** Crisp, consistent vector icons intelligently padded (`!pl-10`) into input fields and UI elements.
- **Fully Responsive:** Adapts from mobile screens to a full-screen desktop dashboard utilizing Flexbox.

---

## 🛠️ Technology Stack

**Frontend:**
- [Next.js](https://nextjs.org/) (React Framework)
- [Tailwind CSS](https://tailwindcss.com/) (Styling & Design System)
- [Framer Motion](https://www.framer.com/motion/) (Animations)
- [Lucide React](https://lucide.dev/) (Icons)
- [Axios](https://axios-http.com/) (HTTP Client)

**Backend:**
- [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/) (Server)
- [MySQL](https://www.mysql.com/) (Relational Database)
- [Sequelize](https://sequelize.org/) (ORM)
- [JWT](https://jwt.io/) & [Bcryptjs](https://www.npmjs.com/package/bcryptjs) (Auth)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v16+ recommended).
- [MySQL Server](https://dev.mysql.com/downloads/mysql/) running locally.

### 1. Database Setup
Ensure MySQL is running. The server automatically connects to a database named `students_db` (configured for user `root` with no password by default).
*Note: Sequelize will automatically generate the `Users` and `Students` tables when the server starts.*

### 2. Backend Setup
Navigate into the backend directory and install dependencies:
```bash
cd Backend
npm install
```
Start the development server (runs on `http://localhost:5000`):
```bash
npm run dev
```

### 3. Frontend Setup
Open a **new** terminal, navigate into the frontend directory, and install dependencies:
```bash
cd frontend
npm install
```
Start the frontend application (runs on `http://localhost:3000`):
```bash
npm run dev
```

### 4. Viewing the App
Open your browser and navigate to `http://localhost:3000`. You can create a new account to access the Student Directory!

---

## 📁 Project Structure

```text
├── Backend/                 # Express.js Server
│   ├── config/              # Database connection files
│   ├── controllers/         # Logic for routes (authController, studentcontroller)
│   ├── middleware/          # JWT Verification (authMiddleware)
│   ├── models/              # Sequelize Models (User.js, Student.js)
│   └── routes/              # API Endpoints (authroutes.js, studentroutes.js)
│
└── frontend/                # Next.js Application
    ├── public/              # Static assets
    └── src/app/
        ├── globals.css      # Custom global styles and Tailwind imports
        ├── layout.tsx       # Root layout component
        ├── page.tsx         # Register Page
        ├── login/           # Login Page
        ├── forgot-password/ # Request password reset link
        ├── reset-password/  # Enter new password
        └── students/        # Main Dashboard
```

---
*Created by Umar*
