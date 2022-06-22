import React, { useEffect, useReducer } from "react";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import HeroCard from "./heroCard/HeroCard";
import PageHeader from "../pageHeader/PageHeader";
import HeroesFilter from "./HeroesFilter";
import { HeroesFilterReducer, initialState } from "../../store/heroesPage/heroesFilterSlice";

import '../../App.scss';

type PropsType = {};

const HeroesPage: React.FC<PropsType> = () => {

    const [state, dispatch] = useReducer(HeroesFilterReducer, initialState);
    const { fetchHeroes } = useActions();
    const data = useSelector(state => state.heroes.data);
    const count = useSelector(state => state.heroes.count);
    const loading = useSelector(state => state.heroes.loading);
    const error = useSelector(state => state.heroes.error);

    useEffect(() => {
        fetchHeroes(state);
    }, [state]);

    return (
        <div className="results-page-wrap">
            <PageHeader />
            <HeroesFilter
                count={count}
                state={state}
                dispatch={dispatch}
            />
            <div className="results-wrap container">
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