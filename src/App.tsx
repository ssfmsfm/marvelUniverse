import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./component/mainPage/MainPage";
import Auth from "./component/auth/Auth";
import HeroesPage from "./component/heroesPage/HeroesPage";
import HeroPage from "./component/heroPage/HeroPage";
import ComicsPage from "./component/comicsPage/ComicsPage";
import ComicPage from "./component/comicPage/ComicPage";
import EventsPage from "./component/eventsPage/EventsPage";
import EventPage from "./component/eventPage/EventPage";


import './App.scss';
import Registration from "./component/registration/Registration";
import Favourites from "./component/favourites/Favourites";
import { useSelector } from "./component/hooks/useSelector";
import CreatorsPage from "./component/creatorsPage/CreatorsPage";
import CreatorPage from "./component/creatorPage/CreatorPage";


const App: React.FC = () => {
    const logged = useSelector(state => state.auth.logged);

    return (
        <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />} />
                {!logged &&
                    <Route path="/login" element={<Auth />} />
                }
                <Route path="/registration" element={<Registration />} />
                <Route path="/heroes">
                    <Route index element={<HeroesPage />} />
                    <Route path=":id" element={<HeroPage />} />
                </Route>
                <Route path="/comics">
                    <Route index element={<ComicsPage />} />
                    <Route path=":id" element={<ComicPage />} />
                </Route>
                <Route path="/events">
                    <Route index element={<EventsPage />} />
                    <Route path=":id" element={<EventPage />} />
                </Route>
                <Route path="/creators">
                    <Route index element={<CreatorsPage />} />
                    <Route path=":id" element={<CreatorPage />} />
                </Route>
                {logged &&
                    <Route path="/favourites" element={<Favourites />} />
                }
                <Route path="*" element={<Navigate to={"/"}/>} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
