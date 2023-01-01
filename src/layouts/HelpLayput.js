import { NavLink, Outlet } from "react-router-dom";

const HelpLayput = () => {
  return (
    <div className="help-layout">
      <h1>Website Help</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
        perferendis.
      </p>

      <nav>
        <NavLink to="faq">View the faq</NavLink>
        <NavLink to="contact">Contact us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayput;
