/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TicketCards = ({ ticket }) => {
    const { title_book, image, price } = ticket;


    const ticketImageStyle = {
        backgroundImage: `url(${image})`
    }
    return (
        <div className="text-bold text-white mt-10 flex flex-col items-center lg:flex lg:flex-col lg:items-center">
            <div className="shadow-white card w-72 h-72 flex flex-col justify-center items-center rounded-full shadow-lg hover:opacity-80 glass" style={ticketImageStyle}>
                <div className="flex flex-col justify-center items-center">
                    <div className="hero-overlay mt-24 py-1 px-2 rounded-md">
                        <h2 className="card-title font-bold text-l ">{title_book}</h2>
                        <p className="font-bold">Price: Tk. {price}</p>
                    </div>

                    <Link to="/wishList"><button className="btn accent mt-8">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TicketCards;