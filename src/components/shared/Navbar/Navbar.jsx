import { NavLink } from "react-router-dom";
import Container from "../Container";
import navLogo from '../../../assets/navLogo.png'


const Navbar = () => {
    const navItems = <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-4">
             <NavLink to='/' className='text-base'>Home</NavLink>
             <NavLink to='/instructors' className='text-base'>Instructors</NavLink>
             <NavLink to='/classes' className='text-base'>Classes</NavLink>
              
    </div>
    return (

      <div className="bg-base-300">
        <Container>
        <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
           {navItems}
            </ul>
            </div>
        
              <img className="h-10 w-10" src={navLogo} alt="" />
 
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         
            {navItems}
       
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
        </div>
      </div>
      </Container>
           </div>
   
    );
};

export default Navbar;