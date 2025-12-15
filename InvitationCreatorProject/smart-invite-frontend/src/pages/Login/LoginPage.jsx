import { useState } from "react";
import { loginUser } from "../../api";
import SuccessAnimation from "../../components/SuccessAnimation";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await loginUser({ email, password });

    if (result && result.userId) {
      localStorage.setItem("user", JSON.stringify(result));
      setSuccess(true);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      {success && (
        <SuccessAnimation
          message="Login Successful!"
          redirectTo="/dashboard"
          navigate={navigate}
        />
      )}

      <div className="auth-container">
        <div className="auth-card">

          {/* LEFT IMAGE */}
          <div className="auth-image login-image"></div>

          {/* RIGHT FORM */}
          <form onSubmit={handleLogin} className="auth-form">
            <h2>Welcome Back</h2>
            <p className="subtitle">Login to manage your invitations</p>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>

            <p className="switch">
              Don’t have an account? <a href="/register">Register</a>
            </p>
          </form>

        </div>
      </div>
    </>
  );
}
