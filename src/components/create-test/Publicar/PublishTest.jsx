import { useSelector } from "react-redux"
import { selectTestCreate } from "../../../redux/test/reducers/selectors"
import { createTestService } from "../../../services/tests/createTest"
import { selectUserId } from "../../../redux/user/reducers/selectors"


export const PublishTest = ({ display }) => {

    const test = useSelector(selectTestCreate)
    const autorId = useSelector(selectUserId)

    const handleCreateTest = async () => {
        if (test.preguntas.length < 1 || !test.titulo) return
        console.log("La cagaste")
        await createTestService({ ...test, autorId })
    }

    return (
        <main style={display}>
            <h1>Publish Test</h1>
            <button onClick={handleCreateTest}>Publicar</button>
        </main>
    )
}