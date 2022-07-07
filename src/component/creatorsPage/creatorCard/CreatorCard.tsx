import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useSelector } from '../../hooks/useSelector';
import Image from "../../image/Image";
import CreatorType from '../../../types/CreatorType';
import {ReactComponent as FavoIcon} from "../../../assets/auth/favo.svg";
import { IconButton } from '@mui/material';


import "../../../App.scss";


type PropsType = {
    data: CreatorType,
}

const CreatorCard: React.FC<PropsType> = ({ data }) => {

    const { markCreator } = useActions();
    const logged = useSelector(state => state.auth.logged);
    const favoCreators = useSelector(state => state.creators.favoCreators);
    const isMarked = favoCreators.includes(data.id);

    const handleClickMark = () => {
        return markCreator(data.id);
    }

    return (
        <div className="result-card-container">
            <Link to={`/creators/${data.id}`} >
                <Image src={`${data.thumbnail.path}/standard_fantastic.${data.thumbnail.extension}`}/>
                <p className="title">
                    {data.fullName}
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

export default CreatorCard;