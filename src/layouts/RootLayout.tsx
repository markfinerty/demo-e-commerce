import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-7xl">
          <Outlet />
        </div>
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}

export default RootLayout;
