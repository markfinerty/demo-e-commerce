export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
        <p className="mb-2">Built with React & Tailwind</p>
        <p className="text-xs uppercase tracking-widest font-semibold text-[#ea7bdf]/60">
          &copy; {new Date().getFullYear()} Dark Mode Design
        </p>
      </div>
    </footer>
  );
}
