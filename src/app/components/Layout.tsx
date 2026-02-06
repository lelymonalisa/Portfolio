import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div 
      className="min-h-screen w-full"
      style={{ 
        backgroundImage: "linear-gradient(162.625deg, rgb(29, 30, 33) 0.50333%, rgb(35, 32, 66) 7.0977%, rgb(10, 6, 32) 22.477%, rgb(14, 3, 60) 40.402%, rgb(37, 24, 76) 58.641%, rgb(17, 49, 94) 72.059%, rgb(5, 44, 65) 84.601%, rgba(7, 26, 44, 0.9) 94.35%, rgba(22, 35, 54, 0.95) 100.27%, rgb(11, 12, 34) 103.88%)" 
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
