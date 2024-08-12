import { useEffect } from "react"
import { useFormData } from "../../../hooks/auth/useFormData"
import { CuestionesActions } from "./CuestionesActions"
import { CuestionesAside } from "../CuestionesAside"
import { v4 as uuid4 } from "uuid"


export const CuestionesForm = ({ display }) => {

    const { data, handleData, resetForm } = useFormData({ enunciado: "", correctaId: null, opciones: [{ texto: "texto prueba" }, { texto: "" }], id: uuid4() })

    useEffect(() => {
        console.log(data)
    }, [data])

    const handleInputChange = (e) => {
        const { value } = e.target;
        const index = parseInt(e.target.name.split("-")[1])

        const updatedOpciones = JSON.parse(JSON.stringify([...data.opciones]));
        console.log({ value, index, opcion: updatedOpciones[index] })
        updatedOpciones[index].texto = value;
        const parseEvt = {
            target: {
                name: "opciones",
                value: updatedOpciones
            }
        }
        handleData(parseEvt);
    };

    const handleCorrectId = (id) => handleData({ target: { name: "correctaId", value: id } })
    const handleSubmit = (evt) => {
        evt.preventDefault()
        resetForm()
    }

    return (
        <main style={display}>
            <CuestionesActions resetForm={resetForm} handleData={handleData} data={data} />
            <h2>Cuestiones Form</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enunciado" onChange={handleData} type="text" name="enunciado" value={data.enunciado} />
                {
                    data.opciones.map((opcion, index) => {
                        return (
                            <article key={index}>
                                <input checked={index == data.correctaId} type="radio" name="opcion" onChange={() => handleCorrectId(index)} />
                                <input name={`opcion-${index}`} type="text" value={opcion.texto} onChange={handleInputChange} />
                            </article>
                        )

                    })
                }
                <button>Añadir</button>
            </form>
            <CuestionesAside handleData={handleData} />
        </main>
    )
}