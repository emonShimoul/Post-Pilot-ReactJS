import { useState } from "react";
import { loginUser, setCurrentUser } from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { SHA256 } from "crypto-js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setUser} = useAuth();

  const hashedInput = SHA256(password).toString();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = loginUser(email, hashedInput);

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    setCurrentUser(user);
    setUser(user); // for immediate updating the state after login
    navigate("/posts");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-3">
      <input
        className="border p-2 w-full"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-2 w-full"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-blue-500 text-white px-4 py-2 w-full">
        Login
      </button>
      <p>New user? <Link to="/register" className="text-blue-700 underline">Register</Link></p>
    </form>
  );
};

export default Login;