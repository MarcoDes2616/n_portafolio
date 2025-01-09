import React from 'react';
import logo from "/logo_h.png"

const NavBar = ({i18n}) => {
    return (
        <div className='navbar_container flex column'>
            <div className='flex row al-c full-h jf-sb'>
                <div className='navbar_logo'>
                    <img src={logo} alt="logo" style={{width: "100%"}} />
                </div>
                <div>
                    <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                    <button onClick={() => i18n.changeLanguage("es")}>ES</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;