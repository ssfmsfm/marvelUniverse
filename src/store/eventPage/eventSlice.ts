import { createSlice } from "@reduxjs/toolkit";
import EventType from "../../types/EventType";
import { fetchEvent } from "./eventThunks";


type StoreEventType = {
    data?: EventType | undefined,
    loading: boolean,
    error: boolean,
}

const initialState: StoreEventType = {
    data: undefined,
    loading: false,
    error: false
}

const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchEvent.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchEvent.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
        builder.addCase(fetchEvent.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload;
        });
    }
});

export const EventReducer = eventSlice.reducer;
export const EventActions = {
    ...eventSlice.actions,
    fetchEvent,
};