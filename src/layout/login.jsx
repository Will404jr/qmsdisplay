import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { UserIcon, LockClosedIcon } from "@chadcn/ui-icons";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/login-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content"),
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect or handle success
        navigate("/dashboard");
      } else {
        // Handle errors
        setError(data.message || "An error occurred");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded">
            <p>{error}</p>
            <button
              type="button"
              className="text-red-600 float-right"
              onClick={() => setError(null)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
            Octech
          </h2>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email / Username
            </label>
            <div className="relative">
              {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <UserIcon />
              </span> */}
              <input
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 pl-10 pr-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <LockClosedIcon />
              </span> */}
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 pl-10 pr-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
