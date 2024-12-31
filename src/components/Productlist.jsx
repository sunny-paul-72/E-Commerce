import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-lg transition duration-300 group-hover:opacity-80"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-100">{product.name}</h2>
              <p className="text-gray-400 mt-2">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
