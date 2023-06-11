import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Summer Camp Sports - Home</title>
            </Helmet>
            <Banner />
            <PopularClass />
            <PopularInstructors />
            <Testimonials/>
       
        </div>
    );
};

export default Home;