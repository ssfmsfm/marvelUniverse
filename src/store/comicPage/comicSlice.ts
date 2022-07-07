import { createSlice } from "@reduxjs/toolkit";
import ComicType from "../../types/ComicType";
import { fetchComic } from "./comicThunks";


type StoreComicType = {
    data?: ComicType | undefined,
    loading: boolean,
    error: boolean,
}

const initialState: StoreComicType = {
    data: undefined,
    loading: false,
    error: false
}

const comicSlice = createSlice({
    name: "comic",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchComic.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchComic.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
        builder.addCase(fetchComic.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload;
        });
    }
});

export const ComicReducer = comicSlice.reducer;
export const ComicActions = {
    ...comicSlice.actions,
    fetchComic,
};