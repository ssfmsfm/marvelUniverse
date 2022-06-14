import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import HeroType from "../../types/HeroType";
import { fetchHeroes } from "./heroesThunks";


type StoreHeroesType = {
    data: HeroType[],
    loading: boolean,
    error?: string,
}

const initialState: StoreHeroesType = {
    data: [],
    loading: false,
}

const HeroesSlice = createSlice({
    name: "heroes",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchHeroes.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });
        builder.addCase(fetchHeroes.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
        builder.addCase(fetchHeroes.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
        });
    }
});

export const HeroesReducer = HeroesSlice.reducer;
export const HeroesActions = {
    ...HeroesSlice.actions,
    fetchHeroes,
};