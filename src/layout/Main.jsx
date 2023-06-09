import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-220px)] pt-24">
            <Outlet />
           </div>
            <Footer/>
        </div>
    );
};

export default Main;