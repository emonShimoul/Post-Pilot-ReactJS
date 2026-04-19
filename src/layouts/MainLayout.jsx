import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto px-4 pb-8">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;