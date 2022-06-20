import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HeroesFilterTypes, HeroesOrderServer } from "../../component/heroesPage/HeroesFilterTypes";


// type StoreHeroesType = {
//     data: HeroType[],
//     count: number,
//     loading: boolean,
//     error?: string,
//     favoHero: number[],
//     page: number,
//     limit: number,
//     ordering: HeroesOrderServer,
//     name?: string,
// }

export const initialState: HeroesFilterTypes = {
    page: 1,
    limit: 8,
    ordering: HeroesOrderServer.nameAsc,
}

const heroesFilterSlice = createSlice({
    name: "heroesFilter",
    initialState,
    reducers: {
        setLimit(state, { payload }: PayloadAction<number>) {
            state.page = 1;
            state.limit = payload;
        },
        setPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
        },
        setOrdering(state, { payload }: PayloadAction<HeroesOrderServer>) {
            state.ordering = payload;
        },
        setName(state, { payload }: PayloadAction<string>) {
            state.page = 1;
            state.name = payload;
        },
    },
    // extraReducers: builder => {
    //     builder.addCase(fetchHeroesServer.pending, (state) => {
    //         state.loading = true;
    //         state.error = undefined;
    //         state.data = [];
    //     });

    //     builder.addCase(fetchHeroesServer.rejected, (state, { payload }) => {
    //         state.loading = false;
    //         state.error = payload;
    //     });

    //     builder.addCase(fetchHeroesServer.fulfilled, (state, { payload }) => {
    //         state.loading = false;
    //         state.data = payload.data;
    //         state.count = payload.count;
    //     });
    // }
});

export const HeroesFilterReducer = heroesFilterSlice.reducer;
export const HeroesFilterActions = {
    ...heroesFilterSlice.actions
};