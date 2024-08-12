// src/reducers/userSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';

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

const updateCurrentTest = createAsyncThunk(
    'test/updateCurrentTest',
    async (dataTest, { rejectWithValue }) => {
        try {
            return dataTest
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const updateCurrentPreguntas = createAsyncThunk(
    'test/updateTestPreguntas',
    async (dataTest, { rejectWithValue }) => {
        try {
            return dataTest
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export { updateCreateTest, updateCurrentTest, updateCurrentPreguntas }