import { Link, useLocation } from 'react-router-dom';
import useTranslate from '../../hooks/useTranslate';

import './PageHeaderNav.scss';

const LINKS = [
    {url: "/heroes", text: "heroes"},
    {url: "/comics", text: "comics"},
    {url: "/movies", text: "movies"},
    {url: "/history", text: "history"},
];


const PageHeaderNav = () => {

    const { t } = useTranslate();
    const href = useLocation().pathname;
    let currentURI: string = "";
    LINKS.forEach(link =>
        link.url === href
        ?
        currentURI = link.text
        :
        null
    )
    if(href === "/favourites") {
        currentURI = "favourites";
    }

    return (
        <div className="page-header-nav-wrap">
            <ul className="page-header-nav-links">
                {LINKS.map(({ url, text }) =>
                    <li key={url + text}>
                        <Link to={url} className="page-header-nav-link">
                            {t(text)}
                        </Link>
                    </li>
                )}
            </ul>
            <div className="name-container">
                {currentURI && <h2 className="current-page-name">{t(currentURI)}</h2>}
            </div>
        </div>
    )
}


export default PageHeaderNav;