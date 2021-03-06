import axios from 'axios';
import ComicType from "../../types/ComicType";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, API_KEY } from '../../helpers/apikey';


const URI = "/comics";

export const fetchComic = createAsyncThunk<
        ComicType,
        string | undefined,
        { rejectValue: string }
    >(
    "comic/fetchComic",
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