
export function QuestionDetail({ question }) {
    return (
        <section>
            <h1>{question.enunciado}</h1>
            {
                question.opciones.map((opcion, index) => {
                    return <p key={index} style={{ backgroundColor: question.correctaId == index ? "green" : "red", border: question.answered == index && "4px dashed black" }}>{opcion.texto}</p>
                })
            }
        </section>
    )
}
