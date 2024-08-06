import { createSlice } from "@reduxjs/toolkit";
import { updateCreateTest } from "./testSlice";
import { updateCreateTestAct } from "../builders";

const testSlice = createSlice({
    name: 'test',
    initialState: {
        currentTest: null,
        createTest: null,
        loading: false,
        error: null,
    },
    reducers: {
        // Puedes agregar reducers adicionales aquí si es necesario
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateCreateTest.fulfilled, updateCreateTestAct);
    },
});

export default testSlice.reducer;