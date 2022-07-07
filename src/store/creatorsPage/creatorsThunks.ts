import axios from 'axios';
import CreatorType from "../../types/CreatorType";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, BASE_URL } from '../../helpers/apikey';
import { CreatorsFilterTypes } from '../../component/creatorsPage/CreatorsFilterTypes';

const URI = "/creators";

type FetchCreatorsType = {
    data: CreatorType[],
    count: number,
}

export const fetchAllCreators = createAsyncThunk<
        FetchCreatorsType,
        undefined,
        { rejectValue: string }
    >(
    "creators/fetchAllCreators",
    async (_, thunkApi) => {

        let url = `${BASE_URL}${URI}?limit=100&${API_KEY}`;

        try {
            const response = await axios.get(url)
            .then(res => res.data);
            return {
                data: response.data.results as CreatorType[],
                count: response.data.count as number,
            }
        } catch(e: any) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const fetchCreators = createAsyncThunk<
        FetchCreatorsType,
        CreatorsFilterTypes,
        { rejectValue: string }
    >(
    "creators/fetchCreators",
    async ( { page, limit, searchName, ordering}, thunkApi) => {

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
                data: response.data.results as CreatorType[],
                count: response.data.total as number,
            }
        } catch(e: any) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);