import React, { useEffect } from "react";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import PageHeader from "../pageHeader/PageHeader";
import HeroCard from "../heroesPage/heroCard/HeroCard";


import '../../App.scss';
import useTranslate from "../hooks/useTranslate";
import ComicCard from "../comicsPage/comicCard/ComicCard";
import EventCard from "../eventsPage/eventCard/EventCard";
import CreatorCard from "../creatorsPage/creatorCard/CreatorCard";
// import { Box, Tab, Tabs, TabPanel } from "@mui/material";

type PropsType = {};

const Favourites: React.FC<PropsType> = () => {

    const { fetchAllHeroes, fetchAllComics, fetchAllEvents, fetchAllCreators } = useActions();
    const { t } = useTranslate();

    const dataHeroes = useSelector(state => state.heroes.data);
    const favoHeroes = useSelector(state => state.heroes.favoHeroes);

    const dataComics = useSelector(state => state.comics.data);
    const favoComics = useSelector(state => state.comics.favoComics);

    const dataEvents = useSelector(state => state.events.data);
    const favoEvents = useSelector(state => state.events.favoEvents);

    const dataCreators = useSelector(state => state.creators.data);
    const favoCreators = useSelector(state => state.creators.favoCreators);

    const loading = useSelector(state => state.heroes.loading);
    const error = useSelector(state => state.heroes.error);

    const filteredDataHeroes = dataHeroes.filter(hero => favoHeroes.includes(hero.id));
    const filteredDataComics = dataComics.filter(comic => favoComics.includes(comic.id));
    const filteredDataEvents = dataEvents.filter(event => favoEvents.includes(event.id));
    const filteredDataCreators = dataCreators.filter(creator => favoCreators.includes(creator.id));

    useEffect(() => {
        fetchAllHeroes();
        fetchAllComics();
        fetchAllEvents();
        fetchAllCreators();
    }, []);


    return (
        <div className="results-page-wrap">
            <PageHeader />
            <div className="results-wrap container">
                <h3>Heroes</h3>
                <div className="cards">
                    {filteredDataHeroes.map( item => (<HeroCard key={item.id} data={item} />))}
                </div>
                <h3>Comics</h3>
                <div className="cards">
                    {filteredDataComics.map( item => (<ComicCard key={item.id} data={item} />))}
                </div>
                <h3>Events</h3>
                <div className="cards">
                    {filteredDataEvents.map( item => (<EventCard key={item.id} data={item} />))}
                </div>
                <h3>Creators</h3>
                <div className="cards">
                    {filteredDataCreators.map( item => (<CreatorCard key={item.id} data={item} />))}
                </div>
                {loading && "loading..."}
                {error}
            </div>
        </div>
    )
}

export default Favourites;


// import React, { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import { useSelector } from '../hooks/useSelector';
// import { useActions } from '../hooks/useActions';
// import HeroCard from '../heroesPage/heroCard/HeroCard';
// import ComicCard from '../comicsPage/comicCard/ComicCard';

// import '../../App.scss';
// import PageHeader from '../pageHeader/PageHeader';

// type PropsType = {};

// const Favourites: React.FC<PropsType> = () => {
//     const { fetchAllHeroes, fetchAllComics } = useActions();

//     const [value, setValue] = useState("comics");

//     useEffect(() => {
//         fetchAllHeroes();
//         fetchAllComics();
//     }, []);

//     const favoHeroes = useSelector(state => state.heroes.favoHeroes);
//     const favoComics = useSelector(state => state.comics.favoComics);
//     const dataHeroes = useSelector(state => state.heroes.data);
//     const dataComics = useSelector(state => state.comics.data);
//     console.log(dataComics);

//     const filteredDataHeroes = dataHeroes.filter(hero => favoHeroes.includes(hero.id));
//     const filteredDataComics = dataComics.filter(comic => favoComics.includes(comic.id));
//     // let filteredDataHeroes = [];
//     // let filteredData: any = [];

//     const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//         setValue(newValue);
//         console.log(filteredDataComics);
//     }



//     return (
//         <div className="results-page-wrap">
//                 <PageHeader />
//                 <div className="results-wrap container">
//                     <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
//                         <Tabs value={value} onChange={handleChange} centered>
//                             <Tab label="Heroes" value="heroes"/>
//                             <Tab label="Comics" value="comics"/>
//                             {/* <Tab label="Stories" value="stories"/> */}
//                         </Tabs>
//                         <div className="cards">
//                             {
//                                 value === "heroes"
//                             ?
//                                 <>
//                                         {filteredDataHeroes.map( item => (<HeroCard key={item.id} data={item} />))}
//                                 </>
//                             :
//                                 <>
//                                     {filteredDataComics.map( item => (<ComicCard key={item.id} data={item} />))}
//                                 </>
//                             }
//                         </div>
//                     </Box>
//                 </div>
//         </div>
//     );
// }

// export default Favourites;

