export default function HomePage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-black text-white mb-6">
        Modern <span className="text-[#ea7bdf]">Dark</span> Interface
      </h1>
      <p className="text-gray-400 text-xl max-w-xl mx-auto mb-10 leading-relaxed">
        High-contrast aesthetics with a focus on typography and subtle neon
        accents.
      </p>
      <button className="bg-[#ea7bdf] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-[#ea7bdf]/20">
        Explore Project
      </button>
    </div>
  );
}
