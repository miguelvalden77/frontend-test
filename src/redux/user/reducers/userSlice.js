// src/reducers/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../../services/auth/auth';

// Crear una acción asíncrona
const loginUserActn = createAsyncThunk(
    'user/fetchUser',
    async (dataForm, { rejectWithValue }) => {
        try {
            const data = await loginUser(dataForm)
            console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const registerUserActn = createAsyncThunk(
    "user/registerUser",
    async (dataForm, { rejectWithValue }) => {
        try {
            const data = await registerUser(dataForm)
            console.log(data)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export { registerUserActn, loginUserActn }