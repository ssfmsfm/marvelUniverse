import React from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import useTranslate from "../../hooks/useTranslate";
import HeaderSocial from "./headerSocial/HeaderSocial";

import "./MainHeader.scss";

const Header = () => {
    const { t, lang, setLang } = useTranslate();
    const nextLang = lang === "en" ? "ru" : "en";
    const logged = useSelector(state => state.auth.logged);
    const { logout } = useActions();

    const navigate = useNavigate();


    const navToAuth = () => {
        navigate("/login");
    };


    return (
        <div className="header-wrap">
            <button
                className={`language ${nextLang === "en" ? "en" : "ru"}`}
                onClick={() => setLang(nextLang)}
            />
            {!logged
            ?
            <button className="auth-button-wrap" onClick={() => navToAuth()}>{t("button-login")}</button>
            :
            <button className="auth-button-wrap" onClick={logout}>{t("button-logout")}</button>
            }
            <HeaderSocial />
        </div>
    )
};

export default Header;