import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ComicType from "../../types/ComicType";
import { fetchComics } from "./comicsThunks";


type StoreComicsType = {
    data: ComicType[],
    count: number,
    loading: boolean,
    error?: string,
}

const initialState: StoreComicsType = {
    data: [],
    count: 0,
    loading: false,
}

const ComicsSlice = createSlice({
    name: "comics",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchComics.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });
        builder.addCase(fetchComics.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
        builder.addCase(fetchComics.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });
    }
});

export const ComicsReducer = ComicsSlice.reducer;
export const ComicsActions = {
    ...ComicsSlice.actions,
    fetchComics,
};