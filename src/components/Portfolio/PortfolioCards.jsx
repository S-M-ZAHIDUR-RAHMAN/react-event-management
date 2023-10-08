/* eslint-disable react/prop-types */

const PortfolioCards = ({ portfolio }) => {
    const { portfolio_title, portfolio_date, portfolio_total_participants, portfolio_image } = portfolio;
    return (
        <div className="flex flex-col items-center">
            <div className="card mt-6 w-72 h-72 shadow-lg hover:opacity-80 glass">
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