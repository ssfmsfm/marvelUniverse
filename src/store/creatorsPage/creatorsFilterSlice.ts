import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CreatorsFilterTypes, CreatorsOrder } from "../../component/creatorsPage/CreatorsFilterTypes";

export const initialState: CreatorsFilterTypes = {
    page: 1,
    limit: 8,
    ordering: CreatorsOrder.nameAsc,
}

const creatorsFilterSlice = createSlice({
    name: "creatorsFilter",
    initialState,
    reducers: {
        setCreatorsLimit(state, { payload }: PayloadAction<number>) {
            state.page = 1;
            state.limit = payload;
        },
        setCreatorsPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
        },
        setCreatorsOrdering(state, { payload }: PayloadAction<CreatorsOrder>) {
            state.ordering = payload;
        },
        setCreatorsName(state, { payload }: PayloadAction<string>) {
            state.page = 1;
            state.searchName = payload;
        },
    },
});

export const CreatorsFilterReducer = creatorsFilterSlice.reducer;
export const CreatorsFilterActions = {
    ...creatorsFilterSlice.actions
};