
const selectPreguntasCreate = (state) => state.test.createTest.preguntas
const selectTestCreate = (state) => state.test.createTest
const selectPreguntasTest = (state) => state.test.currentTest.preguntas

export { selectPreguntasCreate, selectTestCreate, selectPreguntasTest }