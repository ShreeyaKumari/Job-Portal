# Job Portal Platform

A full-stack job portal built using the MERN stack that enables seamless interaction between job seekers and recruiters. The platform focuses on secure authentication, efficient application management, and a scalable architecture.

---

## 📌 Overview
This project demonstrates a scalable full-stack architecture using the MERN stack, focusing on secure authentication, role-based access control, and efficient job application workflows.

---

<img width="1849" height="878" alt="Screenshot 2026-04-30 020341" src="https://github.com/user-attachments/assets/be86e5db-6008-4d50-8500-9cff57d53485" />

<img width="1869" height="891" alt="Screenshot 2026-04-30 020423" src="https://github.com/user-attachments/assets/43a12914-f1d9-4baa-b438-f714c662fbd6" />

<img width="685" height="911" alt="Screenshot 2026-04-30 020432" src="https://github.com/user-attachments/assets/38de616d-eff5-4e44-8c46-7f3500a5fa5d" />



## 🚀 Live Demo

- **Frontend**: https://jobprotalfirst-git-main-shreeyakumaris-projects.vercel.app/  
- **Backend API**: https://job-portal-hgvq.onrender.com  

---

## 📌 Features

### 👤 Job Seekers
- User authentication (admin-controlled access)
- Profile creation and management
- Upload and manage profile images (auto-optimized)
- Search and filter job listings
- Track job application status in real time
- Bookmark jobs *(partially implemented)*

### 🏢 Recruiters
- Company profile creation and management
- Candidate application tracking and filtering
- Dashboard for managing job postings and applications
- Candidate search *(in progress)*

---

## ⚙️ Technical Highlights

- Role-based access control (RBAC)
- Secure authentication using JWT and httpOnly cookies
- CSRF protection for enhanced security
- Cloud-based image storage with automatic optimization
- Real-time application status updates
- Modular and scalable backend architecture
- Comprehensive error handling and validation
- API testing support using Postman

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Redux Toolkit  
- React Router  
- Axios  
- CSS3  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT Authentication  
- Multer (file uploads)  
- Cloudinary (image storage)

### Deployment & Tools
- Vercel (Frontend)  
- Render (Backend)  
- Git & GitHub  
- Postman  

---

## 📦 Getting Started

### Prerequisites
- Node.js (v14 or higher)  
- MongoDB (local or cloud)  
- Cloudinary account  

---

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/ShreeyaKumari/Job-Portal.git
cd Job-Portal
```
2. Install dependencies
# Backend
cd backend
npm install
# Frontend
cd ../frontend
npm install
3. Environment Variables
PORT=3000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
4. Run the Application
# Backend
npm start
# Frontend
npm run dev
---
