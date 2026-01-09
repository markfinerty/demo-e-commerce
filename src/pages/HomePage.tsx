import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-black text-white mb-6">
        Demo{" "}
        <span className="text-[#ea7bdf] drop-shadow-[0_0_15px_rgba(234,123,223,0.5)]">
          E-Commerce
        </span>{" "}
        Application
      </h1>
      <p className="text-gray-400 text-xl max-w-xl mx-auto mb-10 leading-relaxed">
        Demo e-commerce app built for practice, displaying dummy products for
        you to select from. Enjoy!
      </p>
      <Link
        to="/products"
        className="bg-[#ea7bdf] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-[#ea7bdf]/20"
      >
        Explore Products
      </Link>
    </div>
  );
}
