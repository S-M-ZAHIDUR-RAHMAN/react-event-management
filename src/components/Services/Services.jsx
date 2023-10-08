/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Services = ({ service }) => {
  const { id, title, image, price, short_description } = service
  return (
    <div className="card w-72 rounded-full shadow-lg hover:opacity-80 glass">
      <figure><img src={image} alt="" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{short_description}</p>
        <p>Price: Tk. {price}</p>
        <div className="card-actions justify-center">
        <Link to={`/services/${id}`}><button className="btn accent">Learn more</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Services;