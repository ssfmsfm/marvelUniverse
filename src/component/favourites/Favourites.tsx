import React, { useEffect } from "react";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import PageHeader from "../pageHeader/PageHeader";


import './Favourites.scss';
import HeroCard from "../heroesPage/heroCard/HeroCard";
// import HeroesFilter from "./HeroesFilter";
// import { HeroesReducer, initialState } from "../../store/heroesPage/heroesSlice";
// import { useNavigate } from "react-router-dom";


type PropsType = {};

const Favourites: React.FC<PropsType> = () => {

    // const [state, dispatch] = useReducer(HeroesReducer, initialState)
    const { fetchHeroes } = useActions();

    const data = useSelector(state => state.heroes.data);
    const favoHero = useSelector(state => state.heroes.favoHero);
    const filteredData = data.filter(hero => favoHero.includes(hero.id));
    const loading = useSelector(state => state.heroes.loading);
    const error = useSelector(state => state.heroes.error);
    // const favoComic = useSelector(state => state.comics.favoComic);
    // const currentPageData = useSelector(state => state.heroes.currentPageData);

    // const page = useSelector(state => state.heroes.page);
    // const count = useSelector(state => state.heroes.count);
    


    useEffect(() => {
        fetchHeroes();
    }, []);


    return (
        <div className="heroes-page-wrap">
            <PageHeader />
            <div className="heroes-wrap container">
                <div className="cards">
                    {filteredData.map( item => (<HeroCard key={item.id} data={item} />))}
                </div>
                {loading && "loading..."}
                {error}
            </div>
        </div>
    )
}


export default Favourites;