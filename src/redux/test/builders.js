
const updateCreateTestAct = (state, action) => {
    state.createTest = { ...state.createTest, ...action.payload }
    console.log(state.createTest)
}

export { updateCreateTestAct }