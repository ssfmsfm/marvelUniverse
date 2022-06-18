import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Storage from "../../helpers/Storage";
import ProfileType from "../../types/ProfileType";
import { registerUser, loginUser } from "./authThunks";

type StoreAuthType = {
    // refresh?: string,
    profile: ProfileType,
    loading: boolean,
    error?: boolean
    logged: boolean
}

const initialState: StoreAuthType = {
    // refresh: Storage.get("refresh", undefined),
    profile: {
        email: "",
        id: "",
        refresh: "",
    },
    logged: !!Storage.get("userLogged", false),
    loading: false,
    error: false
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // setProfile(state, { payload }: PayloadAction<ProfileType>) {
        //     state.profile = payload;

        // },
        logout(state) {
            state.profile = {
                email: "",
                id: "",
                refresh: "",
            }
            state.logged = false;
            Storage.remove("userLogged");
        },
        setAuthLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload
        },
        setAuthError: (state, { payload }: PayloadAction<boolean>) => {
            state.error = payload
        },
        clearError(state) {
            state.error = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.error = false
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state, {payload}: PayloadAction<ProfileType>) => {
                state.profile = payload;
                // state.profile.email = payload.email;
                // state.profile.id = payload.id;
                // state.profile.refresh = payload.refresh;
                state.logged = true;
                state.loading = false;
                Storage.set("userLogged", true);
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.error = true;
                state.loading = false;
                alert(payload);
            })

            .addCase(loginUser.pending, (state) => {
                state.error =  false;
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, {payload}: PayloadAction<ProfileType>) => {
                state.profile = payload;
                // state.profile.email = payload.email;
                // state.profile.id = payload.id;
                // state.profile.refresh = payload.refresh;
                state.logged = true;
                state.loading = false;
                Storage.set("userLogged", true);
            })
            .addCase(loginUser.rejected, (state) => {
                state.error =  true;
                state.loading = false;
            })
    }
});

export const AuthActions = AuthSlice.actions;

export const AuthReducer = AuthSlice.reducer;