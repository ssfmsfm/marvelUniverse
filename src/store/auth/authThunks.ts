import { CredentialsType } from './../../types/CredentialsType';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import ProfileType from "../../types/ProfileType";
import { createAsyncThunk } from '@reduxjs/toolkit';


export const registerUser = createAsyncThunk<ProfileType, CredentialsType, { rejectValue: string }>(
    "user/registerUser", async ({email: userEmail, password}, { rejectWithValue }) => {
        try {
            const auth = getAuth();
            const {user} = await createUserWithEmailAndPassword(auth, userEmail, password);
            const {email, uid: id, refreshToken: refresh}= user;
            return {email, id, refresh}
        } catch (e: any) {
            return rejectWithValue(e.message)
        }
    }
)

export const loginUser = createAsyncThunk<ProfileType, CredentialsType, { rejectValue: string }>(
    "user/loginUser", async ({email: userEmail, password}, { rejectWithValue }) => {
        try {
            const auth = getAuth();
            const {user} = await signInWithEmailAndPassword(auth, userEmail, password)
            const { email, uid: id, refreshToken: refresh } = user;
            // const { email, id, refresh } = user.toJSON() as ProfileType;
            return {email, id, refresh}
        } catch (e: any) {
            return rejectWithValue(e.message)
        }
    }
)
