import { Link } from "react-router-dom"

export const NotFoundPage = () => {

    return (
        <>
            <h1>Not Found 404</h1>
            <Link to={"/"}>Home</Link>
        </>
    )
}