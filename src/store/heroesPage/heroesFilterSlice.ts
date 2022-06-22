import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HeroesFilterTypes, HeroesOrder } from "../../component/heroesPage/HeroesFilterTypes";

export const initialState: HeroesFilterTypes = {
    page: 1,
    limit: 8,
    ordering: HeroesOrder.nameAsc,
}

const heroesFilterSlice = createSlice({
    name: "heroesFilter",
    initialState,
    reducers: {
        setHeroesLimit(state, { payload }: PayloadAction<number>) {
            state.page = 1;
            state.limit = payload;
        },
        setHeroesPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
        },
        setHeroesOrdering(state, { payload }: PayloadAction<HeroesOrder>) {
            state.ordering = payload;
        },
        setHeroesName(state, { payload }: PayloadAction<string>) {
            state.page = 1;
            state.searchName = payload;
        },
    },
});

export const HeroesFilterReducer = heroesFilterSlice.reducer;
export const HeroesFilterActions = {
    ...heroesFilterSlice.actions
};