import { useSelector } from "react-redux"
import { selectPreguntasCreate } from "../../redux/test/reducers/selectors"


export const CuestionesAside = ({ handleData }) => {

    const preguntas = useSelector(selectPreguntasCreate)

    const handleChangeCuestion = (cuestion) => {
        console.log(cuestion)
        handleData({ target: { value: cuestion, name: "cuestion" } })
    }

    return (
        <aside>
            <p>Cuestiones</p>
            {preguntas.map((pregunta, index) => {
                return <p onClick={() => handleChangeCuestion(pregunta)} key={index}>{pregunta.enunciado}</p>
            })}
        </aside>
    )
}