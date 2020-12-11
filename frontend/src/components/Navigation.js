import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from "./session/LogoutButton";


export default function NavBar() {
    return (
        <div className='navbar'>
            <div className='navbar__container'>
                <NavLink className='navbar__link navbar__home' to="/">
                    <img id='nav-logo' src='https://packstreet-bucket.s3-us-west-2.amazonaws.com/PACK+STREET+(2).png' />
                </NavLink>
                {/* <NavLink className='navbar__link navbar__package' to="/package/1">
                    package
                </NavLink> */}
                <div className='nav-links'>
                    <NavLink className='section-button left' to="/my-packages">
                        my designs
                </NavLink>
                    {/* <NavLink className='navbar__link navbar__design' to="/design">
                    design
                </NavLink> */}
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
};
