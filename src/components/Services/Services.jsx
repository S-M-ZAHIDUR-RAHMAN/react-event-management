/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Services = ({ service }) => {
  const { id, title, image, price, short_description } = service;

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="card w-72 rounded-full shadow-lg hover:opacity-80 glass" data-aos="fade-up-right" data-aos-anchor-placement="top-center"data-aos-duration="600">
      <figure><img src={image} alt="" /></figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-white">{short_description}</p>
        <p className="text-white">Price: Tk. {price}</p>
        <div className="card-actions justify-center">
        <Link to={`/services/${id}`}><button className="btn accent bg-yellow-400">Learn more</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Services;