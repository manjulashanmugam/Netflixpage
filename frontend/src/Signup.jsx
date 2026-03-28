import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/signup", {
        email,
        password,
      });

      alert(res.data.message);
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Signup failed ❌");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-900">

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-red-600 blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-500 blur-3xl opacity-20 bottom-10 right-10"></div>

      <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-80 border border-white/20">

        <h1 className="text-red-500 text-4xl font-bold text-center mb-6">
          NETFLIX
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-black/60 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-black/60 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-red-600 p-3 rounded text-white hover:bg-red-700"
        >
          Sign Up
        </button>

        <p className="text-gray-300 text-sm mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-white cursor-pointer underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;