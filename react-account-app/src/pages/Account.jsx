import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, updateUser, logoutUser } from "../services/authService";

function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUser = getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser(user);
    setMessage("Account updated successfully");
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>My Account</h2>

      {message && <p className="text-success">{message}</p>}

      <form onSubmit={handleUpdate}>
        <input
          className="form-control mb-3"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          type={showPassword ? "text" : "password"}
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
          <label className="form-check-label">Show Password</label>
        </div>

        <button className="btn btn-primary w-100 mb-3">
          Update Account
        </button>
      </form>

      <button className="btn btn-danger w-100" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Account;
    