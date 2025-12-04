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
      setSuccess(true);  // Show animation
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      {success && (
        <SuccessAnimation 
          message="Login Successful!"
          redirectTo="/home"
          navigate={navigate}
        />
      )}

      <div className="auth-container">
        <form onSubmit={handleLogin} className="auth-form">
          <h2>Login</h2>

          <input 
            type="email"
            placeholder="Email"
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

          <p>Don't have an account? <a href="/register">Register</a></p>
        </form>
      </div>
    </>
  );
}
