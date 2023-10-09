import { useLoaderData } from "react-router-dom";
import PortfolioCards from "./PortfolioCards";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const OurPortfolio = () => {
    const ourPortfolio = useLoaderData();
    useEffect(() => {
        AOS.init();
      }, []);
    
    

    return (
        <div>
            <div className="flex flex-col justify-center items-center px-4 pt-10 lg:px-24 lg:pt-10">
                <h2 className="text-white text-3xl font-bold" data-aos="slide-up" data-aos-anchor-placement="top-center"data-aos-duration="600">Welcome to our Event Management Portfolio!</h2>
                <p className="text-white pt-4" data-aos="slide-down" data-aos-anchor-placement="top-center"data-aos-duration="600">Every event in our portfolio is a testament to our unwavering dedication to turning visions into reality. We are not just event managers; we are creators of memorable experiences. Explore our portfolio to witness the magic we bring to every event we undertake. Contact us today to turn your event dreams into a reality!</p>
            </div>
            <div className="grid grid-cols-1 px-14 py-10 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
                {
                    ourPortfolio?.map(portfolio=><PortfolioCards key={portfolio.id} portfolio={portfolio}></PortfolioCards>)
                }
            </div>
        </div>



    );
};

export default OurPortfolio;