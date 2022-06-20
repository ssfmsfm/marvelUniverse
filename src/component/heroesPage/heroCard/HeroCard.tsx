import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import HeroType from '../../../types/HeroType';
import { useActions } from '../../hooks/useActions';
import { useSelector } from '../../hooks/useSelector';
import Image from "../../image/Image";

import {ReactComponent as FavoIcon} from "../../../assets/favo.svg";

import "./HeroCard.scss";



type PropsType = {
    data: HeroType,
}

const HeroCard: React.FC<PropsType> = ({data}) => {

    const { markHero } = useActions();
    const logged = useSelector(state => state.auth.logged);
    const favoHero = useSelector(state => state.heroes.favoHero);
    const isMarked = favoHero.includes(data.id);
    const handleClickMark = () => {
        return markHero(data.id);
    }
    return (
        <div className="hero-card-container">
            <Link to={`/heroes/${data.id}`} >
                <Image src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
                <p className="title">
                    {data.name}
                </p>
            </Link>
            {logged
            ?
                <IconButton className="icon-button" onClick={handleClickMark}>
                    <FavoIcon className={`icon ${isMarked ? "_marked" : ""}`}/>
                </IconButton>
            :
                null
            }
        </div>
    )
}

export default HeroCard;