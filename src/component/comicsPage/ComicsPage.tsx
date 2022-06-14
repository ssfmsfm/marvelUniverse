import React, { useEffect } from "react";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import ComicCard from "./comicCard/ComicCard";
import PageHeader from "../pageHeader/PageHeader";


import './ComicsPage.scss';

type PropsType = {};

const ComicsPage: React.FC<PropsType> = () => {

    const { fetchComics } = useActions();

    const data = useSelector(state => state.comics.data);
    const loading = useSelector(state => state.comics.loading);
    const error = useSelector(state => state.comics.error);

    useEffect(() => {
        fetchComics();
    }, []);

    return (
        <div className="comics-page-wrap">
            <PageHeader />
            <div className="comics-wrap container">
                <div className="cards">
                    {data.map( item => (<ComicCard key={item.id} data={item} />))}
                </div>
                {loading && "loading..."}
                {error}
            </div>
        </div>
    )
}


export default ComicsPage;