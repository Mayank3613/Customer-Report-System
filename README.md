# Smart Customer Report & Insight System

A comprehensive MERN Stack application for managing customer complaints, logging interactions, tracking audit trails, and generating AI-driven risk insights.

## Project Overview

This system allows businesses to track customer issues, manage comprehensive customer profiles, log all interactions, and automatically calculate customer risk scores based on their activity and complaint history. It features a complete role-based access control system for Admins, Managers, and Staff.

## Key Features

- **Role-Based Access Control**: Secure login and protected routes for Admin, Manager, and Staff using JWT.
- **Customer Management**: 360-degree view of customers, including Health Scores, LTV (Lifetime Value), and MRR (Monthly Recurring Revenue).
- **Complaint Reporting**: Staff can file reports; Managers/Admins can view and filter them with SLA violation tracking.
- **Smart Insights (Unique Feature)**:
    - Automated Risk Scoring (Low, Medium, High).
    - Rule-based logic (e.g., critical health score, > 3 complaints, > 30 days inactivity).
    - Auto-generated recommendations and risk factors.
- **Interaction & Audit Logging**: Extensive tracking of all customer touchpoints (calls, emails, meetings) and system-wide administrative actions for compliance.
- **Interactive Dashboard**: Visual charts and graphs for data analysis (Risk Distributions, Report Statuses).
- **Responsive Design**: Modern glassmorphism UI with Sidebar navigation and global search.

## Tech Stack

- **Frontend**: React.js, React Router, Context API, Chart.js, jsPDF/xlsx (for exports)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcryptjs
- **Styling**: Custom CSS (Glassmorphism, No external UI libraries)

## Setup Instructions

1.  **Clone the repository** (if applicable) or unzip the project.
2.  **Install Backend Dependencies**:
    ```bash
    npm install
    ```
3.  **Install Frontend Dependencies**:
    ```bash
    cd client
    npm install
    cd ..
    ```
4.  **Environment Variables**:
    Create a `.env` file referencing the provided `.env.example`:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000
    SMTP_HOST=your_smtp_host (optional)
    ```
5.  **Database Seeding (Optional)**:
    To populate the database with sample data, run:
    ```bash
    node seed.js
    ```
6.  **Run the Application**:
    ```bash
    npm run dev
    ```
    This command starts both the Backend (Port 5000) and Frontend (Port 3000) concurrently.

## API Endpoints (Highlights)

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Register new user | Public |
| **POST** | `/api/auth/login` | Login user | Public |
| **GET** | `/api/customers` | Get all customers | Admin/Manager/Staff |
| **GET** | `/api/reports` | Get all reports | Admin/Manager/Staff |
| **POST** | `/api/insights/generate`| Generate Risk Scores | Admin/Manager |
| **GET** | `/api/audit` | Get system audit logs| Admin |
| **GET** | `/api/interactions/:customerId`| Get customer touchpoints| Admin/Manager/Staff |

## Smart Logic Rule

- **Critical Risk**: Health Score < 50 OR >= 1 Critical Report (Unresolved)
- **High Risk**: Health Score < 70 OR >= 3 Open Reports
- **Medium Risk**: Inactivity > 30 days OR >= 1 Open Report
- **Low Risk**: Default

---
**Developed for College Submission**
