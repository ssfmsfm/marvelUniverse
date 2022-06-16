import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import HeroType from "../../types/HeroType";
import { fetchHeroes } from "./heroesThunks";
import { HeroesOrder, InitialState, SortFilters } from "../../component/heroesPage/HeroesFilterTypes";
import { getCurrentPageData, getSortedData } from "./getFilterData";


type StoreHeroesType = {
    data: HeroType[],
    count: number,
    loading: boolean,
    error?: boolean,
    currentPageData: HeroType[],
    searchData: HeroType[],
    name?: string,
    ordering: HeroesOrder,
    pageSize: number,
    page: number,
}

export const initialState: StoreHeroesType = {
    data: [],
    count: 0,
    loading: false,
    error: false,
    currentPageData: [],
    searchData: [],
    ordering: HeroesOrder.idAsc,
    pageSize: 8,
    page: 1,
}

const heroesSlice = createSlice({
    name: "heroes",
    initialState,
    reducers: {
        // setHeroes: (state, { payload }: PayloadAction<HeroType[]>) => {
        //     state.data = payload;
        //     console.log(state);
        // },
        // setHeroesLoading: (state, { payload }: PayloadAction<boolean>) => {
        //     state.loading = payload;
        // },
        // setHeroesError: (state, { payload }: PayloadAction<boolean | undefined>) => {
        //     state.error = payload;
        // },
        setName(state, { payload }: PayloadAction<string>) {
            state.page = 1;
            const numValue = payload;
            state.searchData = state.data.filter(item => item.name.toLowerCase().includes(numValue.toLowerCase()));
            state.currentPageData = getCurrentPageData(state.searchData, state.page, state.pageSize);
            state.count = state.searchData.length;
            return state;
        },
        setPageSize(state, { payload }: PayloadAction<number>) {
            state.pageSize = payload;
            state.page = 1;
            state.currentPageData = getCurrentPageData(state.searchData, state.page, payload);
        },
        setPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
            state.currentPageData = getCurrentPageData(state.searchData, payload, state.pageSize);
        },
        sortData(state, { payload }: PayloadAction<SortFilters>) {
            state.ordering = payload.ordering;

            switch (payload.ordering) {
                case HeroesOrder.idAsc:
                    {
                        state.page = 1;
                        const sortedArr = getSortedData(state.searchData, HeroesOrder.idAsc);
                        state.currentPageData = getCurrentPageData(sortedArr, state.page, state.pageSize);
                        return state;
                    }
                    break;
                case HeroesOrder.idDesc:
                    {
                        state.page = 1;
                        const sortedArr = getSortedData(state.searchData, HeroesOrder.idDesc);
                        state.currentPageData = getCurrentPageData(sortedArr, state.page, state.pageSize);
                        return state;
                    }
                    break;
                    case HeroesOrder.nameAsc:
                        {
                            state.page = 1;
                            const sortedArr = getSortedData(state.searchData, HeroesOrder.nameAsc);
                            state.currentPageData = getCurrentPageData(sortedArr, state.page, state.pageSize);
                            return state;
                        }
                        break;
                    case HeroesOrder.nameDesc:
                        {
                            state.page = 1;
                            const sortedArr = getSortedData(state.searchData, HeroesOrder.nameDesc);
                            state.currentPageData = getCurrentPageData(sortedArr, state.page, state.pageSize);
                            return state;
                        }
                        break;
                default:
                    return state;
            }
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchHeroes.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });
        builder.addCase(fetchHeroes.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = true;
        });
        builder.addCase(fetchHeroes.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.searchData = state.data = payload.data;
            state.currentPageData = getCurrentPageData(state.data, state.page, state.pageSize)
            // state.data = state.searchData = state.currentPageData = payload.data;
            state.count = payload.count;
        });
    }
});

export const HeroesReducer = heroesSlice.reducer;
export const HeroesActions = {
    ...heroesSlice.actions,
    fetchHeroes,
};