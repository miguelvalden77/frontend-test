import { useDispatch, useSelector } from "react-redux"
import { updateCreateTest } from "../../../redux/test/reducers/testSlice"
import { selectPreguntasCreate } from "../../../redux/test/reducers/selectors"


export const CuestionesActions = ({ handleData, data, resetForm }) => {

    const dispatch = useDispatch()
    const preguntas = useSelector(selectPreguntasCreate)

    const addOption = () => handleData({ target: { name: "opciones", value: [...data.opciones, { texto: "" }] } })
    const addQuestion = () => {
        const preguntaIndex = preguntas.findIndex(pregunta => pregunta.id == data.id)
        if (preguntaIndex != -1) {
            const updatedPreguntas = [...preguntas]
            updatedPreguntas[preguntaIndex] = data
            dispatch(updateCreateTest({ preguntas: updatedPreguntas }))
            resetForm()
            return
        }

        dispatch(updateCreateTest({ preguntas: [...preguntas, data] }))
        resetForm()
    }

    return (
        <section>
            <h2>Cuestiones Actions</h2>
            <button onClick={addOption}>Crear otra opción</button>
            <button onClick={addQuestion}>Guardar cuestión</button>
        </section>
    )
}