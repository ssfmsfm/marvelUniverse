import { createSlice } from "@reduxjs/toolkit";
import CreatorType from "../../types/CreatorType";
import { fetchCreator } from "./creatorThunks";


type StoreCreatorType = {
    data?: CreatorType | undefined,
    loading: boolean,
    error: boolean,
}

const initialState: StoreCreatorType = {
    data: undefined,
    loading: false,
    error: false
}

const creatorSlice = createSlice({
    name: "creator",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCreator.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchCreator.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
        builder.addCase(fetchCreator.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload;
        });
    }
});

export const CreatorReducer = creatorSlice.reducer;
export const CreatorActions = {
    ...creatorSlice.actions,
    fetchCreator,
};