import axios from 'axios';
import HeroType from "../../types/HeroType";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, BASE_URL } from '../../helpers/apikey';

const URI = "/characters";


type FetchHeroesType = {
    data: HeroType[],
    count: number,
}

export const fetchHeroes = createAsyncThunk<
    FetchHeroesType,
    undefined,
    { rejectValue: string }
    >(
    "heroes/fetchHeroes",
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