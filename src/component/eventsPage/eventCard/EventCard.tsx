import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useSelector } from '../../hooks/useSelector';
import Image from "../../image/Image";
import EventType from '../../../types/EventType';
import {ReactComponent as FavoIcon} from "../../../assets/auth/favo.svg";
import { IconButton } from '@mui/material';


import "../../../App.scss";


type PropsType = {
    data: EventType,
}

const EventCard: React.FC<PropsType> = ({data}) => {

    const { markEvent } = useActions();
    const logged = useSelector(state => state.auth.logged);
    const favoEvents = useSelector(state => state.events.favoEvents);
    const isMarked = favoEvents.includes(data.id);

    const handleClickMark = () => {
        return markEvent(data.id);
    }

    return (
        <div className="result-card-container">
            <Link to={`/events/${data.id}`} >
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

export default EventCard;