import React from "react";
import { ReactComponent as InstaIcon } from "../../../../assets/social/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../../../assets/social/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../../assets/social/facebook.svg";
import { ReactComponent as MailIcon } from "../../../../assets/social/mail.svg";


import "./HeaderSocial.scss";

const HeaderSocial = () => {

    return (
        <div className="header-social">
            <ul className="header-social-links">
                <li className="header-social-link">
                    <a href="">
                        <InstaIcon className="header-social-link-icon"/>
                    </a>
                </li>
                <li className="header-social-link">
                    <a href="">
                        <TwitterIcon className="header-social-link-icon"/>
                    </a>
                </li>
                <li className="header-social-link">
                    <a href="">
                        <FacebookIcon className="header-social-link-icon"/>
                    </a>
                </li>
                <li className="header-social-link">
                    <a href="">
                        <MailIcon className="header-social-link-icon"/>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default HeaderSocial;