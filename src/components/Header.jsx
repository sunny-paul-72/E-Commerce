import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  return (
    <header className="w-full bg-gradient-to-r from-darkGradient-200 to-darkGradient-300 text-gray-100 py-4 px-6 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold hover:text-indigo-400 transition duration-300">
        E-Commerce
      </Link>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-indigo-400 transition duration-300">
          Home
        </Link>
        <Link to="/cart" className="hover:text-indigo-400 transition duration-300">
          Cart ({cartCount})
        </Link>
        <Link to="/login" className="hover:text-indigo-400 transition duration-300">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
