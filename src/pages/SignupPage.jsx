import React, { useState } from 'react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required.');
      setSuccess('');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setSuccess('');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('Account created successfully!');
    console.log('Form Data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <div className="w-full max-w-md bg-gray-900 bg-opacity-75 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 animate-fadeIn">Sign Up</h2>
        <p className="text-gray-400 text-center mb-6">
          Create your account to get started.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="text-red-400 text-sm bg-red-800 bg-opacity-30 p-2 rounded-lg">
              {error}
            </div>
          )}
          {success && (
            <div className="text-green-400 text-sm bg-green-800 bg-opacity-30 p-2 rounded-lg">
              {success}
            </div>
          )}
          <div>
            <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-300 font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-400 hover:text-indigo-500 transition duration-200">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
