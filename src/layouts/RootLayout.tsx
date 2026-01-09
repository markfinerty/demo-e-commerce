import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#242424] text-white/90">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 flex items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
