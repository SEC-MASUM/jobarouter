import { Outlet } from "react-router-dom";

function CareersLayout(props) {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
        quisquam.
      </p>

      <Outlet />
    </div>
  );
}

export default CareersLayout;
