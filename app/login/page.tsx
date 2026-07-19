"use client";

import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert(`Username: ${username}\nPassword: ${password}`);

    if (username.trim() === "admin" && password === "rt32026") {
      localStorage.setItem("admin-login", "true");
      window.location.href = "/admin";
      return;
    }

    alert("Username atau password salah");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8"
      >
        <h1 className="text-3xl font-bold text-center mb-8">
          Login Admin RT3 Digital
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded-lg px-4 py-3 mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-3 mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}