import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import EventType from "../../types/EventType";
import { EventsFilterTypes } from '../../component/eventsPage/EventsFilterTypes';
import { API_KEY, BASE_URL } from '../../helpers/apikey';

const URI = "/events";

type FetchEventsType = {
    data: EventType[],
    count: number,
}

export const fetchAllEvents = createAsyncThunk<
    FetchEventsType,
    undefined,
    { rejectValue: string }
    >(
    "events/fetchAllEvents",
    async (_, thunkApi) => {

        let url = `${BASE_URL}${URI}?limit=100&${API_KEY}`;

        try {
            const response = await axios.get(url)
            .then(res => res.data);
            return {
                data: response.data.results as EventType[],
                count: response.data.count as number,
            }
        } catch {
            return thunkApi.rejectWithValue("ServerError!!!")
        }
    }
);

export const fetchEvents = createAsyncThunk
    <
        FetchEventsType,
        EventsFilterTypes,
        { rejectValue: string }
    >
    (
    "events/fetchEvents",
    async ({ page, limit, searchName, ordering }, thunkApi) => {

        const offset = limit * (page - 1);
        let url = `${BASE_URL}${URI}?limit=${limit}&offset=${offset}&orderBy=${ordering}`;
        if(searchName) {
            url += `&nameStartsWith=${searchName}`;
        }
        url += `&${API_KEY}`;
        try {
            const response = await axios.get(url)
            .then(res => res.data);
            return {
                data: response.data.results as EventType[],
                count: response.data.total as number,
            }
        } catch {
            return thunkApi.rejectWithValue("ServerError!!!")
        }
    }
);