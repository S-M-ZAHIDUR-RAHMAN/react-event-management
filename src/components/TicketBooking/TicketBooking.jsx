import { useLoaderData } from "react-router-dom";
import TicketCards from "./TicketCards";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const TicketBooking = () => {
    const ticketBooking = useLoaderData();
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div className="mx-auto pt-10">
            <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-white" data-aos="slide-left" data-aos-anchor-placement="top-center"data-aos-duration="600">Please select one payment method first</h2>
                <div className="flex flex-col gap-3 md:flex md:flex-row lg:flex lg:flex-row" data-aos="slide-right" data-aos-anchor-placement="top-center"data-aos-duration="600">
                    <button className="btn accent bg-red-400">Visa</button>
                    <button className="btn accent bg-red-400">MasterCard</button>
                    <button className="btn accent bg-red-400">PayPal</button>
                    <button className="btn accent bg-red-400">Google Pay</button>
                    <button className="btn accent bg-red-400">Amazon Pay</button>
                </div>
            </div>
            <div className="px-28 py-10 grid grid-cols-1 md:grid md:grid-cols-2 md:gap-20 lg:grid lg:grid-cols-3">
                {
                    ticketBooking?.map(ticket=><TicketCards key={ticket.id} ticket={ticket}></TicketCards>)
                }
            </div>
        </div>
    );
};

export default TicketBooking;