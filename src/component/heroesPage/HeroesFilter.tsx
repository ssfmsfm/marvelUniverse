import React from 'react';
import { MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';
import { HeroesFilterTypes, HeroesOrderServer } from './HeroesFilterTypes';
import { useActions } from '../hooks/useActions';
import useTranslate from '../hooks/useTranslate';


type PropsType = {
    count: number
    state: HeroesFilterTypes,
    dispatch: any
};

const HeroesFilter: React.FC<PropsType> = ( { count, state, dispatch } ) => {

    const { t } = useTranslate();
    const { setName, setPage, setLimit, setOrdering } = useActions();

    const updateName = (value: string) => {
        dispatch(setName(value));
    };

    const handleChangeOrdering = (event: SelectChangeEvent) => {
        dispatch(setOrdering(event.target.value as HeroesOrderServer))
    };

    const handleChangeLimit = (event: SelectChangeEvent) => {
        dispatch(setLimit(+event.target.value));
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
    };

    // useEffect(() => {
    //     dispatch(setName);
    //     dispatch(setPageSize);
    // }, [])


    return (
        <div className="controls-wrap container">
            <div className="controls">
                <div className="search-name control">
                    <input
                        className="input-search"
                        type="text"
                        placeholder={t("searchByName")}
                        value={state.name?.toString()}
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
                        <MenuItem value={HeroesOrderServer.nameAsc}>{t("nameAsc")}</MenuItem>
                        <MenuItem value={HeroesOrderServer.nameDesc}>{t("nameDesc")}</MenuItem>
                        <MenuItem value={HeroesOrderServer.modiAsc}>{t("modiAsc")}</MenuItem>
                        <MenuItem value={HeroesOrderServer.modiDesc}>{t("modiDesc")}</MenuItem>
                    </Select>
                </div>

                <div className="hero-on-page control">
                    <span>{t("numberOfHeroes")}</span>
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


export default HeroesFilter;