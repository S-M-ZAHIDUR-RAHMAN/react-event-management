import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center"data-aos-duration="300">
            <div className="hero h-[85vh] bg-blue-200 mb-96 lg:mb-0 md:mb-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="slide-left" data-aos-anchor-placement="top-center"data-aos-duration="900" src="https://i.ibb.co/bLdpQwt/office.jpg" className="max-w-sm h-[80vh] rounded-lg shadow-2xl" />
                    <div data-aos="slide-right" data-aos-anchor-placement="top-center"data-aos-duration="900">
                        <h1 className="text-5xl font-bold">Office Address!</h1>
                        <p className="py-6">House-29, Block-B, Road-06 <br />Islambag, East Isdair <br />Fatullah, Narayanganj <br />Bangladesh</p>
                        <p>Phone: 01912790815</p>
                        <p>Email: smz.xahid@gmail.com</p>
                        <button className="btn btn-primary text-white mt-8 bg-green-500 hover:bg-yellow-400">Chat on Whatsapp</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;