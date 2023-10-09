import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Header/NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useEffect } from "react";



const Root = () => {
    const locationPage = useLocation()

    useEffect(()=> {
        if(locationPage.pathname==="/"){
            document.title = `ElegantEvents - Home`
        }
        else{
            document.title = `ElegantEvents ${locationPage.pathname.replace("/",'- ')}`
        }
        
    },[locationPage.pathname])
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