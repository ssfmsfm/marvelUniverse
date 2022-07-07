import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HeroesOrder } from "../../component/heroesPage/HeroesFilterTypes";
import Storage from "../../helpers/Storage";
import HeroType from "../../types/HeroType";
import { fetchHeroes, fetchAllHeroes } from "./heroesThunks";


type StoreHeroesType = {
    data: HeroType[],
    count: number,
    loading: boolean,
    error?: string,
    favoHeroes: number[],
    page: number,
    limit: number,
    ordering: HeroesOrder,
    searchName?: string,
}

export const initialState: StoreHeroesType = {
    data: [],
    count: 0,
    loading: false,
    favoHeroes: Storage.get("favoHeroes", []),
    page: 1,
    limit: 8,
    ordering: HeroesOrder.nameAsc,
    searchName: "",
}

const heroesSlice = createSlice({
    name: "heroes",
    initialState,
    reducers: {
        // setHeroesLoading: (state, { payload }: PayloadAction<boolean>) => {
        //     state.loading = payload;
        // },
        // setHeroesError: (state, { payload }: PayloadAction<string | undefined>) => {
        //     state.error = payload;
        // },
        setName(state, { payload }: PayloadAction<string>) {
            state.page = 1;
            state.searchName = payload;
        },
        setLimit(state, { payload }: PayloadAction<number>) {
            state.page = 1;
            state.limit = payload;
        },
        setPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
        },
        setOrdering(state, { payload }: PayloadAction<HeroesOrder>) {
            state.page = 1;
            state.ordering = payload;
        },
        markHero: (state, { payload: heroId }: PayloadAction<number>) => {
            if (state.favoHeroes.includes(heroId)) {
                state.favoHeroes = state.favoHeroes.filter(id => id !== heroId);
            } else {
                state.favoHeroes.push(heroId);
            }

            Storage.set("favoHeroes", state.favoHeroes);
        }
    },
    extraReducers: builder => {

        builder.addCase(fetchHeroes.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchHeroes.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchHeroes.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });

        builder.addCase(fetchAllHeroes.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchAllHeroes.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchAllHeroes.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });
    }
});

export const HeroesReducer = heroesSlice.reducer;
export const HeroesActions = {
    ...heroesSlice.actions,
    fetchHeroes,
    fetchAllHeroes,
};