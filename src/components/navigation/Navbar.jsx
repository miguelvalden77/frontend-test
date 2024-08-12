import { Link } from "react-router-dom"

export const Navbar = () => {

    return (
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
            <Link to={"/create-test"}>Crear Test</Link>
            <Link to={"/categories"}>Categorias</Link>
        </nav>
    )
}