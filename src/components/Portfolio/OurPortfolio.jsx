import { useLoaderData } from "react-router-dom";
import PortfolioCards from "./PortfolioCards";


const OurPortfolio = () => {
    const ourPortfolio = useLoaderData();

    return (
        <div>
            <div className="flex flex-col justify-center items-center lg:px-24 pt-10">
                <h2 className="text-white text-3xl font-bold">Welcome to our Event Management Portfolio!</h2>
                <p className="text-white pt-4">Every event in our portfolio is a testament to our unwavering dedication to turning visions into reality. We are not just event managers; we are creators of memorable experiences. Explore our portfolio to witness the magic we bring to every event we undertake. Contact us today to turn your event dreams into a reality!</p>
            </div>
            <div className="grid grid-cols-1 px-14 py-10 lg:grid lg:grid-cols-3">
                {
                    ourPortfolio?.map(portfolio=><PortfolioCards key={portfolio.id} portfolio={portfolio}></PortfolioCards>)
                }
            </div>
        </div>



    );
};

export default OurPortfolio;