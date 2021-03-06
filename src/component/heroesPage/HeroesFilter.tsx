import React from 'react';
import { useActions } from '../hooks/useActions';
import useTranslate from '../hooks/useTranslate';
import { HeroesFilterTypes, HeroesOrder } from './HeroesFilterTypes';
import { MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';


type PropsType = {
    count: number
    state: HeroesFilterTypes,
    dispatch: any
};

const HeroesFilter: React.FC<PropsType> = ( { count, state, dispatch } ) => {

    const { t } = useTranslate();
    const { setHeroesName, setHeroesPage, setHeroesLimit, setHeroesOrdering } = useActions();

    const updateName = (value: string) => {
        dispatch(setHeroesName(value));
    };

    const handleChangeOrdering = (event: SelectChangeEvent) => {
        dispatch(setHeroesOrdering(event.target.value as HeroesOrder))
    };

    const handleChangeLimit = (event: SelectChangeEvent) => {
        dispatch(setHeroesLimit(+event.target.value));
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setHeroesPage(value));
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
                        <MenuItem value={HeroesOrder.nameAsc}>{t("nameAsc")}</MenuItem>
                        <MenuItem value={HeroesOrder.nameDesc}>{t("nameDesc")}</MenuItem>
                        <MenuItem value={HeroesOrder.modiAsc}>{t("modiAsc")}</MenuItem>
                        <MenuItem value={HeroesOrder.modiDesc}>{t("modiDesc")}</MenuItem>
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