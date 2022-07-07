import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useSelector } from '../../hooks/useSelector';
import Image from "../../image/Image";
import ComicType from '../../../types/ComicType';
import {ReactComponent as FavoIcon} from "../../../assets/auth/favo.svg";
import { IconButton } from '@mui/material';


import "../../../App.scss";


type PropsType = {
    data: ComicType,
}

const ComicCard: React.FC<PropsType> = ({data}) => {

    const { markComic } = useActions();
    const logged = useSelector(state => state.auth.logged);
    const favoComics = useSelector(state => state.comics.favoComics);
    const isMarked = favoComics.includes(data.id);

    const handleClickMark = () => {
        return markComic(data.id);
    }

    return (
        <div className="result-card-container">
            <Link to={`/comics/${data.id}`} >
                <Image src={`${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`}/>
                <p className="title">
                    {data.title}
                </p>
            </Link>
            {
                logged
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

export default ComicCard;