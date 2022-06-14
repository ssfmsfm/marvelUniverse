import React from 'react';
import { Link } from 'react-router-dom';
import ComicType from '../../../types/ComicType';
import Image from "../../image/Image";

import "./ComicCard.scss";



type PropsType = {
    data: ComicType,
}

const ComicCard: React.FC<PropsType> = ({data}) => {

    return (
        <div className="comic-card-container">

            <Image src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>

            <Link to={`/comics/${data.id}`} className="title">
                    {data.title}
            </Link>
        </div>
    )
}

export default ComicCard;