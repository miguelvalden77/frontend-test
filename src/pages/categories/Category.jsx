import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getTestsByCategory } from "../../services/tests/getTests"

export function Category() {

    const [allTests, setAllTests] = useState([])
    const { category } = useParams()

    const getTests = async () => {
        const tests = await getTestsByCategory(category)
        setAllTests(tests)
    }

    useEffect(() => {
        getTests()
    }, [])

    return (
        <main>
            {category}
            {
                allTests.map((test, index) => {
                    return <Link key={index} to={`/test/${test._id}`}>
                        <h1>{test.titulo}</h1>
                    </Link>
                })
            }
        </main>
    )
}
