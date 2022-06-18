import React from "react";
import { Link } from "react-router-dom";
import useTranslate from "../../hooks/useTranslate";

import "./MainNav.scss";

const LINKS = [
    {url: "/heroes", text: "heroes"},
    {url: "/comics", text: "comics"},
    {url: "/movies", text: "movies"},
    {url: "/history", text: "history"},
];

const MainNav = () => {

    const { t } = useTranslate();

    return (
        <ul className="main-nav-wrap">
            {LINKS.map(({ url, text }) =>
                <li key={url + text}>
                    <Link to={url} className="nav-link-text">
                        {t(text)}
                    </Link>
                </li>
            )}
        </ul>
    )
};

export default MainNav;