
const updateCreateTestAct = (state, action) => {
    state.createTest = { ...state.createTest, ...action.payload }
}

const updateTestAct = (state, action) => {
    state.currentTest = { ...state.currentTest, ...action.payload }
}

const updateTestPreguntas = (state, action) => {
    const preguntaIndex = state.currentTest.preguntas.findIndex((pregunta) => pregunta._id == action.payload._id)
    state.currentTest.preguntas[preguntaIndex] = action.payload
}

export { updateCreateTestAct, updateTestAct, updateTestPreguntas }