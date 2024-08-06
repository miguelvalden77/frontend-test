import { useState } from "react"

export const useFormData = (initialValues) => {

    const [data, setData] = useState(initialValues)

    const handleData = (evt) => setData({ ...data, [evt.target.name]: evt.target.value })
    const resetForm = () => setData(initialValues)

    return { data, handleData, resetForm }
}
