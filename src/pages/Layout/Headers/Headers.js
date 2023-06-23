import { NavLink, Link } from "react-router-dom";
import React, { useContext } from 'react';
import { AuthContext } from "../../Contexts/AuthProvider";
import { BeakerIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import './Headers.css'
import logo from '../../../assets/logo.png'
const Headers = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menu = <>
        <li className=""> <NavLink to='/'>Home</NavLink> </li>
        <li className=""> <NavLink to='/services'>Services</NavLink> </li>
        {
            user?.uid ? <>
                <li className=""> <NavLink to='/myreviews'>My Reviews</NavLink> </li>
                <li className=""> <NavLink to='/servicesAdd'>Add Services</NavLink> </li>
            </> :
                <></>
        }

        {user?.uid ?

            <> <li className="mr-2"> <Link onClick={handelLogout}>LogOut</Link></li>
            </>
            :
            <>  <li className=""> <NavLink to='/login'>Login</NavLink></li>
                <li className=""> <NavLink to='/signin'>SignIn</NavLink></li></>
        }


    </>
    return (
        <div className="navbar text-white backc py-5 " style={{ background: '#010060', color: '#ffffff' }}>
            <div className="w-[90%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 pl-3 shadow bg-primary rounded-box w-52">
                            {menu}
                        </ul>
                    </div>

                    <Link to='/' className="normal-case text-xl flex items-center">
                        <img src={logo} className="h-[60px]" alt="" />  <p className="text-4xl italic  font-bold "></p>
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal NavFont">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex pl-80 ">
                    <div className="avatar w-10">
                        <div className="w-10 my-auto rounded-full">
                            {user?.photoURL ?
                                <img alt="" src={user?.photoURL} /> :

                                <UserCircleIcon></UserCircleIcon>
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Headers;