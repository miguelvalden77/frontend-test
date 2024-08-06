import { useState } from "react"
import { ProjectActions } from "./ProjectActions"
import { useFormData } from "../../../hooks/auth/useFormData"
import { useDispatch } from "react-redux"
import { updateCreateTest } from "../../../redux/test/reducers/testSlice"

const categories = ["Idiomas", "Historia", "Geografía", "Arte", "Ciencia", "Cine", "Matemáticas", "Deportes", "Informática", "Oposiciones", "Literatura", "Otros"]

export const ProjectForm = ({ display, setTestComponent }) => {

    const { data, handleData, resetForm } = useFormData({ titulo: "", descripcion: "", categoria: "Otros" })
    const dispatch = useDispatch()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        dispatch(updateCreateTest(data))
        setTestComponent("cuestiones")
    }

    return (
        <main style={display}>
            <ProjectActions />
            <h1>Proyecto</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleData} value={data.titulo} type="text" name="titulo" />
                <input onChange={handleData} value={data.descripcion} type="text" name="descripcion" />
                <select onChange={handleData} value={data.categoria} name="categoria">
                    {
                        categories.map((category) => {
                            return <option key={category} value={category}>{category}</option>
                        })
                    }
                </select>
                <button>Guardar</button>
            </form>
        </main>
    )
}