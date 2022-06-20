import axios from 'axios';
import HeroType from "../../types/HeroType";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, BASE_URL } from '../../helpers/apikey';
import { HeroesFilterTypes } from '../../component/heroesPage/HeroesFilterTypes';

const URI = "/characters";


type FetchHeroesType = {
    data: HeroType[],
    count: number,
}

export const fetchAllHeroes = createAsyncThunk<
    FetchHeroesType,
    undefined,
    { rejectValue: string }
    >(
    "heroes/fetchAllHeroes",
    async (_, thunkApi) => {

        let url = `${BASE_URL}${URI}?${API_KEY}`;

        try {
            const response = await axios.get(url)
            .then(res => res.data);
            return {
                data: response.data.results as HeroType[],
                count: response.data.count as number,
            }
        } catch {
            return thunkApi.rejectWithValue("ServerError!!!")
        }
    }
);

export const fetchHeroes = createAsyncThunk
    <
        FetchHeroesType,
        HeroesFilterTypes,
        { rejectValue: string }
    >
    (
    "posts/fetchHeroes",
    async ({ page, limit, name, ordering }, thunkApi) => {

        const offset = limit * (page - 1);
        let url = `${BASE_URL}${URI}?limit=${limit}&offset=${offset}&orderBy=${ordering}`;
        if(name) {
            url += `&nameStartsWith=${name}`;
        }
        url += `&${API_KEY}`;
        try {
            const response = await axios.get(url)
            .then(res => res.data);
            console.log(response);
            return {
                data: response.data.results as HeroType[],
                count: response.data.total as number,
            }
        } catch {
            return thunkApi.rejectWithValue("ServerError!!!")
        }
    }
);