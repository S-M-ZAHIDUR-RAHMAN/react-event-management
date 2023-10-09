import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';

const Testimonials = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
            <div>
                <h2 className="flex justify-center text-4xl text-white font-bold my-8 lg:my-10" data-aos="slide-right" data-aos-anchor-placement="top-center"data-aos-duration="600">Testimonials</h2>
            </div>

            <div className="carousel h-[95vh] w-full" data-aos="slide-left" data-aos-anchor-placement="top-center"data-aos-duration="600">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/VtVNBh8/Concert1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform lg:gap-20 -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-yellow-400">❮</a>
                        <div className="text-white lg:font-bold lg:text-2xl hero-overlay p-1 rounded-md">
                            <h2>
                                "Attending the concert organized by ElegantEvents was an absolute delight. The seamless coordination and attention to detail brought satisfaction. Tahsan's performance was electrifying. It was a night to remember!"
                            </h2>
                            <p className="lg:mt-4">- Sarah J., Dhaka, Bangladesh</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle bg-yellow-400">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Gk3CKYR/Exhibition1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform lg:gap-20 -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-yellow-400">❮</a>
                        <div className="text-white lg:font-bold lg:text-2xl hero-overlay p-1 rounded-md">
                            <h2>
                                "The exhibition 'Dhaka Chobi' curated by ElegantEvents was a visual feast. The layout and presentation of the artworks were impeccable, allowing visitors to truly immerse themselves in the creative world on display. Kudos to the team for such a remarkable event!"
                            </h2>
                            <p className="lg:mt-4">- Michael R., New York, USA</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle bg-yellow-400">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/GT4vyDj/Film-premiere1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform lg:gap-20 -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-yellow-400">❮</a>
                        <div className="text-white lg:font-bold lg:text-2xl hero-overlay p-1 rounded-md">
                            <h2>
                                "Attending the premiere of 'Jawan' organized by ElegantEvents was an extraordinary experience. The red carpet event was glamorous and well-coordinated, creating a buzz of excitement. 'Jawan' itself was a gripping film, and the premiere set the perfect stage for its release."
                            </h2>
                            <p className="lg:mt-4">- Ayesha M., Mumbai, India</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle bg-yellow-400">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/pz769th/Sports1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform lg:gap-20 -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-yellow-400">❮</a>
                        <div className="text-white lg:font-bold lg:text-2xl hero-overlay p-1 rounded-md">
                            <h2>
                                "Participating in the triathlon event managed by ElegantEvents was nothing short of exhilarating. The logistics were flawlessly handled, ensuring a smooth flow from start to finish. Looking forward to the next one!"
                            </h2>
                            <p className="lg:mt-4">- Md. Arafat, Dhaka, Bangladesh</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle bg-yellow-400">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;