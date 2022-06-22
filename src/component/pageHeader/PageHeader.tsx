import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import useTranslate from "../hooks/useTranslate";
import PageHeaderNav from "./pageHeaderNav/PageHeaderNav";
import { ReactComponent as LoginIcon } from "../../assets/auth/login.svg";
import { ReactComponent as LogoutIcon } from "../../assets/auth/logout.svg";
import { ReactComponent as FavoIcon } from "../../assets/auth/favo.svg";
import { ReactComponent as LogoIcon } from "../../assets/logo/marvel-logo.svg";

import './PageHeader.scss';

const PageHeader = () => {

    const { t, lang, setLang } = useTranslate();
    const nextLang = lang === "en" ? "ru" : "en";

    const logged = useSelector(state => state.auth.logged);
    const { logout } = useActions();

    const navigate = useNavigate();


    const navToAuth = () => {
        navigate("/login");
    };

    const navToFavo = () => {
        navigate("/favourites");
    }


    return (
        <div className="page-header-wrap">
            <div className="container">
                <a href="/" className="logo-icon">
                    <LogoIcon className="logo-icon-svg" />
                </a>
                <div className="buttons-header-wrap">
                    <button
                        className={`language ${nextLang === "en" ? "en" : "ru"}`}
                        onClick={() => setLang(nextLang)}
                    />
                    {
                        !logged
                    ?
                        <button className="page-header-auth" onClick={() => navToAuth()}>
                            <LoginIcon className="page-header-auth-icon" />
                            <span>{t("button-login")}</span>
                        </button>
                    :
                        <>
                            <button className="nav-favo" onClick={() => navToFavo()}>
                                <FavoIcon className="nav-favo-icon" />
                                <span>{t("favourites")}</span>
                            </button>
                            <button className="page-header-auth" onClick={logout}>
                                <LogoutIcon className="page-header-auth-icon" />
                                <span>{t("button-logout")}</span>
                            </button>
                        </>
                    }
                </div>
                <PageHeaderNav />
            </div>
        </div>
    )
}


export default PageHeader;