import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WishList = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="w-auto py-10 text-white flex flex-col lg:flex lg:flex-row lg:justify-center">
            <div className="text-3xl font-bold animate-bounce flex flex-col items-center justify-center p-6">
                <h2>Hire us</h2>
                <h2 className="my-5">Or,</h2>
                <h2>Wish a pre-booking</h2>
            </div>
            
            <form className="flex flex-col gap-2" data-aos="slide-up" data-aos-anchor-placement="top-center"data-aos-duration="linear">
                <div className="flex flex-col mx-10 border border-white rounded-md p-2">
                    <label>Phone number</label>
                    <input className="rounded-md pl-2 bg-orange-500" type="text" placeholder="" name="phone" id="" />
                </div>
                <div className="flex flex-col mx-10 border border-white rounded-md p-2">
                    <label>Program name and type</label>
                    <input className="rounded-md pl-2 bg-orange-500" type="text" name="program" placeholder="" id="" />
                </div>
                <div className="flex flex-col mx-10 border border-white rounded-md p-2">
                    <label>Probable month of the Program</label>
                    <input className="rounded-md pl-2 bg-orange-500" type="month" placeholder="Probable month of the Program" name="month" id="" />
                </div>
                <div className="flex flex-col mx-10 border border-white rounded-md p-2 gap-1">
                    <label>Select whether you want to hire us or book tickets for a probable event.</label>
                    <div className="gap-0">
                    <div className="flex flex-row gap-5">
                    <input type="radio" name="question" value="hire" id="" />
                    <label>Hire ElegantEvents</label>
                    </div>
                    <div className="flex flex-row gap-5">
                    <input type="radio" name="question" value="wish" id="" />
                    <label>Wish a pre-booking</label>
                    </div>
                    </div>
                </div>
                <div className="flex flex-row mx-10 border border-white rounded-md p-2 gap-2">
                    <input type="checkbox" name="terms" id="" />
                    <label>Accept our <span className="text-blue-300 underline">Terms and conditions</span></label>
                </div>
                <div className="ml-10">
                    <input className="btn accent bg-yellow-400 " type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default WishList;