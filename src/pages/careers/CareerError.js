import { Link, useRouteError } from "react-router-dom";

function CareerError(props) {
  const error = useRouteError();
  return (
    <div className="career-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
}

export default CareerError;
