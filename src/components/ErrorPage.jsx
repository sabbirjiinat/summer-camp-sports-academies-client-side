import { Link } from 'react-router-dom';
import errorImg from '../assets/404_page_cover.jpg'
const ErrorPage = () => {
    return (
        <div className='w-screen h-screen'>
            <img className='w-full h-screen object-cover relative' src={errorImg} alt="" />
            <Link className='absolute top-52 right-60 font-medium bg-[#336667] px-4 py-2 text-xl text-white'>Back To Home</Link>
        </div>
    );
};

export default ErrorPage;