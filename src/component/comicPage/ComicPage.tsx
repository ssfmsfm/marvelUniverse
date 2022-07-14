import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import Image from "../image/Image";
import PageHeader from "../pageHeader/PageHeader";




const ComicPage:  React.FC = () => {
    const { id } = useParams();

    const data = useSelector(state => state.comic.data);
    const loading = useSelector(state => state.comic.loading);
    const error = useSelector(state => state.comic.error);

    const { fetchComic } = useActions();


    useEffect(() => {
        fetchComic(id);
    }, [id]);

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    } else if (error) {
        return (
            <div>
                Error...
            </div>
        )
    }

    if (!data) {
        return null;
    }

    return (
        <div className="item-page-wrap">
            <PageHeader />
            <div className="item-page">
                <div className="item-page-info">
                    <div className="title">
                        {data.title}
                    </div>
                    <div className="text">
                        {data.description ? data.description : "No description for this comic."}
                    </div>
                </div>

                <Image src={`${data.thumbnail.path}/standard_fantastic.${data.thumbnail.extension}`}/>
            </div>
            <div className="copyright">Data provided by Marvel. © 2014 Marvel</div>
        </div>
    );
}


export default ComicPage;