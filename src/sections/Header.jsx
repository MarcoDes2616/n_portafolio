import React from "react";
import titleShadow from "/title_shadow.png";
import BtnPrimary from "../components/BtnPrimary";

const Header = ({ text }) => {
  return (
    <div className="header_container flex column relative">
      <img className="title_shadow_img" src={titleShadow} alt="" />
      <div className="internal_container header_info_container border row wrap jf-sb">
        <div
          className="header_my_info flex column"
          style={{ width: "45%" }}
        >
          <h2 className="small">
            {text.hi}
            <span>{text.my_name}</span>
          </h2>
          <h1 className="xx-big">
            <span>{text.name}</span>
            {text.last_name}
          </h1>
          <p className="big">
            {text.description.first}{" "}
            <span className="second_font x-big">{text.description.second}</span>
          </p>
          <p className="regular header_presentation">{text.presentation}</p>
          <div className="flex row header_social_media">
            <i className="bx bxl-linkedin bx-md" />
            <i class="bx bxl-github bx-md" />
          </div>
          <div className="header_download flex row al-c">
            <BtnPrimary>{text.download_cv}</BtnPrimary>
            <hr style={{width: 50}}/>
            <p className="big second_font">{text.know_me}</p>
          </div>
        </div>
        <div
          className="header_my_picture flex column border"
          style={{ width: "50%" }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
