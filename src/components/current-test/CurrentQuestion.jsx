import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { updateCurrentPreguntas } from "../../redux/test/reducers/testSlice"

export default function CurrentQuestion({ question }) {

    const [option, setOption] = useState(question.answered || null)
    const dispatch = useDispatch()

    const changeOption = (evt) => {
        setOption(evt.target.value)
        dispatch(updateCurrentPreguntas({ ...question, answered: evt.target.value }))
    }

    useEffect(() => {
        setOption(question.answered || null)
    }, [question])


    return (
        <section>
            <h1>{question.enunciado}</h1>
            <div>
                {
                    question.opciones.map((opcion, index) => {
                        return (
                            <article key={index}>
                                <input onChange={changeOption} type="radio" name="option" checked={option == index} value={index} />
                                <p>{opcion.texto}</p>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
