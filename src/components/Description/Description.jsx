import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


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
        useEffect(() => {
            AOS.init();
          }, []);

    return (
        <div className="flex flex-col pl-5 pr-5 pb-5 text-white">
            <div className="hero min-h-[50vh] flex flex-col rounded-md justify-end" style={detailsImageStyle} data-aos="fade-right" data-aos-anchor-placement="top-center"data-aos-duration="linear">
                <div className="w-full bg-opacity-60">
                    <div className="hero-overlay animate-bounce text-3xl font-bold underline pl-5 py-5" data-aos="fade-left" data-aos-anchor-placement="top-center"data-aos-duration="linear">
                        {detailDescription?.title}
                    </div>
                </div>
            </div>
            <div className="mt-14 px-4 lg:px-0">
                <div>
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