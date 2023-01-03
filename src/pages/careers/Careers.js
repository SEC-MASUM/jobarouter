import { Link, useLoaderData } from "react-router-dom";

function Careers(props) {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

// loader function
export const careerLoader = async () => {
  const res = await fetch(`http://localhost:5000/careers`);
  if (!res.ok) {
    throw Error("Could not fetch the career");
  }
  return res.json();
};

export default Careers;
