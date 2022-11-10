import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { AuthContext } from "../../Contexts/AuthProvider";
import { BeakerIcon, UserCircleIcon } from '@heroicons/react/24/solid'
const Headers = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menu = <>
        <li className=""> <Link to='/'>Home</Link> </li>
        <li className=""> <Link to='/blogs'>Blog</Link> </li>
        <li className=""> <Link to='/services'>Services</Link> </li>
        <li className=""> <Link to='/myreviews'>My Reviews</Link> </li>
        <li className=""> <Link to='/servicesAdd'>Add Services</Link> </li>
        {user?.uid ?

            <> <li className="mr-2"> <Link onClick={handelLogout}>LogOut</Link></li>
            </>
            :
            <> 
                <li className=""> <Link to='/signin'>SignIn</Link></li></>
        }

        <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {user?.photoURL ?
                    <img alt="" src={user?.photoURL} /> :

                    <UserCircleIcon></UserCircleIcon>
                }
            </div>
        </div>
    </>
    return (
        <div className="navbar bg-primary text-white font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 pl-3 shadow bg-primary rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link className="btn lg:ml-16 mt-4 normal-case text-xl">
                   <h2> Excellent-Photography</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex pl-80 ">
                <ul className="menu menu-horizontal">
                    {menu}
                </ul>
            </div>

        </div>
    );
};

export default Headers;