import { useDispatch } from "react-redux"


export function AsideTests({ preguntas, setQuestion }) {

    const dispatch = useDispatch()

    const changeQuestion = (question) => {

        setQuestion(question)
    }

    return (
        <section>
            {
                preguntas.map((pregunta) => {
                    return (
                        <article key={pregunta._id}>
                            <p onClick={() => changeQuestion(pregunta)}>{pregunta.enunciado}</p>
                        </article>
                    )
                })
            }
        </section>
    )
}
