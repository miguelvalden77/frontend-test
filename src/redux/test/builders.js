
const updateCreateTestAct = (state, action) => {
    state.createTest = { ...state.createTest, ...action.payload }
    console.log(state.createTest)
}

const updateTestAct = (state, action) => {
    state.currentTest = { ...state.currentTest, ...action.payload }
    console.log(state.currentTest)
}

const updateTestPreguntas = (state, action) => {
    console.log(state.currentTest.preguntas[action.payload.index])
    state.currentTest.preguntas[action.payload.index] = action.payload.pregunta
    console.log(state.currentTest.preguntas[action.payload.index])
}

export { updateCreateTestAct, updateTestAct, updateTestPreguntas }