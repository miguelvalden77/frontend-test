import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getTestInfo } from "../../services/tests/getTests"
import { useDispatch } from "react-redux"
import { updateCurrentTest } from "../../redux/test/reducers/testSlice"

export function TestPage() {

    const { id } = useParams()
    const [testInfo, setTestInfo] = useState(null)
    const dispatch = useDispatch()

    const getTest = async () => {
        const test = await getTestInfo(id)
        console.log(test)
        setTestInfo(test)
        dispatch(updateCurrentTest(test))
    }

    useEffect(() => {
        getTest()
    }, [])

    return (
        <main>
            <h1>{id}</h1>
            <h1>{testInfo?.titulo}</h1>
            <h1>{testInfo?.descripcion}</h1>
            <Link to={`/do-test/${id}`}>Comenzar</Link>
        </main>
    )
}
