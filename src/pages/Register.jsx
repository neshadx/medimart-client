import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Context/firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const provider = new GoogleAuthProvider();

const Register = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must have uppercase, lowercase, and 6+ characters.");
      toast.error("Weak password. Check rules.");
      return;
    }

    // For simplicity, let's assume photo is uploaded to imgbb or cloudinary
    const photoURL = "https://i.ibb.co/default-profile.png"; // Replace with actual upload logic if needed

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL,
      });

      await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          photoURL,
          role,
        }),
      });

      toast.success("Account created successfully!");
      navigate("/");
    } catch (err) {
      toast.error("Registration failed");
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: "user",
        }),
      });

      toast.success("Signed up with Google!");
      navigate("/");
    } catch (err) {
      toast.error("Google sign up failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gray-100">
      <Helmet>
        <title>Register | MediMart</title>
      </Helmet>

      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-white shadow-md p-8 rounded-2xl space-y-4"
      >
        <h2 className="text-3xl font-bold text-center text-green-700">Create Account</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Photo Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          required
          className="block w-full px-4 py-[9px] text-sm text-gray-700 bg-white border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-3 right-4 cursor-pointer text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Role */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="user">User</option>
          <option value="seller">Seller</option>
        </select>

        {/* Register button */}
        <button type="submit" className="btn btn-success w-full">
          Register
        </button>

        {/* Link to login */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 font-semibold hover:underline">
            Login here
          </Link>
        </p>

        <div className="divider mt-4">OR</div>

        {/* Google Signup */}
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Register;
