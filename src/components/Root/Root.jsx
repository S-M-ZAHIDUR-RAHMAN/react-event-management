import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar/NavBar";
import Footer from "../Footer/Footer";



const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/4Pm53yS/env2.jpg)' }}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>


    );
};

export default Root;