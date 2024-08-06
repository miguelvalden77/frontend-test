// src/reducers/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../../services/auth/auth';

// Crear una acción asíncrona
const updateCreateTest = createAsyncThunk(
    'test/updateTest',
    async (dataTest, { rejectWithValue }) => {
        try {
            return dataTest
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export { updateCreateTest }