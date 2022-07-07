import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import Image from "../image/Image";
import PageHeader from "../pageHeader/PageHeader";



const CreatorPage:  React.FC = () => {
    const { id } = useParams();

    const data = useSelector(state => state.creator.data);
    const loading = useSelector(state => state.creator.loading);
    const error = useSelector(state => state.creator.error);

    const { fetchCreator } = useActions();


    useEffect(() => {
        fetchCreator(id);
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
                        {data?.fullName}
                    </div>
                    <div className="text">

                        <ul>
                            {data.comics.items.map(({ resourceURI, name }) => {

                                const comicUrl = resourceURI.slice(resourceURI.indexOf("/comics"));
                                return (
                                    <li key={resourceURI}>
                                        <Link to={comicUrl} className="comicByCreator-link">
                                            {name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <Image src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
            </div>
        </div>
    );
}


export default CreatorPage;