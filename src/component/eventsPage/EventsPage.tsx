import React, { useEffect, useReducer } from "react";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import EventCard from "./eventCard/EventCard";
import PageHeader from "../pageHeader/PageHeader";
import EventsFilter from "./EventsFilter";
import { EventsFilterReducer, initialState } from "../../store/eventsPage/eventsFilterSlice";

import '../../App.scss';

type PropsType = {};

const EventsPage: React.FC<PropsType> = () => {

    const [state, dispatch] = useReducer(EventsFilterReducer, initialState);
    const { fetchEvents } = useActions();
    const data = useSelector(state => state.events.data);
    const count = useSelector(state => state.events.count);
    const loading = useSelector(state => state.events.loading);
    const error = useSelector(state => state.events.error);

    useEffect(() => {
        fetchEvents(state);
    }, [state]);

    return (
        <div className="results-page-wrap">
            <PageHeader />
            <EventsFilter
                count={count}
                state={state}
                dispatch={dispatch}
            />
            <div className="results-wrap container">
                <div className="cards">
                    {data.map( item => (<EventCard key={item.id} data={item} />))}
                </div>
                {loading && <div className="loading">Loading...</div>}
                {error && <div className="error">{error}</div>}
            </div>
            <div className="copyright">Data provided by Marvel. © 2014 Marvel</div>
        </div>
    )
}


export default EventsPage;