// Register
const pendingRegister = (state) => {
    state.loading = true;
    state.error = null;
}

const fulfilledRegister = (state, action) => {
    state.loading = false;
    console.log(action.payload)
    state.user = action.payload;
}

const rejectedRegister = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

// Login
const pendingLogin = (state) => {
    state.loading = true;
    state.error = null;
}

const fullfilledLogin = (state, action) => {
    state.loading = false
    state.error = null
    state.user = action.payload
}

const rejectedLogin = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

export { pendingRegister, fulfilledRegister, rejectedRegister, pendingLogin, fullfilledLogin, rejectedLogin }