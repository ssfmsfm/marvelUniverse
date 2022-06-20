import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HeroesOrderServer } from "../../component/heroesPage/HeroesFilterTypes";
import Storage from "../../helpers/Storage";
import HeroType from "../../types/HeroType";
import { fetchHeroes, fetchAllHeroes } from "./heroesThunks";


type StoreHeroesType = {
    data: HeroType[],
    count: number,
    loading: boolean,
    error?: string,
    favoHero: number[],
    page: number,
    limit: number,
    ordering: HeroesOrderServer,
    name?: string,
}

export const initialState: StoreHeroesType = {
    data: [],
    count: 0,
    loading: false,
    favoHero: Storage.get("favoHero", []),
    page: 1,
    limit: 8,
    ordering: HeroesOrderServer.nameAsc,
    name: "",
}

const heroesSlice = createSlice({
    name: "heroes",
    initialState,
    reducers: {
        setPostsLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
        },
        setPostsError: (state, { payload }: PayloadAction<string | undefined>) => {
            state.error = payload;
        },
        setName(state, { payload }: PayloadAction<string>) {
            state.page = 1;
            state.name = payload;
        },
        setLimit(state, { payload }: PayloadAction<number>) {
            state.page = 1;
            state.limit = payload;
        },
        setPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
        },
        setOrdering(state, { payload }: PayloadAction<HeroesOrderServer>) {
            // state.page;
            state.ordering = payload;
        },
        markHero: (state, { payload: postId }: PayloadAction<number>) => {
            if (state.favoHero.includes(postId)) {
                state.favoHero = state.favoHero.filter(id => id !==postId);
            } else {
                state.favoHero.push(postId);
            }

            Storage.set("favoHero", state.favoHero);
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
            console.log(state.data);
        });
    }
});

export const HeroesReducer = heroesSlice.reducer;
export const HeroesActions = {
    ...heroesSlice.actions,
    fetchHeroes,
    fetchAllHeroes,
};