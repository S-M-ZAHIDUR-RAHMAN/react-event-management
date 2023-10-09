import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
            <div className="hero min-h-[100vh] lg:min-h-[87.7vh]" style={{ backgroundImage: 'url(https://i.ibb.co/BCc3sGD/portfolio1.jpg)' }} data-aos="flip-up" data-aos-anchor-placement="top-center"data-aos-duration="600">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-white pt-24 lg:mx-10">
                        <h1 className="text-5xl font-bold">Our Portfolio Overview</h1>
                        <p className="hero-overlay mt-5">We take immense pride in curating and orchestrating a wide spectrum of events across the entertainment industry. From high-octane concerts to thought-provoking theater productions, exhilarating sports events to star-studded film premieres, our team has a proven track record of turning visions into unforgettable experiences. <br /> Explore our portfolio to witness the passion, precision, and creativity that goes into every event we handle.</p>
                        <Link to="/ourPortfolio">
                        <button className="btn accent bg-yellow-400 mt-5">Learn more</button>
                        </Link>   
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Portfolio;