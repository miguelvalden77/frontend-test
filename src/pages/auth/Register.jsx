import { useDispatch } from "react-redux"
import { useForm } from "../../hooks/auth/useFormData"
import { registerUserActn } from "../../redux/reducers/userSlice"


export const Register = () => {

    const { data, handleData, resetForm } = useForm({ email: "", password: "", username: "" })
    const dispatch = useDispatch()


    const handleSubmit = async (evt) => {
        evt.preventDefault()

        dispatch(registerUserActn(data))
        resetForm()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleData} name="email" type="text" placeholder="correo" value={data.email} />
                <input onChange={handleData} name="username" type="text" placeholder="usuario" value={data.username} />
                <input onChange={handleData} name="password" type="password" placeholder="contraseña" value={data.password} />
                <button>Register</button>
            </form>
        </>
    )
}
