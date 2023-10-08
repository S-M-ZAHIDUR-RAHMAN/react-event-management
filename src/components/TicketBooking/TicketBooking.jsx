import { useLoaderData } from "react-router-dom";
import TicketCards from "./TicketCards";


const TicketBooking = () => {
    const ticketBooking = useLoaderData();

    return (
        <div className="mx-auto pt-10">
            <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-white">Please select one payment method first</h2>
                <div className="flex flex-col gap-3 lg:flex lg:flex-row">
                    <button className="btn accent">Visa</button>
                    <button className="btn accent">MasterCard</button>
                    <button className="btn accent">PayPal</button>
                    <button className="btn accent">Google Pay</button>
                    <button className="btn accent">Amazon Pay</button>
                </div>
            </div>
            <div className="px-28 py-10 grid grid-cols-1 lg:grid lg:grid-cols-3">
                {
                    ticketBooking?.map(ticket=><TicketCards key={ticket.id} ticket={ticket}></TicketCards>)
                }
            </div>
        </div>
    );
};

export default TicketBooking;