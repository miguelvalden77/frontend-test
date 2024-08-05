import { useState } from "react"
import { useForm } from "../../hooks/auth/useFormData"
import { useDispatch } from "react-redux"
import { loginUserActn } from "../../redux/reducers/userSlice"


export const Login = () => {

    const { data, handleData, resetForm } = useForm({ email: "", password: "" })
    const dispatch = useDispatch()

    const handleSubmit = (evt) => {
        evt.preventDefault()

        dispatch(loginUserActn(data))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="email" onChange={handleData} type="text" placeholder="correo" value={data.email} />
                <input name="password" onChange={handleData} type="password" placeholder="contraseña" value={data.password} />
                <button>Login</button>
            </form>
        </>
    )
}
