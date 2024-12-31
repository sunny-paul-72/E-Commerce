import React, { useState } from 'react';
import 'animate.css'; // Import Animate.css for animations

const CheckoutPage = ({ cart = [] }) => {
  // State for billing and shipping information
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'USA',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a form submission (you can replace this with an API call)
    setTimeout(() => {
      alert('Checkout successful!');
      setIsSubmitting(false);
    }, 2000);
  };

  // Calculate total price
  const calculateTotal = () => {
    console.log('Cart:', cart); // Add debugging to inspect cart content

    // Ensure price and quantity are being handled correctly
    const total = cart?.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '')); // Remove '$' from price and convert to number
      console.log('Price:', price, 'Quantity:', item.quantity); // Debugging price and quantity

      return total + price * item.quantity; // Accumulate total
    }, 0);

    return total?.toFixed(2) || 0; // Return total rounded to 2 decimal places
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center animate__animated animate__fadeIn animate__delay-1s">Checkout</h1>

      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-2s">
        <form onSubmit={handleSubmit}>
          {/* Billing Information */}
          <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="text-lg">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
                required
              />
            </div>
          </div>

          {/* Shipping Information */}
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="address" className="text-lg">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="text-lg">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="zipCode" className="text-lg">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="country" className="text-lg">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
                required
              >
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                {/* Add other countries as needed */}
              </select>
            </div>
          </div>

          {/* Order Summary */}
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="mb-6">
            <p className="text-lg">Total: ${calculateTotal()}</p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
