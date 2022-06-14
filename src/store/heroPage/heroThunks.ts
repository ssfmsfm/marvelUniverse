import axios from 'axios';
import HeroType from "../../types/HeroType";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, BASE_URL } from '../../helpers/apikey';

const URI = "/characters";


export const fetchHero = createAsyncThunk<
        HeroType,
        string | undefined,
        { rejectValue: string }
    >(
    "hero/fetchHero",
    async ( id, { rejectWithValue }) => {

        let url = `${BASE_URL}${URI}/${id}?${API_KEY}`;

        try {
            const response = await axios.get(url)
            .then(res => res.data);
            return response.data.results[0]; // запрос возвращает массив с одним элементом
        } catch(e: any) {
            rejectWithValue(e.message);
        }
    }
);