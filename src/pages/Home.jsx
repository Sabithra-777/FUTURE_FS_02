import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

// 💡 Unique colors for each button (cycled)
const buttonColors = [
  "bg-blue-600", "bg-green-600", "bg-purple-600", "bg-pink-600", "bg-yellow-600", 
  "bg-red-600", "bg-indigo-600", "bg-teal-600", "bg-amber-600", "bg-rose-600"
];

const products = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 1299,
    image: "https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UY218_.jpg",
    description: "Apple's flagship smartphone with A16 Bionic chip."
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 999,
    image: "https://m.media-amazon.com/images/I/61RZDb2mQxL._AC_UY218_.jpg",
    description: "Top-tier Android phone with smooth performance."
  },
  {
    id: 3,
    name: "OnePlus Nord CE 3",
    price: 399,
    image: "https://m.media-amazon.com/images/I/61CiqVTRBEL._AC_UY218_.jpg",
    description: "Mid-range phone with premium features."
  },
  {
    id: 4,
    name: "MacBook Pro M2",
    price: 1999,
    image: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg",
    description: "Powerful laptop for creators and developers."
  },
 
  {
    id: 6,
    name: "Sony WH-1000XM4",
    price: 299,
    image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY218_.jpg",
    description: "Noise-canceling wireless headphones."
  },
  {
    id: 10,
    name: "iPad 10th Gen",
    price: 599,
    image: "https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_UY218_.jpg",
    description: "All-purpose tablet with Apple Pencil support."
  },
  {
    id: 13,
    name: "boAt Airdopes 441",
    price: 39,
    image: "https://m.media-amazon.com/images/I/51HBom8xz7L._AC_UY218_.jpg",
    description: "TWS earbuds with great sound and fit."
  },

  {
    id: 16,
    name: "ASUS VivoBook",
    price: 559,
    image: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg",
    description: "Lightweight laptop for students and pros."
  },

];

function Home() {
  const { addToCart } = useCart();

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">✨ Welcome to Shopfinity</h1>
        <Link to="/checkout">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Go to Checkout
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col border-b border-gray-300"
          >
            <div className="w-full h-32 flex items-center justify-center mb-3 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain h-full "
              />
            </div>

            <h2 className="text-md font-bold text-gray-800 mb-1">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-lg font-bold text-blue-700 mt-2">${product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className={`${buttonColors[index % buttonColors.length]} text-white text-sm mt-3 px-3 py-1 rounded hover:opacity-90 w-fit`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
