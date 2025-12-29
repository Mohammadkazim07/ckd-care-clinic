import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API =
  process.env.REACT_APP_API_URL || "https://ckd-care-clinic.onrender.com";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        `${API}/api/admin/login`,
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-3">{error}</p>
        )}

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full p-3 border rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-6"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
