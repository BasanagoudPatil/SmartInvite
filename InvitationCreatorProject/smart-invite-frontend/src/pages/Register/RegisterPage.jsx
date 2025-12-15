import { useState } from "react";
import { registerUser } from "../../api";
import SuccessAnimation from "../../components/SuccessAnimation";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const result = await registerUser({ name, email, password });

    if (result?.message === "User registered successfully") {
      setSuccess(true);
    } else {
      alert("Registration failed!");
    }
  };

  return (
    <>
      {success && (
        <SuccessAnimation
          message="Registration Successful!"
          redirectTo="/login"
          navigate={navigate}
        />
      )}

      <div className="auth-container">
        <div className="auth-card">

          {/* LEFT FORM */}
          <form onSubmit={handleRegister} className="auth-form">
            <h2>Create Account</h2>
            <p className="subtitle">Start designing smart invitations</p>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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

            <button type="submit">Register</button>

            <p className="switch">
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>

          {/* RIGHT IMAGE */}
          <div className="auth-image register-image"></div>

        </div>
      </div>
    </>
  );
}
