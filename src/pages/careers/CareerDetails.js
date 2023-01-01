import { useLoaderData, useParams } from "react-router-dom";

function CareerDetails(props) {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>{career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, placeat
          facilis? Voluptatum nesciunt dignissimos officia enim corporis nemo
          quisquam, rem deserunt itaque tempora iusto sunt quaerat provident
          suscipit quia ex!
        </p>
      </div>
    </div>
  );
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:5000/careers/${id}`);

  return res.json();
};

export default CareerDetails;
