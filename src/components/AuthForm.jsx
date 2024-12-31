import React, { useState } from 'react';

const AuthForm = ({ isLogin, onAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuth({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 border rounded-md shadow-lg">
      <h2 className="text-2xl mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {isLogin ? 'Login' : 'Sign Up'}
      </button>
    </form>
  );
};

export default AuthForm;
