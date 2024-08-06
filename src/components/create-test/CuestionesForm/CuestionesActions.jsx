import { useDispatch, useSelector } from "react-redux"
import { updateCreateTest } from "../../../redux/test/reducers/testSlice"
import { selectPreguntasCreate } from "../../../redux/test/reducers/selectors"


export const CuestionesActions = ({ handleData, data }) => {

    const dispatch = useDispatch()
    const preguntas = useSelector(selectPreguntasCreate)

    const addOption = () => handleData({ target: { name: "opciones", value: [...data.opciones, { texto: "" }] } })
    const addQuestion = () => {
        console.log(preguntas)
        dispatch(updateCreateTest({ preguntas: [...preguntas, data] }))
    }

    return (
        <section>
            <h2>Cuestiones Actions</h2>
            <button onClick={addOption}>Crear otra opción</button>
            <button onClick={addQuestion}>Guardar cuestión</button>
        </section>
    )
}