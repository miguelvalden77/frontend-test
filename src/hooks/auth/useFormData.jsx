import { useState } from "react"

export const useFormData = (initialValues) => {

    const [data, setData] = useState(initialValues)

    const handleData = (evt) => {
        if (evt.target.name == "cuestion") {
            setData(evt.target.value)
            return
        }
        setData({ ...data, [evt.target.name]: evt.target.value })
    }
    const resetForm = () => setData(initialValues)

    return { data, handleData, resetForm }
}
