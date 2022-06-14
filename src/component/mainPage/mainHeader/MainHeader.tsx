import React from "react";
import HeaderSocial from "./headerSocial/HeaderSocial";

import "./MainHeader.scss";

const Header = () => {

    return (
        <div className="header-wrap">
            <a href="" className="auth-wrap">
                <div className="auth-flex">
                    <span>Login</span>
                </div>
            </a>
            <HeaderSocial />
        </div>
    )
};

export default Header;