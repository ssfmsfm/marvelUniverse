import axios from 'axios';
import ComicType from "../../types/ComicType";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, BASE_URL } from '../../helpers/apikey';
import { ComicsFilterTypes } from '../../component/comicsPage/ComicsFilterTypes';

const URI = "/comics";

type FetchComicsType = {
    data: ComicType[],
    count: number,
}

export const fetchAllComics = createAsyncThunk<
        FetchComicsType,
        undefined,
        { rejectValue: string }
    >(
    "comics/fetchAllComics",
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
);

export const fetchComics = createAsyncThunk<
        FetchComicsType,
        ComicsFilterTypes,
        { rejectValue: string }
    >(
    "comics/fetchComics",
    async ( { page, limit, searchTitle, ordering}, thunkApi) => {

        const offset = limit * (page - 1);
        let url = `${BASE_URL}${URI}?limit=${limit}&offset=${offset}&orderBy=${ordering}`;
        if(searchTitle) {
            url += `&titleStartsWith=${searchTitle}`;
        }
        url += `&${API_KEY}`;
        try {
            const response = await axios.get(url)
            .then(res => res.data);
            return {
                data: response.data.results as ComicType[],
                count: response.data.total as number,
            }
        } catch(e: any) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);