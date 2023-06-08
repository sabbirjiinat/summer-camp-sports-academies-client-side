import { Link, NavLink, Outlet } from "react-router-dom";
import Container from "../components/shared/Container";
import { FcSportsMode } from "react-icons/fc";
import { FaUsersCog } from "react-icons/fa";
import { MdSportsEsports,MdOutlineSports } from 'react-icons/md'
import useAuth from "../hooks/UseAuth";
import useAdmin from "../hooks/UseAdmin";
import useInstructor from "../hooks/UseInstructor";
const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <Container>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden flex justify-end"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side fixed z-10">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[250px] h-full bg-base-200 text-base-content">
            {isAdmin && (
              <>
                <div className="flex flex-col items-center space-y-2">
                  <Link to="/">
                    <img
                      title={user?.displayName}
                      className="rounded-full w-24 h-24 object-cover"
                      src={user?.photoURL}
                      alt=""
                    />
                  </Link>
                  <h4 className="font-medium text-gray-800 hover:underline">
                    {user?.email}
                  </h4>
                  <h4 className="font-medium text-gray-800 hover:underline">
                    {user?.displayName}
                  </h4>
                </div>
                
                <NavLink
                  to="/dashboard/manage-classes"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <FcSportsMode className="h-5 w-5" />

                  <span className="mx-4 font-medium">Manage Classes</span>
                </NavLink>
                <NavLink
                  to="/dashboard/manage-users"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <FaUsersCog className="h-5 w-5" />

                  <span className="mx-4 font-medium">Manage Users</span>
                </NavLink>
              </>
            )}
            {isInstructor && (
              <>
                <div className="flex flex-col items-center space-y-2">
                  <Link to="/">
                    <img
                      title={user?.displayName}
                      className="rounded-full w-24 h-24 object-cover"
                      src={user?.photoURL}
                      alt=""
                    />
                  </Link>
                  <h4 className="font-medium text-gray-800 hover:underline">
                    {user?.email}
                  </h4>
                  <h4 className="font-medium text-gray-800 hover:underline">
                    {user?.displayName}
                  </h4>
                </div>
           
                <NavLink
                  to="/dashboard/add-class"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <MdSportsEsports className="h-5 w-5" />

                  <span className="mx-4 font-medium">Add Classes</span>
                </NavLink>
                <NavLink
                  to="/dashboard/my-classes"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <MdOutlineSports className="h-5 w-5" />

                  <span className="mx-4 font-medium">My Classes</span>
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
