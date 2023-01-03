import { NavLink, Outlet } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/help">Help</NavLink>
          <NavLink to="/careers">Careers</NavLink>
        </nav>
        <Breadcrumb />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
