import { CuestionesActions } from "./CuestionesActions"


export const CuestionesForm = ({ display }) => {

    return (
        <main style={display}>
            <CuestionesActions />
            <h2>Cuestiones Form</h2>
        </main>
    )
}