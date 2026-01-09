import { useEffect, useState } from "react";
import { type Product } from "../types";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#ea7bdf]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-[#ea7bdf] animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 w-full max-w-7xl mx-auto px-4">
      {/* Hero Header */}
      <header className="mb-16 text-center">
        <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
          THE{" "}
          <span className="text-[#ea7bdf] drop-shadow-[0_0_15px_rgba(234,123,223,0.5)]">
            COLLECTION
          </span>
        </h2>
        <p className="text-gray-400 uppercase tracking-[0.2em] text-sm">
          Premium items • Page {currentPage} of {totalPages}
        </p>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {currentItems.map((item: Product) => (
          <div
            key={item.id}
            className="group bg-[#2d2d2d] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#ea7bdf]/50 transition-all duration-500 flex flex-col shadow-2xl"
          >
            {/* Image Container with Zoom */}
            <div className="relative h-64 overflow-hidden bg-[#1a1a1a]">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              {/* Neon Price Badge */}
              <div className="absolute top-4 right-4 bg-[#ea7bdf] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(234,123,223,0.4)]">
                ${item.price}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col grow">
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#ea7bdf] transition-colors truncate">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2 mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-black text-white">
                  ${item.price}
                </span>
                <button className="bg-[#ea7bdf] hover:bg-[#d46ac9] text-white p-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-[#ea7bdf]/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-6 py-3 rounded-xl bg-[#2d2d2d] border border-gray-800 text-gray-400 disabled:opacity-20 hover:border-[#ea7bdf] transition-all"
        >
          PREV
        </button>

        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1;
            if (
              pageNum === 1 ||
              pageNum === totalPages ||
              (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
            ) {
              return (
                <button
                  key={pageNum}
                  onClick={() => paginate(pageNum)}
                  className={`w-12 h-12 rounded-xl font-black transition-all duration-300 ${
                    currentPage === pageNum
                      ? "bg-[#ea7bdf] text-white shadow-[0_0_20px_rgba(234,123,223,0.5)] scale-110"
                      : "bg-[#2d2d2d] border border-gray-800 text-gray-500 hover:text-white hover:border-gray-600"
                  }`}
                >
                  {pageNum}
                </button>
              );
            }
            if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
              return (
                <span key={pageNum} className="text-gray-700 self-center">
                  •••
                </span>
              );
            }
            return null;
          })}
        </div>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-6 py-3 rounded-xl bg-[#2d2d2d] border border-gray-800 text-gray-400 disabled:opacity-20 hover:border-[#ea7bdf] transition-all"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
