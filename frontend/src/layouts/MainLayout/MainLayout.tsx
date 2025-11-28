import { Outlet } from "react-router-dom";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F3F3F5]">
      <Header isAuthenticated={false} />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
