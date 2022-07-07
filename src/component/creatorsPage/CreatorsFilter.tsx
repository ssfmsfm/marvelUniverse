import React from 'react';
import { useActions } from '../hooks/useActions';
import useTranslate from '../hooks/useTranslate';
import { CreatorsFilterTypes, CreatorsOrder } from './CreatorsFilterTypes';
import { MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';



type PropsType = {
    count: number
    state: CreatorsFilterTypes,
    dispatch: any
};

const CreatorsFilter: React.FC<PropsType> = ( { count, state, dispatch } ) => {

    const { t } = useTranslate();
    const { setCreatorsName, setCreatorsPage, setCreatorsLimit, setCreatorsOrdering } = useActions();

    const updateName = (value: string) => {
        dispatch(setCreatorsName(value));
    };

    const handleChangeOrdering = (event: SelectChangeEvent) => {
        dispatch(setCreatorsOrdering(event.target.value as CreatorsOrder))
    };

    const handleChangeLimit = (event: SelectChangeEvent) => {
        dispatch(setCreatorsLimit(+event.target.value));
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCreatorsPage(value));
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
                        <MenuItem value={CreatorsOrder.nameAsc}>{t("nameAsc")}</MenuItem>
                        <MenuItem value={CreatorsOrder.nameDesc}>{t("nameDesc")}</MenuItem>
                        <MenuItem value={CreatorsOrder.modiAsc}>{t("modiAsc")}</MenuItem>
                        <MenuItem value={CreatorsOrder.modiDesc}>{t("modiDesc")}</MenuItem>
                    </Select>
                </div>

                <div className="creators-on-page control">
                    <span>{t("numberOfCreators")}</span>
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


export default CreatorsFilter;