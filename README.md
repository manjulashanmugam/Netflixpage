# 🎬 Netflix Login Page Clone (Full Stack)

A simple **Netflix-style Login & Signup Web App** built using **React (Frontend)** and **Node.js + Express (Backend)** with basic authentication.

---

## 🚀 Features

* 🔐 User Signup & Login
* ✅ Form Validation (Frontend)
* 🔄 API Integration using Axios
* 🧠 Mock Authentication (Backend)
* 🎯 Redirect to Dashboard after Login
* 🎬 Netflix-style UI with Tailwind CSS
* 📱 Fully Responsive Design

---

## 🛠️ Tech Stack

### Frontend:

* React (Vite)
* Tailwind CSS
* Axios
* React Router DOM

### Backend:

* Node.js
* Express.js
* CORS
* Body-parser

---

## 📁 Project Structure

```
week11_project/
│
├── frontend/       # React App (UI)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/        # Express Server
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/netflix-login-clone.git
cd netflix-login-clone
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
node index.js
```

👉 Server runs on: `http://localhost:5000`

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
npm run dev
```

👉 App runs on: `http://localhost:5173`

---

## 🔗 API Endpoints

### 📌 Signup

```
POST /signup
```

### 📌 Login

```
POST /login
```

---

## 🔐 Authentication Logic

* Users signup using email & password
* Data stored in backend (mock/static)
* Login checks credentials
* On success → Redirect to Dashboard
* On failure → Error message shown

---

## 🎨 UI Design

* Inspired by Netflix Login Page
* Gradient background + Glassmorphism effect
* Hover animations for better UX
* Movie dashboard with posters

---

## 📦 Deployment

* Frontend deployed using **Vercel**
* Fixes applied:

  * Correct Root Directory (`frontend`)
  * Added `vercel.json` for routing
  * Fixed MIME & 404 errors

---

## ⚠️ Known Issues

* No database (uses mock data)
* Backend not deployed (local only)

---

## 📌 Future Improvements

* 🔗 Connect to MongoDB
* 🔐 Add JWT Authentication
* 🌐 Deploy backend (Render / Railway)
* 👤 User Profile Page

---

## 🙌 Author

**Manjula**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
