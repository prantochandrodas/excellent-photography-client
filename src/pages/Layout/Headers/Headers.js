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
        <li className="mr-4"> <Link to='/'>Home</Link> </li>
        <li className="mr-4"> <Link to='/'>Blog</Link> </li>
        {user?.uid ?

            <> <li className="mr-4"> <Link onClick={handelLogout}>LogOut</Link></li>
            </>
            :
            <>  <li className="mr-4"> <Link to='/login'>Login</Link></li>
                <li className="mr-4"> <Link to='/signin'>SignIn</Link></li></>
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
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 pl-3 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link className="btn lg:ml-16 mt-4 normal-case text-xl">
                    Excellent-Photography
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex pl-80 ">
                <ul className="menu menu-horizontal pr-12">
                    {menu}
                </ul>
            </div>

        </div>
    );
};

export default Headers;