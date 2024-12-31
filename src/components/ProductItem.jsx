import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <p className="text-xl font-semibold text-blue-600 mt-2">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
