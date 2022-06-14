import React from "react";
import MainHeader from "./mainHeader/MainHeader";
import MainNav from "./mainNav/MainNav";

import "./MainPage.scss";

const MainPage = () => {

    return (
        <div className="main">
            <div className="main-wrap container">
                <MainHeader />
                <MainNav />
                <h1 className="main-name">Marvel</h1>
            </div>
        </div>
    )
};

export default MainPage;