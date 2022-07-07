import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CreatorsOrder } from "../../component/creatorsPage/CreatorsFilterTypes";
import Storage from "../../helpers/Storage";
import CreatorType from "../../types/CreatorType";
import { fetchCreators, fetchAllCreators } from "./creatorsThunks";


type StoreCreatorsType = {
    data: CreatorType[],
    count: number,
    loading: boolean,
    error?: string,
    favoCreators: number[],
    page: number,
    limit: number,
    ordering: CreatorsOrder,
    searchName?: string,
}

export const initialState: StoreCreatorsType = {
    data: [],
    count: 0,
    loading: false,
    favoCreators: Storage.get("favoCreators", []),
    page: 1,
    limit: 8,
    ordering: CreatorsOrder.nameAsc,
    searchName: "",
}

const creatorsSlice = createSlice({
    name: "creators",
    initialState,
    reducers: {
        setCreatorsTitle(state, { payload }: PayloadAction<string>) {
            state.page = 1;
            state.searchName = payload;
        },
        setCreatorsLimit(state, { payload }: PayloadAction<number>) {
            state.page = 1;
            state.limit = payload;
        },
        setCreatorsPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
        },
        setCreatorsOrdering(state, { payload }: PayloadAction<CreatorsOrder>) {
            state.page = 1;
            state.ordering = payload;
        },
        markCreator: (state, { payload: creatorId }: PayloadAction<number>) => {
            if (state.favoCreators.includes(creatorId)) {
                state.favoCreators = state.favoCreators.filter(id => id !== creatorId);
            } else {
                state.favoCreators.push(creatorId);
            }

            Storage.set("favoCreators", state.favoCreators);
        }
    },
    extraReducers: builder => {

        builder.addCase(fetchCreators.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchCreators.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchCreators.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });

        builder.addCase(fetchAllCreators.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchAllCreators.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchAllCreators.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });
    }
});

export const CreatorsReducer = creatorsSlice.reducer;
export const CreatorsActions = {
    ...creatorsSlice.actions,
    fetchCreators,
    fetchAllCreators,
};