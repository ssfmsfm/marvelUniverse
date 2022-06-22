import React from 'react';
import { useActions } from '../hooks/useActions';
import useTranslate from '../hooks/useTranslate';
import { ComicsFilterTypes, ComicsOrder } from './ComicsFilterTypes';
import { MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';



type PropsType = {
    count: number
    state: ComicsFilterTypes,
    dispatch: any
};

const ComicsFilter: React.FC<PropsType> = ( { count, state, dispatch } ) => {

    const { t } = useTranslate();
    const { setComicsTitle, setComicsPage, setComicsLimit, setComicsOrdering } = useActions();

    const updateTitle = (value: string) => {
        dispatch(setComicsTitle(value));
    };

    const handleChangeOrdering = (event: SelectChangeEvent) => {
        dispatch(setComicsOrdering(event.target.value as ComicsOrder))
    };

    const handleChangeLimit = (event: SelectChangeEvent) => {
        dispatch(setComicsLimit(+event.target.value));
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setComicsPage(value));
    };


    return (
        <div className="controls-wrap container">
            <div className="controls">
                <div className="search-name control">
                    <input
                        className="input-search"
                        type="text"
                        placeholder={t("searchByTitle")}
                        value={state.searchTitle?.toString()}
                        onChange={event => updateTitle(event.target.value)}
                    />
                </div>
                <div className="change-ordering control">
                    <span>{t("changeOrdering")}</span>
                    <Select
                        className="select"
                        value={state.ordering}
                        onChange={handleChangeOrdering}
                    >
                        <MenuItem value={ComicsOrder.titleAsc}>{t("titleAsc")}</MenuItem>
                        <MenuItem value={ComicsOrder.titleDesc}>{t("titleDesc")}</MenuItem>
                        <MenuItem value={ComicsOrder.modiAsc}>{t("modiAsc")}</MenuItem>
                        <MenuItem value={ComicsOrder.modiDesc}>{t("modiDesc")}</MenuItem>
                    </Select>
                </div>

                <div className="comics-on-page control">
                    <span>{t("numberOfComics")}</span>
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


export default ComicsFilter;