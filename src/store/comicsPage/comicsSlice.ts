import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ComicsOrder } from "../../component/comicsPage/ComicsFilterTypes";
import Storage from "../../helpers/Storage";
import ComicType from "../../types/ComicType";
import { fetchComics, fetchAllComics } from "./comicsThunks";


type StoreComicsType = {
    data: ComicType[],
    count: number,
    loading: boolean,
    error?: string,
    favoComics: number[],
    page: number,
    limit: number,
    ordering: ComicsOrder,
    searchTitle?: string,
}

export const initialState: StoreComicsType = {
    data: [],
    count: 0,
    loading: false,
    favoComics: Storage.get("favoComics", []),
    page: 1,
    limit: 8,
    ordering: ComicsOrder.titleAsc,
    searchTitle: "",
}

const comicsSlice = createSlice({
    name: "comics",
    initialState,
    reducers: {
        setComicsTitle(state, { payload }: PayloadAction<string>) {
            state.page = 1;
            state.searchTitle = payload;
        },
        setComicsLimit(state, { payload }: PayloadAction<number>) {
            state.page = 1;
            state.limit = payload;
        },
        setComicsPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
        },
        setComicsOrdering(state, { payload }: PayloadAction<ComicsOrder>) {
            state.page = 1;
            state.ordering = payload;
        },
        markComic: (state, { payload: comicId }: PayloadAction<number>) => {
            if (state.favoComics.includes(comicId)) {
                state.favoComics = state.favoComics.filter(id => id !== comicId);
            } else {
                state.favoComics.push(comicId);
            }

            Storage.set("favoComics", state.favoComics);
        }
    },
    extraReducers: builder => {

        builder.addCase(fetchComics.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchComics.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchComics.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });

        builder.addCase(fetchAllComics.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchAllComics.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchAllComics.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });
    }
});

export const ComicsReducer = comicsSlice.reducer;
export const ComicsActions = {
    ...comicsSlice.actions,
    fetchComics,
    fetchAllComics,
};