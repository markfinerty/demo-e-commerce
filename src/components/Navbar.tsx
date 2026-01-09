import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-[#242424] border-b border-gray-700 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#ea7bdf]">
          DEMO APP
        </Link>
        <div className="space-x-8 text-gray-300 font-semibold">
          <Link to="/" className="hover:text-[#ea7bdf] transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#ea7bdf] transition-colors">
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#ea7bdf] transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/products"
            className="hover:text-[#ea7bdf] transition-colors"
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}
