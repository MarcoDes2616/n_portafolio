import React from 'react';
import logo from "/logo_h.png"

const NavBar = () => {
    return (
        <div className='navbar_container flex column'>
            <div className='flex row al-c full-h'>
                <div className='navbar_logo'>
                    <img src={logo} alt="logo" style={{width: "100%"}} />
                </div>
            </div>
            
        </div>
    );
};

export default NavBar;