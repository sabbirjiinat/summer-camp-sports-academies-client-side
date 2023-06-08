import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import navLogo from '../../../assets/navLogo.avif'
import useAuth from "../../../hooks/UseAuth";


const Navbar = () => {
  const {user,logOut} = useAuth()
    const navItems = <div className="flex flex-col md:flex-row md:items-center  md:gap-4 text-base font-semibold">
             <NavLink to='/' className='text-base'>Home</NavLink>
             <NavLink to='/instructors' className='text-base'>Instructors</NavLink>
             <NavLink to='/classes' className='text-base'>Classes</NavLink>
             <NavLink to='/dashboard' className='text-base'>Dashboard</NavLink>
      {user ? <button onClick={() => logOut()} className='text-base'>Logout</button> :
            <NavLink to='/login' className='text-base'>Login</NavLink>
           }
           
              
    </div>
    return (

      <div className="border-b-[1px] shadow-sm bg-neutral-100 fixed w-full z-10">
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
        
             <Link to='/'> <img className="h-10 w-16 object-cover" src={navLogo} alt="" /></Link>
 
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         
            {navItems}
       
          </ul>
        </div>
        <div className="navbar-end">
       {user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img title={user?.displayName} src={user?.photoURL} alt="profile" />
        </div>
              </label> 
    
      }
        </div>
      </div>
      </Container>
           </div>
   
    );
};

export default Navbar;