**EduFlex** is a modular, scalable, and multilingual web-based Learning Management System (LMS) built with a full-stack JavaScript architecture. It is designed to empower admins, instructors, and students with comprehensive tools for course management, assessments, and collaboration.

---

## 📦 Table of Contents

1. [Tech Stack](#-tech-stack)  
2. [Features](#-features)  
   1. Student  
   2. Instructor  
   3. Admin  
3. [Getting Started](#-getting-started)  
   1. Prerequisites  
   2. Local Setup  
   3. Running Application  
4. [Architecture & Data Model](#-architecture--data-model)  
5. [Internationalization](#-internationalization)  
6. [Testing](#-testing)  
7. [Deployment](#-deployment)  
8. [Contributing](#-contributing)  
9. [License](#-license)

---

### 🛠 Tech Stack

- **Frontend**: React, Context API, React Router, Tailwind CSS  
- **Backend**: Node.js, Express.js, RESTful API  
- **Database**: PostgreSQL (via Knex or Sequelize ORM)  
- **Authentication & Authorization**: JWT with role-based access control  
- **Forms & Validation**: Formik + Yup  
- **Internationalization**: react-i18next  
- **Testing**: Jest, React Testing Library, Supertest  
- **Deployment**: Docker, CI/CD pipelines (GitHub Actions), deployable to Heroku, Vercel, or AWS  

---

### ✅ Features

#### 1. Student Portal
- Registration and login with secure auth  
- Course browsing, enrollment, and filtering  
- Lesson viewing and marking as completed  
- Submit assignments and take quizzes  
- Real-time grade tracking and feedback  

#### 2. Instructor Dashboard
- Create/manage courses, modules, and lessons  
- Add assignments, quizzes, and rich content  
- Review student submissions and give feedback  
- Analyze student engagement and performance  
- Post announcements and send notifications  

#### 3. Admin Panel
- Manage users, roles, and permissions  
- Moderate platform-wide content and reports  
- Configure global site settings and localization  
- System logs, audit trails, and platform health  
- Manage translation files and language settings  

---

### 🚀 Getting Started

#### 1. Prerequisites

- Node.js v16+  
- PostgreSQL v12+  
- (Optional) Docker & Docker Compose  

#### 2. Local Setup

```bash
git clone https://github.com/Sewar77/EduFlex.git
cd EduFlex
````

Copy env files and configure:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

Populate with your DB credentials, JWT secrets, and API URLs.

Install dependencies:

```bash
cd server && npm install
cd ../client && npm install
```

Initialize the database:

```bash
cd server
npx sequelize db:create
npx sequelize db:migrate
```

#### 3. Running the Application

**Backend (Express API):**

```bash
cd server
npm run dev      # local development
npm start        # production build
```

**Frontend (React app):**

```bash
cd client
npm start        # open at http://localhost:3000
```

**Optional: Docker**

```bash
docker-compose up --build
```

---

### 🏛 Architecture & Data Model

* Layered structure: `routes → controllers → services → models`
* Centralized auth and validation middleware
* PostgreSQL with normalized schema and referential integrity
* RESTful API with protected routes and role checks

**Use Case Flow:**

* Student enrolls → takes lessons → submits assignments/quizzes
* Instructor creates materials → reviews student activity → assigns grades
* Admin configures roles, monitors activity, and manages platform state

*Visual ERD included in `/docs/ERD.png`*

---

### 🌍 Internationalization

* Powered by `react-i18next`
* Language files in `client/src/locales/[en|ar]/translation.json`
* RTL support built-in using Tailwind and dynamic layout handling

**To add a language:**

1. Create a new folder in `/locales/`
2. Add translation keys in `translation.json`
3. Register it inside `i18n.js`
4. Admin can enable/disable it via the dashboard

---

### 🧪 Testing

Run all tests:

```bash
cd server && npm test
cd ../client && npm test
```

* **Backend**: Auth, validation, endpoints (Supertest + Jest)
* **Frontend**: Component rendering, forms, state flows (Jest + React Testing Library)

---

### ☁️ Deployment

**Docker (recommended)**

```bash
docker build -t eduflex-backend ./server
docker build -t eduflex-frontend ./client
docker-compose up
```

**CI/CD (GitHub Actions)**

* Set environment variables (`JWT_SECRET`, `DATABASE_URL`, etc.)
* Workflow steps:

  * Build Docker images
  * Run backend & frontend tests
  * Deploy to platform (e.g., Heroku, AWS, or Vercel)

---

### 🤝 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit with clear messages
5. Submit a Pull Request for review

Ensure code follows ESLint and Prettier formatting.

---

### 📜 License

EduFlex is open-source under the **MIT License** – see [LICENSE](./LICENSE).

---

### 📝 Contact

Developed by **Sewar Jihad Shorman ([@Sewar77](https://github.com/Sewar77))**
📧 Email: [sewarjihad793@gmail.com](mailto:sewarjihad793@gmail.com)

---

