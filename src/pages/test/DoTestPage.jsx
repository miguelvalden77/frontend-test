import { useState } from "react";
import { AsideTests } from "../../components/current-test/AsideTests";
import CurrentQuestion from "../../components/current-test/CurrentQuestion";
import { useSelector } from "react-redux"
import { selectPreguntasTest } from "../../redux/test/reducers/selectors"

export function DoTestPage() {

    const preguntas = useSelector(selectPreguntasTest)
    const [question, setQuestion] = useState(preguntas[0])


    return (
        <main>
            <h1>Do Test Page</h1>
            <CurrentQuestion question={question} />
            <AsideTests setQuestion={setQuestion} preguntas={preguntas} />
        </main>
    )
}
