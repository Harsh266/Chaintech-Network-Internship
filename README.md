# React Account Management Application

This project is a React-based account management application developed as part of the **React Internship Practical Task (PR: REACTIIP01002)**.

The application allows users to register, log in, view, and update their account details.  
It uses client-side storage to simulate authentication and user management.

---

## 🌐 Live Demo

🔗 **Deployed on Vercel:**  
https://chaintech-network-internship.vercel.app

---

## 🚀 Features

- User Registration
- User Login
- Protected Account Page
- View & Update Account Information
- Password Update Support
- Show / Hide Password functionality
- Logout functionality
- Basic form validation
- Graceful error handling

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **Tailwind CSS** (latest version)
- **JavaScript (ES6)**
- **LocalStorage** (for demo authentication)

---

## 📁 Project Structure

├── components/
│ └── ProtectedRoute.jsx
│
├── pages/
│ ├── Login.jsx
│ ├── Register.jsx
│ └── Account.jsx
│
├── services/
│ └── authService.js
│
├── App.css
├── App.jsx
└── index.css
└── main.jsx

---

## ⚙️ Installation & Setup

1. Clone the repository: https://github.com/Harsh266/Chaintech-Network-Internship

2. Navigate to the project directory: cd chaintech-network-internship

3. Install dependencies: npm i

4. Start the development server: npm run dev

The application will run on:
http://localhost:5173


---

## 🔐 Authentication Logic

- User data is stored in **localStorage**
- Login status is tracked using an `isLoggedIn` flag
- Protected routes prevent unauthorized access
- Password updates overwrite the existing stored password
- This setup is used **only for demonstration purposes**

---

## 🧪 How to Use

1. Register a new user account
2. Log in using registered credentials
3. Access the protected Account page
4. Update name, email, or password
5. Use show/hide password for better usability
6. Logout to end the session

---

## ❗ Notes

- No backend is used
- No real authentication or encryption is implemented
- This project focuses on React fundamentals and logic clarity
- Designed for internship evaluation and learning purposes

---

## 📌 Evaluation Criteria Covered

✔ Functionality  
✔ Code organization and readability  
✔ Error handling  
✔ Simple and maintainable logic  
✔ Clear documentation  

---

## 👤 Author

**Harsh Vekariya**  
React Intern Applicant  

---

## 📄 License

This project is created for educational and evaluation purposes only.
