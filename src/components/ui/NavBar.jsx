import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../img/MyLogo.png';

export const Navbar = () => {
    return (
        <nav className="flex justify-between py-2 px-8 bg-black">
            
            <Link 
                className="text-white text-xl" 
                to="/"
            >
                <img src={ logo } alt="logo"/>
            </Link>

                <div className="flex gap-8 items-center">

                    <NavLink 
                        activeClassName="active"
                        className="text-white text-lg" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="text-white text-lg" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="text-white text-lg" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                

            
                    <NavLink 
                        activeClassName="active"
                        className="text-white text-lg ml-16 py-1 px-4 bg-pink-700 rounded-full" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                    </div>
        </nav>
    )
}