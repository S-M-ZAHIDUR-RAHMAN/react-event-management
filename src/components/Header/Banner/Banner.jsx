

const Banner = () => {
    return (
        <div className="hero mx-auto min-h-[100vh] lg:min-h-[87.7vh]" style={{ backgroundImage: 'url(https://i.ibb.co/NCGHczp/Banner.jpg)' }}>
            <div className="hero-overlay"></div>
            <div className="p-0 text-center text-neutral-content">
            <div className="w-[90vw]">
                    <div className="normal-case text-white rounded-full py-1 px-4 text-xl font-extrabold bg-black"><span className="text-yellow-300">Elegant</span>Events</div>
                    <p className="mb-5 text-5xl">Just <br /> one step <br /> away from <br /> <span className="font-bold underline">Entertainment</span>.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;