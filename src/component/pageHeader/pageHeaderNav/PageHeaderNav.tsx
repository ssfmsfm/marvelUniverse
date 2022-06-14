

import { Link } from 'react-router-dom';
import './PageHeaderNav.scss';

const LINKS = [
    {url: "/heroes", text: "Heroes"},
    {url: "/comics", text: "Comics"},
    {url: "/movies", text: "Movies"},
    {url: "/history", text: "History"},
];

const PageHeaderNav = () => {

    const href: string = window.location.href;
    let currentURI: string = "";
    LINKS.forEach(link =>
        link.url === href.slice(href.lastIndexOf("/"))
        ?
        currentURI = link.text
        :
        null
    )

    return (
        <div className="page-header-nav-wrap">
            <ul className="page-header-nav-links">
                {LINKS.map(({ url, text }) =>
                    <li key={url + text}>
                        <Link to={url} className="page-header-nav-link">
                            {text}
                        </Link>
                    </li>
                )}
            </ul>
            <div className="name-container">
                {currentURI && <h2 className="current-page-name">{currentURI}</h2>}
            </div>
        </div>
    )
}



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


export default PageHeaderNav;