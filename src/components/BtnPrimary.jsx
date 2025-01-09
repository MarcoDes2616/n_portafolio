import React, { useContext } from 'react';
import MainContext from '../context/MainContext';

const BtnPrimary = ({btnAction, scroll, children}) => {
    const {handleCustomScroll} = useContext(MainContext)

    const handleOnClick = () => {
        if (scroll != null) {
            handleCustomScroll(scroll);
        } else {
            btnAction()
        }
    };
    return (
        <button className='primary_btn btn_app flex al-c jf-c small' onClick={handleOnClick}>
            {children}
        </button>
    );
};

export default BtnPrimary;