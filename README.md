# 🧠 AI Resume Builder (MERN Stack)

An **AI-powered Resume Builder** that helps users create professional, ATS-friendly resumes with intelligent rewriting, smart design suggestions, and real-time previews.

Built using the **MERN stack** with secure authentication, AI integration, and performance-focused architecture.

---

## 🚀 Features

- **AI Resume Rewriting**

  - Improves bullet points using action verbs, metrics, and ATS keywords
  - Suggests missing skills based on job-ready resumes

- **Smart Resume Design**

  - Auto-suggested layouts based on profession
  - Multiple clean, ATS-safe templates

- **Live Preview**

  - Real-time resume updates while editing

- **Image Upload**

  - Secure profile photo upload with compression (ImageKit)

- **Privacy Control**

  - Toggle resume visibility (Public / Private)
  - Revoke shared links anytime

- **Export & Share**
  - One-click PDF download
  - Shareable resume links

---

## 🧩 Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication

### AI & Media

- OpenAI / Gemini API
- ImageKit

### Deployment

- Vercel

---

## 🏗️ Architecture Overview

- MERN-based full-stack application
- Server-side AI rewriting
- Secure resume data storage
- Stateless JWT authentication
- Optimized rendering for fast performance

---

## 📁 Project Structure

AI-Resume-Builder/
│
├── client/ # React frontend
├── server/ # Node + Express backend
├── README.md

---

## 🔐 Environment Variables

### 📌 Server (`server/.env.example`)

```env
MONGODB_URI="MONGODB_URI"
JWT_SECRET="JWT_SECRET_TOKEN"

IMAGEKIT_PRIVATE_KEY=

OPENAI_API_KEY=
OPENAI_BASE_URL="https://generativelanguage.googleapis.com/v1beta/openai/"
OPENAI_MODEL="gemini-2.5-flash"

MONGODB_URI="MONGODB_URI"
JWT_SECRET="JWT_SECRET_TOKEN"

IMAGEKIT_PRIVATE_KEY=

OPENAI_API_KEY=
OPENAI_BASE_URL="https://generativelanguage.googleapis.com/v1beta/openai/"
OPENAI_MODEL="gemini-2.5-flash"
```

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/harsh-gohil-129/AI-Resume-Builder.git
cd AI-Resume-Builder

2️⃣ Setup Backend (Server)

cd server
npm install

cp .env.example .env

npm run dev


3️⃣ Setup Frontend (Client)

Open a new terminal:

cd client
npm install


Create a .env file using the example:

cp .env.example .env
## 📁 Project Structure

```
