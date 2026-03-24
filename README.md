# Smart Customer Report & Insight System

A comprehensive MERN Stack application for managing customer complaints and generating AI-driven risk insights.

## Project Overview

This system allows businesses to track customer issues, manage reports, and automatically calculate customer risk scores based on their activity and complaint history. It features a complete role-based access control system for Admins and Staff.

## Key Features

- **Role-Based Authentication**: Secure login for Admin and Staff using JWT.
- **Customer Management**: Add, edit, and delete customer records.
- **Complaint Reporting**: Staff can file reports; Admins can view and filter them.
- **Smart Insights (Unique Feature)**:
    - Automated Risk Scoring (Low, Medium, High).
    - Rule-based logic (e.g., > 3 complaints = High Risk).
    - Auto-generated recommendations.
- **Interactive Dashboard**: Visual charts and graphs for data analysis.
- **Responsive Design**: Modern UI with Sidebar navigation.

## Tech Stack

- **Frontend**: React.js, React Router, Context API, Chart.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcryptjs
- **Styling**: Custom CSS (No external UI libraries)

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
    Ensure the `.env` file in the root directory contains:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```
5.  **Run the Application**:
    ```bash
    npm run dev
    ```
    This command will start both the Backend (Port 5000) and Frontend (Port 3000) concurrently.

## API Endpoints

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Register new user | Public |
| **POST** | `/api/auth/login` | Login user | Public |
| **GET** | `/api/customers` | Get all customers | Admin/Staff |
| **POST** | `/api/customers` | Create customer | Admin/Staff |
| **GET** | `/api/reports` | Get all reports | Admin/Staff |
| **POST** | `/api/reports` | Create report | Admin/Staff |
| **POST** | `/api/reports/insights/generate` | Generate Risk Scores | Admin |

## Smart Logic Rule

- **High Risk**: > 3 Complaints
- **Medium Risk**: Inactive for > 30 days
- **Low Risk**: Default

---
**Developed for College Submission**
