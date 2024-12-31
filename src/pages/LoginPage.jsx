import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation logic
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    console.log('Login successful!', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-gray-900 bg-opacity-70 p-8 rounded-xl shadow-xl w-full max-w-md transform transition hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-white mb-4 animate-pulse">
          Login
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Access your account with ease.
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="text-red-400 text-sm text-center bg-red-800 bg-opacity-30 rounded-lg p-2">
              {error}
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-300 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Don’t have an account?{' '}
            <a href="/signup" className="text-indigo-400 hover:text-indigo-500 transition duration-200">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
