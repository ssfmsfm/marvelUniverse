import React, { useEffect, useReducer } from "react";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import ComicCard from "./comicCard/ComicCard";
import PageHeader from "../pageHeader/PageHeader";
import ComicsFilter from "./ComicsFilter";
import { ComicsFilterReducer, initialState } from "../../store/comicsPage/comicsFilterSlice";

import '../../App.scss';

type PropsType = {};

const ComicsPage: React.FC<PropsType> = () => {

    const [state, dispatch] = useReducer(ComicsFilterReducer, initialState);
    const { fetchComics } = useActions();
    const data = useSelector(state => state.comics.data);
    const count = useSelector(state => state.comics.count);
    const loading = useSelector(state => state.comics.loading);
    const error = useSelector(state => state.comics.error);

    useEffect(() => {
        fetchComics(state);
    }, [state]);

    return (
        <div className="results-page-wrap">
            <PageHeader />
            <ComicsFilter
                count={count}
                state={state}
                dispatch={dispatch}
            />
            <div className="results-wrap container">
                <div className="cards">
                    {data.map( item => (<ComicCard key={item.id} data={item} />))}
                </div>
                {loading && "loading..."}
                {error}
            </div>
            <div className="copyright">Data provided by Marvel. © 2014 Marvel</div>
        </div>
    )
}


export default ComicsPage;