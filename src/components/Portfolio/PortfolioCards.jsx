/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const PortfolioCards = ({ portfolio }) => {
    const { portfolio_title, portfolio_date, portfolio_total_participants, portfolio_image } = portfolio;
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="flex flex-col lg:mt-10 items-center">
            <div className="card mt-6 w-72 h-72 shadow-lg hover:opacity-80 glass" data-aos="slide-up" data-aos-anchor-placement="top-center"data-aos-duration="linear">
                <figure><img src={`${portfolio_image}`} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{portfolio_title}</h2>
                    <p className="text-white">Number of Participants: {portfolio_total_participants}</p>
                    <p className="text-white">Date: {portfolio_date}</p>
                </div>
            </div>
        </div>

    );
};

export default PortfolioCards;