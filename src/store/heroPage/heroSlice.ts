import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import HeroType from "../../types/HeroType";
import { fetchHero } from "./heroThunks";


type StoreHeroType = {
    data?: HeroType | undefined,
    loading: boolean,
    error: boolean,
}

const initialState: StoreHeroType = {
    data: undefined,
    loading: false,
    error: false
}

const HeroSlice = createSlice({
    name: "hero",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchHero.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchHero.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
        builder.addCase(fetchHero.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload;
        });
    }
});

export const HeroReducer = HeroSlice.reducer;
export const HeroActions = {
    ...HeroSlice.actions,
    fetchHero,
};