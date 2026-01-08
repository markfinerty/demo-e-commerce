import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main className="items-center justify-center h-screen flex">
      <Outlet />
    </main>
  );
}

export default RootLayout;
