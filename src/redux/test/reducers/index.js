import { createSlice } from "@reduxjs/toolkit";
import { updateCreateTest, updateCurrentPreguntas, updateCurrentTest } from "./testSlice";
import { updateCreateTestAct, updateTestAct, updateTestPreguntas } from "../builders";

const testSlice = createSlice({
    name: 'test',
    initialState: {
        currentTest: {
            titulo: "",
            descripcion: "",
            categoria: "",
            preguntas: []
        },
        createTest: {
            titulo: "",
            descripcion: "",
            categoria: "",
            preguntas: []
        },
        loading: false,
        error: null,
    },
    reducers: {
        // Puedes agregar reducers adicionales aquí si es necesario
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateCreateTest.fulfilled, updateCreateTestAct)
            .addCase(updateCurrentTest.fulfilled, updateTestAct)
            .addCase(updateCurrentPreguntas.fulfilled, updateTestPreguntas);
    },
});

export default testSlice.reducer;