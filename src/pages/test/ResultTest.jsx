import { useSelector } from "react-redux"
import { selectPreguntasTest } from "../../redux/test/reducers/selectors"
import { useEffect, useState } from "react"
import { getWrongAnswers } from "../../utils/testResult"
import { AsideResult } from "../../components/resultTest/AsideResult"
import { QuestionDetail } from "../../components/resultTest/QuestionDetail"

export function ResultTest() {

    const preguntas = useSelector(selectPreguntasTest)
    const [currentPregunta, setCurrentPregunta] = useState(preguntas[0])

    useEffect(() => {
        getWrongAnswers(preguntas)
    }, [])

    return (
        <>
            <div>ResulTest</div>
            <AsideResult preguntas={preguntas} setPregunta={setCurrentPregunta} />
            <QuestionDetail question={currentPregunta} />
        </>
    )
}
