import React from 'react';
import titleShadow from "/title_shadow.png"

const Header = ({text}) => {
    
    return (
        <div className='header_container flex column relative'>
            <img className='title_shadow_img' src={titleShadow} alt="" />
            <div className='internal_container header_info_container border row wrap jf-sb'>
                <div className='header_my_info flex column border' style={{width: '45%'}}>
                    <h2>{text.hi} <span>{text.my_name}</span></h2>
                    <h1>{text.name} <span>{text.last_name}</span></h1>
                </div>
                <div className='header_my_picture flex column border' style={{width: '50%'}}>

                </div>
            </div>
        </div>
    );
};

export default Header;