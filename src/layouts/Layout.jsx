import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-primary text-blue"
      style={{ backgroundColor: "#0f172a" }}
    >
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-primary-900 to-secondary-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
