import React from 'react';
import titleShadow from "/title_shadow.png"

const Header = () => {
    return (
        <div className='header_container flex column relative'>
            <img className='title_shadow_img' src={titleShadow} alt="" />
        </div>
    );
};

export default Header;