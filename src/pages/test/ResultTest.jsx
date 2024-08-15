import { useSelector } from "react-redux"
import { selectPreguntasTest } from "../../redux/test/reducers/selectors"

export function ResultTest() {

    const preguntas = useSelector(selectPreguntasTest)

    return (
        <div>ResulTest</div>
    )
}
