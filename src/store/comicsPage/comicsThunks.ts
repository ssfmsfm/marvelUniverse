import axios from 'axios';
import ComicType from "../../types/ComicType";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, BASE_URL } from '../../helpers/apikey';

const URI = "/comics";

type FetchComicsType = {
    data: ComicType[],
    count: number,
}

export const fetchComics = createAsyncThunk<
        FetchComicsType,
        undefined,
        { rejectValue: string }
    >(
    "comics/fetchComics",
    async (_, thunkApi) => {

        let url = `${BASE_URL}${URI}?${API_KEY}`;

        try {
            const response = await axios.get(url)
            .then(res => res.data);
            return {
                data: response.data.results as ComicType[],
                count: response.data.count as number,
            }
        } catch(e: any) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
)