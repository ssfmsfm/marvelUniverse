import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import Image from "../image/Image";
import PageHeader from "../pageHeader/PageHeader";




const EventPage: React.FC = () => {
    const { id } = useParams();

    const data = useSelector(state => state.event.data);
    const loading = useSelector(state => state.event.loading);
    const error = useSelector(state => state.event.error);

    const { fetchEvent } = useActions();


    useEffect(() => {
        fetchEvent(id);
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
            {/* { loading && <div>Loading...</div> }
            { error && <div>Error!</div> } */}
            {/* {
                data && */}
                <div className="item-page">
                    <div className="item-page-info">
                        <div className="title">
                            {data.title}
                        </div>
                        <div className="text">
                            {data.description ? data.description : "No description for this event."}
                        </div>
                    </div>

                    <Image src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
                </div>
            {/* } */}
        </div>
    );
}


export default EventPage;