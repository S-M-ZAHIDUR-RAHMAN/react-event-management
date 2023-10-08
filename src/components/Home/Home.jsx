import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner/Banner";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";


const Home = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <div>
                {
                    <Banner></Banner>
                }
            </div>
            <div className="flex flex-col items-center">
                <div>
                    <h2 className="flex justify-center text-4xl text-white font-bold my-8 lg:my-10">Our Services</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 gap-2">
                    {
                        services?.map((service) => <Services key={service.id} service={service}></Services>)
                    }
                </div>
            </div>
            <div>
                <Portfolio></Portfolio>
            </div>

        </div>

    );
};

export default Home;