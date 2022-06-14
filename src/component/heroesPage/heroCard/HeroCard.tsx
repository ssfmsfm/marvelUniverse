import React from 'react';
import { Link } from 'react-router-dom';
import HeroType from '../../../types/HeroType';
import Image from "../../image/Image";

import "./HeroCard.scss";



type PropsType = {
    data: HeroType,
}

const HeroCard: React.FC<PropsType> = ({data}) => {

    return (
        <div className="hero-card-container">

            <Image src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>

            <Link to={`/heroes/${data.id}`} className="title">
                    {data.name}
            </Link>
        </div>
    )
}

export default HeroCard;