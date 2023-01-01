import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore earum
        voluptate nihil accusamus, ipsum voluptatibus? Ut, soluta beatae. Eaque
        quisquam minus non consequuntur pariatur repellendus adipisci ullam.
        Aperiam repudiandae, exercitationem, ratione cupiditate error a iure
        voluptate fugit nostrum itaque recusandae.
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
};

export default NotFound;
