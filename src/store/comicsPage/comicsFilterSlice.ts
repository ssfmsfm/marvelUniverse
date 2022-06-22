import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ComicsFilterTypes, ComicsOrder } from "../../component/comicsPage/ComicsFilterTypes";

export const initialState: ComicsFilterTypes = {
    page: 1,
    limit: 8,
    ordering: ComicsOrder.titleAsc,
}

const comicsFilterSlice = createSlice({
    name: "comicsFilter",
    initialState,
    reducers: {
        setComicsLimit(state, { payload }: PayloadAction<number>) {
            state.page = 1;
            state.limit = payload;
        },
        setComicsPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
        },
        setComicsOrdering(state, { payload }: PayloadAction<ComicsOrder>) {
            state.ordering = payload;
        },
        setComicsTitle(state, { payload }: PayloadAction<string>) {
            state.page = 1;
            state.searchTitle = payload;
        },
    },
});

export const ComicsFilterReducer = comicsFilterSlice.reducer;
export const ComicsFilterActions = {
    ...comicsFilterSlice.actions
};