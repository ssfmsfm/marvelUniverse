import axios from 'axios';
import CreatorType from "../../types/CreatorType";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, API_KEY } from '../../helpers/apikey';

const URI = "/creators";

export const fetchCreator = createAsyncThunk<
        CreatorType,
        string | undefined,
        { rejectValue: string }
    >(
    "creator/fetchCreator",
    async ( id, { rejectWithValue }) => {

        let url = `${BASE_URL}${URI}/${id}?${API_KEY}`;

        try {
            const response = await axios.get(url)
            .then(res => res.data);
            return response.data.results[0];
        } catch(e: any) {
            return rejectWithValue(e.message);
        }
    }
);