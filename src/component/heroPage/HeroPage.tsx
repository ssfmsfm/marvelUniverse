import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import Image from "../image/Image";
import PageHeader from "../pageHeader/PageHeader";



const HeroPage:  React.FC = () => {
    const { id } = useParams();

    const data = useSelector(state => state.hero.data);
    const loading = useSelector(state => state.hero.loading);
    const error = useSelector(state => state.hero.error);

    const { fetchHero } = useActions();


    useEffect(() => {
        fetchHero(id);
    }, [id]);

    if (loading) {
        return (
            <div className="loading">
                Loading...
            </div>
        )
    } else if (error) {
        return (
            <div className="error">
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
                        {data.name}
                    </div>
                    <div className="text">
                        {data.description ? data.description : "No description for this character."}
                    </div>
                </div>

                <Image src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
            </div>
        </div>
    );
}


export default HeroPage;