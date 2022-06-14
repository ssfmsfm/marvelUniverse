import React, { useEffect, useReducer } from "react";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import HeroCard from "./heroCard/HeroCard";
import PageHeader from "../pageHeader/PageHeader";


import './HeroesPage.scss';

type PropsType = {};

const HeroesPage: React.FC<PropsType> = () => {

    const { fetchHeroes } = useActions();

    const data = useSelector(state => state.heroes.data);
    const loading = useSelector(state => state.heroes.loading);
    const error = useSelector(state => state.heroes.error);

    useEffect(() => {
        fetchHeroes();
    }, []);

    return (
        <div className="heroes-page-wrap">
            <PageHeader />
            <div className="heroes-wrap container">
                <div className="cards">
                    {data.map( item => (<HeroCard key={item.id} data={item} />))}
                </div>
                {loading && "loading..."}
                {error}
            </div>
        </div>
    )
}


export default HeroesPage;