import React, { useState, useEffect } from 'react';
import 'animate.css'; // Import Animate.css for animations

// Sample product data with images, ratings, and descriptions
const products = [
  { id: 1, name: "Product 1", price: "$19.99", imageUrl: "https://i.pinimg.com/736x/1a/3d/52/1a3d5285c238099abcbf2b3e0cdb5807.jpg", rating: 4, description: "A great product for daily use." },
  { id: 2, name: "Product 2", price: "$29.99", imageUrl: "https://images.pexels.com/photos/1438044/pexels-photo-1438044.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", rating: 5, description: "Top rated and highly recommended." },
  { id: 3, name: "Product 3", price: "$39.99", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 3, description: "Affordable and durable." },
  { id: 4, name: "Product 4", price: "$49.99", imageUrl: "https://i.pinimg.com/736x/63/26/50/632650d4a548158dfc3120f93ca95ce1.jpg", rating: 4, description: "Perfect for special occasions." },
  { id: 5, name: "Product 5", price: "$59.99", imageUrl: "https://i.pinimg.com/736x/72/2e/86/722e8695d738442928238a422c72421e.jpg", rating: 5, description: "Premium quality and long-lasting." },
  { id: 6, name: "Product 6", price: "$69.99", imageUrl: "https://i.pinimg.com/736x/06/e0/59/06e059ba7444523998fdcbc8def8f9de.jpg", rating: 4, description: "Ideal for tech enthusiasts." },
  { id: 7, name: "Product 7", price: "$79.99", imageUrl: "https://images.pexels.com/photos/407040/strawberry-water-splashes-splash-drop-of-water-407040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", rating: 5, description: "Top-tier performance and design." },
  { id: 8, name: "Product 8", price: "$89.99", imageUrl: "https://plus.unsplash.com/premium_photo-1718234942318-3519f137b1b4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 4, description: "A luxury product with great features." },
];

const Home = ({ addToCart }) => {
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(product.id);
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000); // Hide notification after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-darkGradient-100 via-darkGradient-200 to-darkGradient-300 text-gray-100 flex flex-col items-center justify-center px-4">
      {/* Title Section */}
      <h1 className="text-4xl mt-8 font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s text-center">Welcome to Our E-Commerce Platform</h1>
      <p className="text-lg text-gray-300 mb-12 animate__animated animate__fadeIn animate__delay-1s text-center">Discover amazing products with great deals.</p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-1s"
          >
            {/* Notification */}
            {notification === product.id && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg animate__animated animate__slideInDown animate__delay-1s">
                <p>Item added to cart!</p>
              </div>
            )}

            {/* Product Image */}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
            />

            {/* Product Title */}
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

            {/* Product Price */}
            <p className="text-gray-400 mt-2">{product.price}</p>

            {/* Product Description */}
            <p className="text-gray-300 mt-2 text-sm">{product.description}</p>

            {/* Ratings */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${index < product.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path
                    d="M10 15l-3.09 1.636L8.18 12.39l-2.91-2.84 3.95-.57L10 3l1.88 5.03 3.95.57-2.91 2.84 1.27 4.247L10 15z"
                  />
                </svg>
              ))}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
