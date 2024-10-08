import { useSelector } from "react-redux"
import { selectPreguntasTest } from "../../../redux/test/reducers/selectors"
import { useEffect, useRef, useState } from "react"
import { getWrongAnswers } from "../../../utils/testResult"
import { useNavigate } from "react-router-dom"

export function AdvertiseFinish({ setIsOpen }) {

    const preguntas = useSelector(selectPreguntasTest)
    const [message, setMessage] = useState("")
    const navigate = useNavigate()
    const modalRef = useRef(null)

    const showMessage = () => {
        const noAnswered = preguntas.filter((pregunta) => !("answered" in pregunta))
        console.log(noAnswered)
        if (noAnswered.length > 0) {
            setMessage(`Aún quedan ${noAnswered.length} preguntas sin responder`)
            return
        }
        setMessage("Estás seguro??")
    }

    useEffect(() => {
        showMessage()
        const outsideClick = (evt) => {
            if (modalRef.current && !modalRef.current.contains(evt.target)) {

                console.log("click fuera")
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", outsideClick)

        return () => {
            document.removeEventListener("mousedown", outsideClick)
        }
    }, [modalRef])

    return (
        <section ref={modalRef}>
            <div>{message}</div>
            <button onClick={() => navigate("/result")}>Terminar</button>
        </section>
    )
}
