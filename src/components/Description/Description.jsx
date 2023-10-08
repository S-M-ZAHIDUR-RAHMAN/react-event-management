import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Description = () => {
        const [detailDescription, setDetailDescription] = useState();
    
        const { id } = useParams();
        const services = useLoaderData();

        useEffect(() => {
            const findDescription = services?.find(service => service.id == id);
            setDetailDescription(findDescription);
        }, [id, services])
        // console.log(detailDescription);

        const detailsImageStyle = {
            backgroundImage: `url(${detailDescription?.image})`
        }

    return (
        <div className="flex flex-col p-5 text-white">
            <div className="hero min-h-[50vh] flex flex-col rounded-md justify-end" style={detailsImageStyle}>
                <div className="w-full bg-opacity-60">
                    <div className="hero-overlay text-3xl font-bold underline pl-5 py-5">
                        {detailDescription?.title}
                    </div>
                </div>
            </div>
            <div className="mt-14 px-4 lg:px-0">
                <div className="text-lg mt-6">
                    <p>{detailDescription?.long_description}</p>
                </div>
                <Link to={`/`}>
                    <div className="flex justify-center mt-5">
                        <button className="btn accent">Go Back to <br />HOME</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Description;