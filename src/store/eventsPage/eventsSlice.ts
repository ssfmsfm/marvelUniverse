import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { EventsOrder } from "../../component/eventsPage/EventsFilterTypes";
import Storage from "../../helpers/Storage";
import EventType from "../../types/EventType";
import { fetchEvents, fetchAllEvents } from "./eventsThunks";


type StoreEventsType = {
    data: EventType[],
    count: number,
    loading: boolean,
    error?: string,
    favoEvents: number[],
    page: number,
    limit: number,
    ordering: EventsOrder,
    searchName?: string,
}

export const initialState: StoreEventsType = {
    data: [],
    count: 0,
    loading: false,
    favoEvents: Storage.get("favoEvents", []),
    page: 1,
    limit: 8,
    ordering: EventsOrder.nameAsc,
    searchName: "",
}

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        setEventsName(state, { payload }: PayloadAction<string>) {
            state.page = 1;
            state.searchName = payload;
        },
        setEventsLimit(state, { payload }: PayloadAction<number>) {
            state.page = 1;
            state.limit = payload;
        },
        setEventsPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
        },
        setEventsOrdering(state, { payload }: PayloadAction<EventsOrder>) {
            state.page = 1;
            state.ordering = payload;
        },
        markEvent: (state, { payload: eventId }: PayloadAction<number>) => {
            if (state.favoEvents.includes(eventId)) {
                state.favoEvents = state.favoEvents.filter(id => id !== eventId);
            } else {
                state.favoEvents.push(eventId);
            }

            Storage.set("favoEvents", state.favoEvents);
        }
    },
    extraReducers: builder => {

        builder.addCase(fetchEvents.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchEvents.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchEvents.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });

        builder.addCase(fetchAllEvents.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchAllEvents.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchAllEvents.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });
    }
});

export const EventsReducer = eventsSlice.reducer;
export const EventsActions = {
    ...eventsSlice.actions,
    fetchEvents,
    fetchAllEvents,
};