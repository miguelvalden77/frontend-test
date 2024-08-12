import { createSlice } from "@reduxjs/toolkit";
import { loginUserActn, registerUserActn } from "./userSlice";
import { fulfilledRegister, fullfilledLogin, pendingLogin, pendingRegister, rejectedLogin, rejectedRegister } from "../builders";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            id: null,
            username: null,
            email: null
        },
        loading: false,
        error: null,
    },
    reducers: {
        // Puedes agregar reducers adicionales aquí si es necesario
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUserActn.pending, pendingRegister)
            .addCase(registerUserActn.fulfilled, fulfilledRegister)
            .addCase(registerUserActn.rejected, rejectedRegister)
            .addCase(loginUserActn.pending, pendingLogin)
            .addCase(loginUserActn.fulfilled, fullfilledLogin)
            .addCase(loginUserActn.rejected, rejectedLogin);
    },
});

export default userSlice.reducer;