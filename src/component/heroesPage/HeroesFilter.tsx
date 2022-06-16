import React, { useEffect, useState } from 'react';
import { MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';
import { HeroesFilterTypes, HeroesOrder } from './HeroesFilterTypes';
import { useActions } from '../hooks/useActions';
import HeroType from '../../types/HeroType';
import CustomPagination from '../pagination/Pagination';


type PropsType = {
    count: number
    state: HeroesFilterTypes
    dispatch: any
    data: HeroType[]
};

const HeroesFilter: React.FC<PropsType> = ( { count, state, dispatch, data } ) => {

    const { setName, setPage, setPageSize, sortData } = useActions();

    const updateName = (value: string) => {
        dispatch(setName(value));
    };

    const handleChangeOrdering = (event: SelectChangeEvent) => {
        dispatch(sortData({ ordering: event.target.value as HeroesOrder, data: data }));
    };

    const handleChangePageSize = (event: SelectChangeEvent) => {
        dispatch(setPageSize(+event.target.value));
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
    };

    useEffect(() => {
        dispatch(setName);
        dispatch(setPageSize);
    }, [])


    return (
        <div className="controls-wrap container">
            <div className="controls">
                <div className="search-name control">
                    <input
                        className="input-search"
                        type="text"
                        placeholder="Search by name"
                        onChange={event => updateName(event.target.value)}
                    />
                </div>
                <div className="change-ordering control">
                    <span>Change ordering</span>
                    <Select
                        className="select"
                        value={state.ordering}
                        onChange={handleChangeOrdering}
                    >
                        <MenuItem value={HeroesOrder.idAsc}>ASC id</MenuItem>
                        <MenuItem value={HeroesOrder.idDesc}>DESC id</MenuItem>
                        <MenuItem value={HeroesOrder.nameAsc}>ASC name</MenuItem>
                        <MenuItem value={HeroesOrder.nameDesc}>DESC name</MenuItem>
                    </Select>
                </div>

                <div className="hero-on-page control">
                    <span>Heroes on one page</span>
                    <Select
                        className="select"
                        value={state.pageSize.toString()}
                        onChange={handleChangePageSize}
                    >
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={32}>32</MenuItem>
                    </Select>
                </div>
            </div>
            <CustomPagination
                    count={count}
                    page={state.page}
                    pageSize={state.pageSize}
                    handleChangePage={handleChangePage}
            />
        </div>
    )
}


export default HeroesFilter;