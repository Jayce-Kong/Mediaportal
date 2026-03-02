import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <footer className="py-12 border-t border-white/10 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          <p>© 2026 MEDIA PORTAL. 所有权利保留。</p>
        </div>
      </footer>
    </div>
  );
}
