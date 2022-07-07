import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { EventsFilterTypes, EventsOrder } from "../../component/eventsPage/EventsFilterTypes";

export const initialState: EventsFilterTypes = {
    page: 1,
    limit: 8,
    ordering: EventsOrder.nameAsc,
}

const eventsFilterSlice = createSlice({
    name: "eventsFilter",
    initialState,
    reducers: {
        setEventsLimit(state, { payload }: PayloadAction<number>) {
            state.page = 1;
            state.limit = payload;
        },
        setEventsPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
        },
        setEventsOrdering(state, { payload }: PayloadAction<EventsOrder>) {
            state.ordering = payload;
        },
        setEventsName(state, { payload }: PayloadAction<string>) {
            state.page = 1;
            state.searchName = payload;
        },
    },
});

export const EventsFilterReducer = eventsFilterSlice.reducer;
export const EventsFilterActions = {
    ...eventsFilterSlice.actions
};