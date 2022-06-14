import axios from 'axios';
import ComicType from "../../types/ComicType";
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = "https://gateway.marvel.com/v1/public/comics";
const API_KEY = "ts=1&apikey=2dde210826e26cf72eb2951408286268&hash=7a2b9ba391c8901832ce990064b4929f";



export const fetchComic = createAsyncThunk<
        ComicType,
        string | undefined,
        { rejectValue: string }
    >(
    "comic/fetchComic",
    async ( id, { rejectWithValue }) => {

        let url = `${URL}/${id}?${API_KEY}`;

        try {
            const response = await axios.get(url)
            .then(res => res.data);
            return response.data.results[0];
        } catch(e: any) {
            return rejectWithValue(e.message);
        }
    }
);