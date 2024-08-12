import { Link } from "react-router-dom"

const categories = ["Idiomas", "Historia", "Geografía", "Arte", "Ciencia", "Cine", "Matemáticas", "Deportes", "Informática", "Oposiciones", "Literatura", "Otros"]

export function AllCategories() {

    return (
        <>
            {categories.map((category, index) => (
                <Link to={`/categories/${category}`} key={index}>
                    <section>{category}</section>
                </Link>
            ))}
        </>
    )
}
