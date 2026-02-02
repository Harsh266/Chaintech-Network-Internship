import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = loginUser(email, password);

    if (result.success) {
      navigate("/account");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-2"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
          <label className="form-check-label">Show Password</label>
        </div>

        <button className="btn btn-success w-100">Login</button>
      </form>

      <p className="mt-3">
        New user? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
