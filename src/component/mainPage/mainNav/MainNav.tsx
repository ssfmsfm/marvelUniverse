import React from "react";
import { Link } from "react-router-dom";

import "./MainNav.scss";

const LINKS = [
    {url: "/heroes", text: "Heroes"},
    {url: "/comics", text: "Comics"},
    {url: "/movies", text: "Movies"},
    {url: "/history", text: "History"},
];

const MainNav = () => {

    return (
        <ul className="main-nav-wrap">
            {LINKS.map(({ url, text }) =>
                <li key={url + text}>
                    <Link to={url} className="nav-link-text">
                        {text}
                    </Link>
                </li>
            )}
        </ul>
    )
};

export default MainNav;