import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { resetCurrentTest } from "../../redux/test/reducers/testSlice"

export function AsideResult({ preguntas, setPregunta }) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handlePregunta = (question) => {
        setPregunta(question)
    }

    const handleFinish = () => {
        navigate("/")
        dispatch(resetCurrentTest())
    }

    return (
        <section>
            <button onClick={handleFinish}>Salir</button>
            {
                preguntas.map((pregunta, index) => {
                    return <button style={{ background: pregunta.correctaId == pregunta.answered ? "green" : "red" }} onClick={() => handlePregunta(pregunta)} key={index}>{index}</button>
                })
            }
        </section>
    )
}
