
export const getWrongAnswers = (preguntas) => {

    const wrongAnswers = preguntas.filter((pregunta) => {

        if (pregunta.answered != pregunta.correctaId) {
            return pregunta
        }
    })

    console.log(wrongAnswers)
    return wrongAnswers
}
