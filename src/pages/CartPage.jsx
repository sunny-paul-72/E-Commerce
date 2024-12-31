import React from 'react';

const CartPage = ({ cart, removeFromCart }) => {
  // Check if removeFromCart function is passed
  if (!removeFromCart) {
    console.error('removeFromCart function is missing.');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96">
          <p className="text-gray-400 text-lg">Your cart is empty. 😞</p>
          <a
            href="/"
            className="mt-6 px-6 py-2 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                {/* Product Image */}
                <img
                  src={item.imageUrl} // Make sure the imageUrl field exists
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-4 flex-grow">
                  {/* Product Name */}
                  <h2 className="text-lg font-bold">{item.name}</h2>

                  {/* Product Price */}
                  <p className="text-gray-400 mt-1">
                    Price: ${parseFloat(item.price.replace('$', '')).toFixed(2)}
                  </p>

                  {/* Product Quantity */}
                  <p className="text-gray-400 mt-1">Quantity: {item.quantity}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)} // Ensure item.id is being passed correctly
                  className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Proceed to Checkout Button */}
          <div className="mt-8 text-center">
            <a
              href="/checkout"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              Proceed to Checkout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
