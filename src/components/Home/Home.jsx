import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner/Banner";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const services = useLoaderData();
    // console.log(services)
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
            <div>
                {
                    <Banner></Banner>
                }
            </div>
            <div className="flex flex-col items-center">
                <div>
                    <h2 className="flex justify-center text-4xl text-white font-bold my-8 lg:my-10" data-aos="flip-up" data-aos-anchor-placement="top-center"data-aos-duration="600">Our Services</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-2 mb-16">
                    {
                        services?.map((service) => <Services key={service.id} service={service}></Services>)
                    }
                </div>
            </div>
            <div className="mb-16">
                <Portfolio></Portfolio>
            </div>
            <div>
                <Testimonials></Testimonials>
            </div>
            <div>
                <Contact></Contact>
            </div>

        </div>

    );
};

export default Home;