import React, { useEffect, useReducer } from "react";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import CreatorCard from "./creatorCard/CreatorCard";
import PageHeader from "../pageHeader/PageHeader";
import CreatorsFilter from "./CreatorsFilter";
import { CreatorsFilterReducer, initialState } from "../../store/creatorsPage/creatorsFilterSlice";

import '../../App.scss';

type PropsType = {};

const CreatorsPage: React.FC<PropsType> = () => {

    const [state, dispatch] = useReducer(CreatorsFilterReducer, initialState);
    const { fetchCreators } = useActions();
    const data = useSelector(state => state.creators.data);
    const count = useSelector(state => state.creators.count);
    const loading = useSelector(state => state.creators.loading);
    const error = useSelector(state => state.creators.error);

    useEffect(() => {
        fetchCreators(state);
    }, [state]);

    return (
        <div className="results-page-wrap">
            <PageHeader />
            <CreatorsFilter
                count={count}
                state={state}
                dispatch={dispatch}
            />
            <div className="results-wrap container">
                <div className="cards">
                    {data.map( item => (<CreatorCard key={item.id} data={item} />))}
                </div>
                {loading && "loading..."}
                {error}
            </div>
        </div>
    )
}


export default CreatorsPage;