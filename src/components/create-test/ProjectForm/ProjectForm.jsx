import { ProjectActions } from "./ProjectActions"


export const ProjectForm = ({ display }) => {

    return (
        <main style={display}>
            <ProjectActions />
            <h1>Proyecto</h1>
        </main>
    )
}