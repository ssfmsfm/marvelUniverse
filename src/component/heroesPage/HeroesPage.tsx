import React, { useEffect, useReducer } from "react";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import HeroCard from "./heroCard/HeroCard";
import PageHeader from "../pageHeader/PageHeader";


import './HeroesPage.scss';
import HeroesFilter from "./HeroesFilter";
import { HeroesReducer, initialState } from "../../store/heroesPage/heroesSlice";
import { useNavigate } from "react-router-dom";


type PropsType = {};

const HeroesPage: React.FC<PropsType> = () => {

    const [state, dispatch] = useReducer(HeroesReducer, initialState)
    const { fetchHeroes } = useActions();

    const data = useSelector(state => state.heroes.data);
    const currentPageData = useSelector(state => state.heroes.currentPageData);

    const page = useSelector(state => state.heroes.page);
    const count = useSelector(state => state.heroes.count);
    const loading = useSelector(state => state.heroes.loading);
    const error = useSelector(state => state.heroes.error);


    useEffect(() => {
        fetchHeroes();
        console.log(currentPageData);
    }, []);


    return (
        <div className="heroes-page-wrap">
            <PageHeader />
            <HeroesFilter
                count={count}
                state={state}
                dispatch={dispatch}
                data={data}
            />
            <div className="heroes-wrap container">
                <div className="cards">
                    {currentPageData.map( item => (<HeroCard key={item.id} data={item} />))}
                </div>
                {loading && "loading..."}
                {error}
            </div>
        </div>
    )
}


export default HeroesPage;