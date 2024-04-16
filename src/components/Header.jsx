import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../providers/AuthProvider';
// import '../css/style.css'

const Header = () => {

        const { user, logOut } = useContext(AuthContext);

        const handleLogOut = () =>{
            logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))    
        }


        const navLink =<>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/orders">Orders</NavLink></li>
            {user && <>
                <li><NavLink to="/UpdateProfile">Update Profile</NavLink></li>
                <li><NavLink to="/UserProfile">User Profile</NavLink></li>
            </>}
            </>
    return (

            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Your-Home</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLink}
                    </ul>
                </div>
                <div className="dropdown dropdown-end flex">
                    
                    {
                        user ? <>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img alt="" src={user?.photoURL || "https://i.ibb.co/SXC0ynb/developer-siblu.jpg"} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                            <a className="justify-between">
                               {
                                user.displayName
                               }
                            </a>
                            </li>
                        </ul>
                        <a onClick={handleLogOut} className="btn btn-sm">Sign out</a>
                        </>
                        : <Link to="/login">

                            <a className="btn-sm">Login</a>

                        </Link>
                    }
                </div>
            </div>
    );
};

export default Header;