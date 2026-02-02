// Save user data during registration
export const registerUser = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

// Get stored user data
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Login validater
export const loginUser = (email, password) => {
  const user = getUser();

  if (!user) {
    return { success: false, message: "No user found. Please register." };
  }

  if (user.email === email && user.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    return { success: true };
  }

  return { success: false, message: "Invalid email or password" };
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("isLoggedIn");
};

// Update user data
export const updateUser = (updatedData) => {
  localStorage.setItem("user", JSON.stringify(updatedData));
};


// Check login status
export const isAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};
