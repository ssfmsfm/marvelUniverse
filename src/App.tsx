import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./component/mainPage/MainPage";
import HeroesPage from "./component/heroesPage/HeroesPage";
import HeroPage from "./component/heroPage/HeroPage";
import ComicsPage from "./component/comicsPage/ComicsPage";
import ComicPage from "./component/comicPage/ComicPage";


import './App.scss';


const App: React.FC = () => {

    return (
        <BrowserRouter>
        <div className="App">

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/heroes">
                    <Route index element={<HeroesPage />} />
                    <Route path=":id" element={<HeroPage />} />
                </Route>
                <Route path="/comics">
                    <Route index element={<ComicsPage />} />
                    <Route path=":id" element={<ComicPage />} />
                </Route>
                <Route path="*" element={<Navigate to={"/"}/>} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
