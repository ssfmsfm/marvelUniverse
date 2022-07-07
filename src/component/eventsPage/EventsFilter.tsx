import React from 'react';
import { useActions } from '../hooks/useActions';
import useTranslate from '../hooks/useTranslate';
import { EventsFilterTypes, EventsOrder } from './EventsFilterTypes';
import { MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';


type PropsType = {
    count: number
    state: EventsFilterTypes,
    dispatch: any
};

const EventsFilter: React.FC<PropsType> = ( { count, state, dispatch } ) => {

    const { t } = useTranslate();
    const { setEventsName, setEventsPage, setEventsLimit, setEventsOrdering } = useActions();

    const updateName = (value: string) => {
        dispatch(setEventsName(value));
    };

    const handleChangeOrdering = (event: SelectChangeEvent) => {
        dispatch(setEventsOrdering(event.target.value as EventsOrder))
    };

    const handleChangeLimit = (event: SelectChangeEvent) => {
        dispatch(setEventsLimit(+event.target.value));
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setEventsPage(value));
    };


    return (
        <div className="controls-wrap container">
            <div className="controls">
                <div className="search-name control">
                    <input
                        className="input-search"
                        type="text"
                        placeholder={t("searchByName")}
                        value={state.searchName?.toString()}
                        onChange={event => updateName(event.target.value)}
                    />
                </div>
                <div className="change-ordering control">
                    <span>{t("changeOrdering")}</span>
                    <Select
                        className="select"
                        value={state.ordering}
                        onChange={handleChangeOrdering}
                    >
                        <MenuItem value={EventsOrder.nameAsc}>{t("nameAsc")}</MenuItem>
                        <MenuItem value={EventsOrder.nameDesc}>{t("nameDesc")}</MenuItem>
                        <MenuItem value={EventsOrder.modiAsc}>{t("modiAsc")}</MenuItem>
                        <MenuItem value={EventsOrder.modiDesc}>{t("modiDesc")}</MenuItem>
                    </Select>
                </div>

                <div className="events-on-page control">
                    <span>{t("numberOfEvents")}</span>
                    <Select
                        className="select"
                        value={state.limit.toString()}
                        onChange={handleChangeLimit}
                    >
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={32}>32</MenuItem>
                    </Select>
                </div>
            </div>
            <Pagination
                className="pagination"
                page={state.page}
                onChange={handleChangePage}
                count={Math.ceil(count / state.limit)}
            />
        </div>
    )
}


export default EventsFilter;